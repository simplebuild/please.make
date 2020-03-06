package(default_visibility=['PUBLIC'])
subinclude('//.build_defs/make')

make_go_package()

make_go_binary(
    name = 'client'
)

make_docker_image(
    name = 'docker',
    srcs = [
        '@linux_amd64:client'
    ]
)
