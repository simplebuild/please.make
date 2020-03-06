package(default_visibility=['PUBLIC'])
subinclude('//.build_defs/make')

make_go_proto(
    name = 'go',
    srcs = ['book.proto'],
    grpc = True,
)

make_python_proto(
    name = 'py',
    srcs = ['book.proto'],
    grpc = True,
)
