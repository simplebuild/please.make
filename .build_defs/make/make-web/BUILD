package(default_visibility=['PUBLIC'])

filegroup(name='make-web', srcs=[
    'make-web.build_defs',
])

subinclude('//.build_defs/make/make-web')
system_make_yarn(name='yarn', version=check_config(key='WEB_YARN_VERSION', example='1.22.4'))
