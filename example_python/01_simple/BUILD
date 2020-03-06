package(default_visibility=['PUBLIC'])
subinclude('//.build_defs/make')

make_python_app(
    name='app',
    srcs=['main.py'],
    deps=[
        '//example_python/core'
    ]
)

make_python_app_runner(
    name='01_simple',
    app=':app',
    main='main.py'
)

make_python_test(
    name='test',
    srcs=['main_test.py'],
    deps=[
        ':app'
    ]
)

make_docker_image(
    name='docker',
    srcs=[
        ':app'
    ]
)
