package(default_visibility=['PUBLIC'])
subinclude('//.build_defs/make')

make_python_library(
    name='math',
    srcs=glob(['*.py'], ['*_test.py']),
)

make_python_test(
    name='test',
    srcs=glob(['*_test.py']),
    deps=[':math']
)
