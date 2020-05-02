import grpc
import logging
from absl import app, flags

import example_python.app_02_grpc.proto.greeter_pb2 as greeter_pb2
import example_python.app_02_grpc.proto.greeter_pb2_grpc as greeter_pb2_grpc

flags.DEFINE_integer('port', 50051, 'Port to serve book service on')


def main(argv):
    client = greeter_pb2_grpc.GreeterStub(grpc.insecure_channel(f'localhost:{flags.FLAGS.port}'))

    response = client.SayHello(greeter_pb2.HelloRequest(name='Dr. Neil'))
    logging.info("Greeter client received: " + response.message)


if __name__ == '__main__':
    app.run(main)
