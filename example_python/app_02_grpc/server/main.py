import grpc
import time
import logging
from concurrent import futures
from absl import app, flags

import example_python.app_02_grpc.proto.greeter_pb2 as greeter_pb2
import example_python.app_02_grpc.proto.greeter_pb2_grpc as greeter_pb2_grpc

flags.DEFINE_integer('port', 50051, 'Port to serve book service on')


class Greeter(greeter_pb2_grpc.GreeterServicer):

    def SayHello(self, request, context):
        return greeter_pb2.HelloReply(message='Hello, %s!!' % request.name)


class GreeterServer:
    def __init__(self):
        self.server = None

    def run(self, port):
        if (self.server):
            raise RuntimeError('Server is already running')
        self.server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
        greeter_pb2_grpc.add_GreeterServicer_to_server(Greeter(), self.server)
        self.server.add_insecure_port('[::]:' + str(port))
        self.server.start()
        logging.info("Listening on :" + str(port))

    def stop(self):
        if (self.server):
            logging.info("Stopping server")
            self.server.stop(0)


def main(argv):
    server = GreeterServer()
    server.run(flags.FLAGS.port)

    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        pass
    finally:
        server.stop()


if __name__ == '__main__':
    app.run(main)
