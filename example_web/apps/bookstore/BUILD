package(default_visibility=['PUBLIC'])
subinclude('//.build_defs/make')

make_web_app(
    name = 'bookstore',
    srcs = glob(['src/*.tsx'], ['src/*.test.tsx']),
    deps = [
        '//example_web/core/book'
    ]
)

make_web_app_devserver(
    name = 'devserver',
    app = ':bookstore'
)

make_web_test(
    name = 'test',
    srcs = glob(['src/*.test.tsx']),
    deps = [':bookstore']
)

make_docker_image(
    name = 'docker',
    srcs = [':bookstore']
)
