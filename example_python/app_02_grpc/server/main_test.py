import unittest
import grpc

import example_python.app_02_grpc.proto.greeter_pb2 as greeter_pb2
import example_python.app_02_grpc.proto.greeter_pb2_grpc as greeter_pb2_grpc

from .main import GreeterServer


class GreeterTest(unittest.TestCase):
    server = None
    client = None

    @classmethod
    def setUpClass(cls):
        cls.server = GreeterServer()
        cls.server.run(50051)
        cls.client = greeter_pb2_grpc.GreeterStub(grpc.insecure_channel('localhost:50051'))

    @classmethod
    def tearDownClass(cls):
        cls.server.stop()

    def test_hello(self):
        response = self.client.SayHello(greeter_pb2.HelloRequest(name='Dr. Neil'))
        self.assertEqual(response.message, 'Hello, Dr. Neil!!')
