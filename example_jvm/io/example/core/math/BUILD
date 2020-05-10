package(default_visibility=['PUBLIC'])
subinclude('//.build_defs/make')

make_java_library(
    name = 'math',
    srcs = glob(['*.java'], ['*Test.java'])
)

make_java_test(
    name = 'test',
    srcs = glob(['*Test.java']),
    deps = [
        ':math',
        '//example_jvm:junit'
    ]
)
