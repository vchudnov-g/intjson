#!/bin/bash
protoc -I . --go_out ../go intjson.proto
protoc -I . --python_out ../python intjson.proto
