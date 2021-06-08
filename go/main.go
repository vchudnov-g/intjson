package main

import (
	"fmt"
	"log"
	
	"google.golang.org/protobuf/encoding/protojson"	

	"int64json/proto/intjson"
)


func main() {
	messages := []*intjson.Numbers{
		&intjson.Numbers{
			Label: "small numbers",
			Signed64: -10,
			Unsigned64: 12,
			Signed32: -210,
			Unsigned32: 212,
		},
		&intjson.Numbers{
			Label: "large numbers",
			Signed64: -1<<60,
			Unsigned64: 1<<60,
			Signed32: -1<<30,
			Unsigned32: 1<<30,
		},
	}

	for idx, numbers := range messages {
		marshalled, err := protojson.Marshal(numbers)
		if err != nil {
			log.Fatal("could not marshal message #%d: %#v", idx, numbers)
		}
		fmt.Printf("%d: %v\n\t%s\n", idx, numbers, marshalled)
	}
}
