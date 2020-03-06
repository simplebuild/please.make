package main

import (
	"fmt"
	"io"
	"log"
	"time"

	pb "example_go/services/04_grpc/proto"

	"golang.org/x/net/context"
	"google.golang.org/grpc"
)

const (
	address = "localhost:50051"
)

func main() {
	conn, err := grpc.Dial(address, grpc.WithInsecure())
	if err != nil {
		log.Fatalf("Did not connect: %v", err)
	}
	defer conn.Close()

	c := pb.NewBookSerivceClient(conn)

	ctx, cancel := context.WithTimeout(context.Background(), time.Second)
	defer cancel()
	r, err := c.ListBooks(ctx, &pb.Empty{})
	if err != nil {
		log.Fatalf("Failed to list books: %v", err)
	}
	for {
		book, err := r.Recv()
		if err == io.EOF {
			break
		}
		if err != nil {
			fmt.Println("Unexpected Error", err)
			break
		}
		log.Printf("Book: %v", book)
	}
}
