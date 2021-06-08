#!/bin/bash
protoc -I . --go_out ../go intjson.proto
