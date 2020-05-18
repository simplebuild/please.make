package(default_visibility=['PUBLIC'])
subinclude('//.build_defs/make')

make_rust_package()

make_rust_binary()

make_docker_image(
    name = 'docker',
    srcs = [
        make_rust_sources()
    ]
)
