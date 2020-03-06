package(default_visibility=['PUBLIC'])
subinclude('//.build_defs/make')

make_go_proto(
    name = 'gen',
    srcs = ['book.proto'],
    grpc = True,
)

make_go_package()
