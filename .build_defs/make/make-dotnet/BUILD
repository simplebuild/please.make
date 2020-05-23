package(default_visibility=['PUBLIC'])

filegroup(name='make-dotnet', srcs=[
    'make-dotnet.build_defs',
])

subinclude(':make-dotnet')

make_dotnet_tool(name='trx2junit', version=check_config(key='DOTNET_TRX_2_JUNIT_VERSION', example='1.3.0'))
