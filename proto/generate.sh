#!/bin/bash
protoc -I . --go_out ../go intjson.proto
protoc -I . --python_out ../python intjson.proto
protoc -I . --java_out ../java/src/main/java intjson.proto
