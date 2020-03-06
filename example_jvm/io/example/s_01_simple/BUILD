package(default_visibility=['PUBLIC'])
subinclude('//.build_defs/make')

make_java_binary(
    name = 's_01_simple',
    srcs = glob(['*.java']),
    main_class = 'io.example.s_01_simple.Main',
    deps = ['//example_jvm/io/example/core/sum']
)

make_docker_image(
    name = 'docker',
    srcs = [':s_01_simple']
)
