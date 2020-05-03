package(default_visibility=['PUBLIC'])
subinclude('//.build_defs/make')

make_python_proto(
    name = 'gen',
    srcs = glob(['*.proto']),
    grpc = True,
)

make_python_library(
    name = 'proto',
    srcs = glob(['*.py']),
)
