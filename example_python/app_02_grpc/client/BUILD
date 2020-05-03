package(default_visibility=['PUBLIC'])
subinclude('//.build_defs/make')

make_python_app_runner(
    name='client',
    app=':app',
    main='main.py'
)

make_python_app(
    name='app',
    srcs=glob(['*.py', '*_test.py']),
    deps=[
        '//example_python/app_02_grpc/proto'
    ]
)
