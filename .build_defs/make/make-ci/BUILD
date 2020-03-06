package(default_visibility = ['PUBLIC'])
subinclude('//.build_defs/make/make-docker')

make_docker_image(
    name = 'ci',
    image_name = 'ci',
    tag = '1.0',
    dockerfile = 'ci.dockerfile'
)
