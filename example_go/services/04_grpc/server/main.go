package main

import (
	"log"
	"net"

	pb "example_go/services/04_grpc/proto"

	"google.golang.org/grpc"
)

const (
	port = ":50051"
)

type server struct{}

func (s *server) ListBooks(request *pb.Empty, responseStream pb.BookSerivce_ListBooksServer) error {
	responseStream.Send(&pb.Book{Id: "01", Name: "book-01"})
	responseStream.Send(&pb.Book{Id: "02", Name: "book-02"})
	responseStream.Send(&pb.Book{Id: "03", Name: "book-03"})
	return nil
}

func main() {
	lis, err := net.Listen("tcp", port)
	if err != nil {
		log.Fatalf("failed 1to listen: %v", err)
	}
	s := grpc.NewServer()
	pb.RegisterBookSerivceServer(s, &server{})
	log.Println("listening on", port)
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
