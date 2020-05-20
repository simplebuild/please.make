package(default_visibility=['PUBLIC'])
subinclude('//.build_defs/make')

make_dotnet_project()

make_dotnet_app_runner(app=':app')
make_dotnet_app(name='app')

make_docker_image(
    name = 'docker',
    srcs = [
        ':app'
    ]
)
