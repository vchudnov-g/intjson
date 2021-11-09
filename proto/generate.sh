#!/bin/bash
protoc -I . --go_out ../go intjson.proto
protoc -I . --python_out ../python intjson.proto
protoc -I . --java_out ../java/src/main/java intjson.proto
protoc -I . --ruby_out ../ruby intjson.proto
protoc -I . --csharp_out ../csharp intjson.proto
protoc -I . --php_out ../php intjson.proto
protoc -I . --js_out ../js intjson.proto

