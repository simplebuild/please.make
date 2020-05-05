package(default_visibility=['PUBLIC'])
subinclude('//.build_defs/make')

make_web_component(
    name = 'book',
    srcs = glob(['*.tsx'], ['*.test.*'])
)

make_web_test(
    name = 'test',
    srcs = glob(['*.test.*']),
    deps = [':book']
)
