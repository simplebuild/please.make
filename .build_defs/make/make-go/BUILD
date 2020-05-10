package(default_visibility=['PUBLIC'])

filegroup(name='make-go', srcs=[
    'make-go.build_defs',
])

subinclude(':make-go')

make_go_get_binary(name='go-junit-report', package='github.com/jstemmer/go-junit-report',
                   version=check_config(key='GO_JUNIT_REPORT_VERSION', example='v0.9.1'))
make_go_get_binary(name='protoc-gen-go', package='github.com/golang/protobuf/protoc-gen-go',
                   version=check_config(key='GO_PROTOC_GEN_GO_VERSION', example='v1.4.1'))
system_make_protoc_tool(name='protoc', version=check_config(key='GO_PROTOC_VERSION', example='3.11.4'))
