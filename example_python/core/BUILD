package(default_visibility=['PUBLIC'])
subinclude('//.build_defs/make')

make_python_library(
    name='core',
    srcs=glob(['*.py'], ['*_test.py']),
)

make_python_test(
    name='test-sum',
    srcs=['sum_test.py'],
    deps=[':core']
)

make_python_test( # split into 2 test suites just to test concurrency during build
    name='test-sub',
    srcs=['sub_test.py'],
    deps=[':core']
)
