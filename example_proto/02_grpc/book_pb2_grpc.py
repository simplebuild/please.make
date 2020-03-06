# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
import grpc

from example_proto.02_grpc import book_pb2 as example__proto_dot_02__grpc_dot_book__pb2


class BookSerivceStub(object):
  # missing associated documentation comment in .proto file
  pass

  def __init__(self, channel):
    """Constructor.

    Args:
      channel: A grpc.Channel.
    """
    self.ListBooks = channel.unary_stream(
        '/BookSerivce/ListBooks',
        request_serializer=example__proto_dot_02__grpc_dot_book__pb2.Empty.SerializeToString,
        response_deserializer=example__proto_dot_02__grpc_dot_book__pb2.Book.FromString,
        )


class BookSerivceServicer(object):
  # missing associated documentation comment in .proto file
  pass

  def ListBooks(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')


def add_BookSerivceServicer_to_server(servicer, server):
  rpc_method_handlers = {
      'ListBooks': grpc.unary_stream_rpc_method_handler(
          servicer.ListBooks,
          request_deserializer=example__proto_dot_02__grpc_dot_book__pb2.Empty.FromString,
          response_serializer=example__proto_dot_02__grpc_dot_book__pb2.Book.SerializeToString,
      ),
  }
  generic_handler = grpc.method_handlers_generic_handler(
      'BookSerivce', rpc_method_handlers)
  server.add_generic_rpc_handlers((generic_handler,))
