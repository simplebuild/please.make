package(default_visibility=['PUBLIC'])

filegroup(name='make-rust', srcs=[
    'make-rust.build_defs',
])

subinclude(':make-rust')

make_rust_install_binary(name='cargo2junit', package='cargo2junit', version=check_config(key='RUST_CARGO_2_JUNIT_VERSION', example='0.1.5'))
make_rust_pull_github_binary(name='rq', repository='https://github.com/dflemstr/rq', version=check_config(key='RUST_RQ_VERSION', example='v1.0.2'))
system_make_jq_tool(name='jq', version=check_config(key='RUST_JQ_VERSION', example='1.6'))
