# please.make ![CI](https://github.com/simplebuild/please.make/workflows/CI/badge.svg?branch=master)

**please.make** is a minimalistic set of rules for the [please build system](https://github.com/thought-machine/please) that allows managing hybrid backend/frontend monorepos with the tools commonly used in a multi-repo setup (webpack, virtualenv, go.mod, cargo, etc.)

Currently supported: Python, Golang, Web/Node.js, Java, gRPC, Docker

Experimental: Rust/Cargo, .NET

Motivation
==========

The monorepo build tools like [Bazel](https://github.com/bazelbuild/bazel), [Buck](https://github.com/facebook/buck), [Pants](https://github.com/pantsbuild/pants), [Please](https://github.com/thought-machine/please) give you fast, reproducible, incremental builds. However, it might be a bit challenging to adopt them as they tend to replace the tools we get used to, like virtualenv/requirements.txt for Python, webpack for web apps or go.mod for Go. To address that, **please.make** provides a minimal orchestration layer to unify build/test commands across languages while leveraging the existing ecosystem. Think of it as a more flexible Makefile. It's also an IDE friendly without additional plugins.

Getting started
===============

This repository is a boilerplate for your monorepo.


To build all projects, run:
```sh
./pleasew build # or "plz build" if you have 'please' installed
```

To test all projects, run:
```sh
./pleasew test # or "plz test" if you have 'please' installed
```

To run a project:
```sh
./pleasew run <path-to-project>:<target>
```

A few examples:
```sh
# example running a service
./pleasew run example_go/services/04_grpc/server
> 2020/05/02 10:56:54 listening on :50051

# example packaging it into docker
./pleasew run example_go/services/04_grpc/server:docker
> Sending build context to Docker daemon  6.348MB
> Step 1/5 : FROM alpine:3.7
>  ---> 34ea7509dcad
> ...
> Successfully tagged docker.pkg.github.com/.../example_go.services.04_grpc.server:44ac2c834ef8

# example building web app
./pleasew build example_web/apps/bookstore 
> Build finished; total time 90ms, incrementality 50.0%. Outputs:
> //example_web/apps/bookstore:bookstore:
>   plz-out/gen/example_web/apps/bookstore/dist

# example running local development server
./pleasew run example_web/apps/bookstore:devserver
> listening on localhost:3000
> DONE Compiled successfully in 1170ms

# example packaging nginx with web app into docker
./pleasew run example_web/apps/bookstore:docker
> Sending build context to Docker daemon  40.58kB
> Step 1/2 : FROM nginx:1.17.3
>  ---> 5a3221f0137b
> Step 2/2 : COPY dist/* /usr/share/nginx/html/
>  ---> Using cache
>  ---> e30a249c8e55
> Successfully built e30a249c8e55
> Successfully tagged docker.pkg.github.com/.../example_web.apps.bookstore:35a7a76d730a
```

To integrate with your repo, copy `.build_defs`, `.plzconfig` and `pleasew` into your repo, and start adding `BUILD` files.

Concept
=======

Python
------

**please.make** requires `python3` and `virtualenv` to be installed separately.

Build produces a `dist` folder that contains all *.py files of the project and its dependencies, and `requirements.txt` (rules: `make_python_app` and `make_python_library`).

```sh
plz-out/gen/example_python
├── app_01_simple
│   ├── dist
│   │   └── example_python
│   │       ├── app_01_simple
│   │       │   └── main.py
│   │       ├── core
│   │       │   └── math
│   │       │       ├── __init__.py
│   │       │       └── sum.py
│   │       └── requirements.txt
```

The `dist` folder then can be run with local Python interpreter or packaged into docker (rules: `make_python_app_runner`, `make_docker_image`).

On every `plz run <python-target>` or `plz test <python-target>`, **please.make** syncs venv from requirements.txt and then freezes requirements.txt (with *"venv/bin/pip3 freeze"*).

To add a new 3rd party dependency:
1. add `name` or `name==version` into `requirements.txt`, or run `./venv/bin/pip3 install name(==version)`
1. run `plz test` to freeze requirements.txt (internally triggers *"venv/bin/pip3 freeze > requirements.txt"*)

To remove a dependency:
1. run `./venv/bin/pip3 uninstall <name>`
1. run `plz test` to freeze requirements.txt (internally triggers *"venv/bin/pip3 freeze > requirements.txt"*)

Ideally we should be able to uninstall dependencies by simply removing them from the requirements.txt, but this is not supported yet.

While every build/test command is fully isolated and executed in a sandbox, **please.make** respects the `PIP3_CACHE_FOLDER` environment variable to leverage the system cache.

Go
--

**please.make** requires `go` to be installed separately.

Since Go is monorepo-friendly, the go rules are very lightweight.

Keep the same code structure, use go cli as usual, track dependencies with `go.mod` and `go.sum`, just seed the `BUILD` files with simple `make_go_package`, `make_go_binary` and `make_go_test` rules.

No need to specify dependencies as please.make analyzes all imports and appends them to the dependency graph for you.

Cross-compile with `./pleasew build @linux_amd64//<path-to-project>`.

Build is isolated, but `GOCACHE` and `GOPATH` variables are inherited to leverage the system cache.

Protobuf / gRPC
---------------

Every ecosystem is unique, so there's no a single rule. Currently, Protobuf / gRPC is only supported for Python and Go with `make_python_proto` and `make_go_proto` rules.

For Python, **please.make** uses `grpcio-tools` package which should be listed in the requirements.txt.

For Go, **please.make** pulls `protoc` and `protoc-gen-go` from GitHub. The versions are pinned in the `.plzconfig` file.

Once .proto files are updated, the corresponding protobuf / gRPC targets should be re-run with `plz run` to re-generate the code.

Web
---

**please.make** requires `node` to be installed separately.

Initialize `package.json` as you would for any other project. To add new dependency simply use `yarn add` command.

**please.make** is agnostic of tooling used to build/run/test web projects. Any custom toolchain could be added to the project by using `make_web_toolchain` rule, which only requires `build.js`, `start.js` and `test.js` scripts to be defined (see `example_web/toolchain`).

Use `make_web_component` rule to define sharable web components and `make_web_app` rule to define web application.

To enable local web development server use `make_web_app_devserver` rule.

Test units are defined using `make_web_test` rule.

Java
----

Java support is nice in all monorepo build tools, so **please.make** currently just re-uses original please rules, but maven/gradle support is being explored.

Docker
------

The rule `make_docker_image` builds an image from a Dockerfile. As a context, docker receives a tarball with supplied sources and artifacts from other rules.

Build an image with `plz run <path-to-docker-target>` (will use default repository from .plzconfig and hash-based tag). To override, use `DOCKER_REPOSITORY=... DOCKER_TAG=... plz run <path-to-docker-target>`. To push the image add `DOCKER_PUSH=1`.

IDE Setup
=========

Run `plz test` at least once to pull 3rd party dependencies (will create _venv_, _node_modules_, etc.)

VSCode
------

**Python**: Specify the path to the venv folder in the VSCode settings. For convenience, `.vscode/settings.json` already does that. Also, there is an `.env` file that defines the `PYTHONPATH=.` to indicate the root level of imports.

**Java**: All maven jars get stored in `plz-out/gen/<jvm-root>/*.jar`. This path should be added to the classpath.

Other languages should work just fine.

If VSCode IntelliSense still doesn't work, open "example_<lang>" separately as a root of workspace (VSCode might not be able to discover cargo, go.mod, etc. in a nested folder).


IntelliJ IDEA
-------------

Open this project in IDEA as a simple folder (`File > Open` in IDEA, or `idea .` in terminal).

**Python**: Navigate to `Project Structure (⌘;) > Platform Settings > SDKs`, click `+` and choose `Python SDK`. In the dialog, select `Virtualenv Environment > Existing environment` and specify the path to the `example_python/venv/bin/python`. Check `Make available to all projects` and click `OK` to complete. Navigate to `Modules`, mark "example_python" folder as "Sources" and "venv" as "Excluded". Navigate to `Facets`, click `+`, choose `Python` and select the Python SDK created in the previous step.

**Go**: Open any .go file and most likely IDEA would suggest to enable `vgo` (go modules). If it didn't, navigate to `Preferences` (`⌘,`), search for `vgo` and enable it.

**Java**: Navigate to `Project Structure (⌘;) > Project` menu and choose `JDK`, then navigate to `Modules > Dependencies`, click `+`, add `JARs or directories`, specify path to `plz-out/gen/example_jvm` (it has the jars pulled from maven).

Other languages should work out of the box, but don't forget to open `Project Structure (⌘;) > Modules` and mark "example_<lang>" as "Sources".
