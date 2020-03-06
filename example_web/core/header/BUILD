package(default_visibility=['PUBLIC'])
subinclude('//.build_defs/make')

make_web_component(
    name = 'header',
    srcs = glob(['*.tsx'], ['*.test.tsx'])
)

make_web_test(
    name = 'test',
    srcs = glob(['*.test.tsx']),
    deps = [':header']
)
