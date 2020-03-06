package(default_visibility=['PUBLIC'])

filegroup(name='make-go', srcs=[
    'make-go.build_defs',
])

subinclude(':make-go')
make_go_get_binary(name='go-junit-report', package='github.com/jstemmer/go-junit-report', version='af01ea7')
make_go_get_binary(name='protoc-gen-go', package='github.com/golang/protobuf/protoc-gen-go', version='v1.3.2')
system_make_protoc_tool(name='protoc', version='3.9.1')
