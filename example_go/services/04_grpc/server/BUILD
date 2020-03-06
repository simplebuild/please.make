package(default_visibility=['PUBLIC'])
subinclude('//.build_defs/make')

make_go_package()

make_go_binary(
    name = 'server'
)

make_docker_image(
    name = 'docker',
    srcs = [
        '@linux_amd64:server'
    ]
)
