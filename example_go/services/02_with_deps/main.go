package main

import (
	"example_go/core/math"
	"fmt"

	"github.com/google/uuid"
)

func main() {
	fmt.Printf("Hello! 1+1=%v! New UUID: %v\n", math.Sum(1, 1), uuid.New())
}
