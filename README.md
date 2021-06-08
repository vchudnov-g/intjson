# int64json


This repo checks that (u)int64s are encoded correctly into JSON. As explained in the [Discovery file description](https://developers.google.com/discovery/v1/type-format) and specified in the [protobuf documentation](https://developers.google.com/protocol-buffers/docs/proto3#json) these types must be encoded as strings as per the JSON standard.

## Instructions

Run `proto/generate.sh` to generate the protobuf stubs for your language. Then go to your language directory to run the code.

## Results

### Working as expected:

**Go, Python**

* `int32` and `uint32` are JSON encoded as numbers, regardless of magnitude
* `int64` and `uint64` are JSON encoded as strings, regardless of magnitude

## Contributing

1. Add instructions to `proto/generate.sh` to generate the proto stubs for your language
2. Make a top-level directory for your language.
3. Create a small program that will populate all fields with small and large values. See the `go/main.go` implementation for an example.
4. Add the results of your investigation above.
5. Commit your new source files and the generated proto stubs.
