# int64json


This repo checks that (u)int64s are encoded correctly into JSON. As explained in the [Discovery file description](https://developers.google.com/discovery/v1/type-format) and specified in the [protobuf documentation](https://developers.google.com/protocol-buffers/docs/proto3#json) these types must be encoded as strings as per the JSON standard.

## Instructions

Run `cd proto && ./generate.sh` to generate the protobuf stubs for your language. Then go to your language directory to run the code.

## Results: int encoding

### Expectation

* `int32` and `uint32` are JSON encoded as numbers, regardless of magnitude
* `int64` and `uint64` are JSON encoded as strings, regardless of magnitude

### By language

 - Go: PASSED (tested here: `go run main.go`)
 - Python: PASSED (tested here: `python3 main.py`)
 - PHP: PASSED (tested [separately](https://github.com/googleapis/gapic-generator-php/pull/304))
 - Java: PASSED (tested here: `mvn compile && mvn exec:java`)
 - C#: PASSED (tested here `(cd csharp && dotnet build && dotnet ./bin/Debug/netstandard2.0/csharp.dll)`)
 - Ruby: PASSED (tested here `ruby ./ruby/main.rb`)



## Results: unused enum types
### Expectation
protoc generates code for both the top-level and nested enum types, even though neither is used as a field type. The languages tested all seem to do that, as indicated by `GENERATED` below.

### By Language
  - Go: GENERATED
    - string from enum: `EndingLetters_OMEGA.String()`
    - enum from string: `EndingLetters_value["OMEGA"]`
  - Java: GENERATED
    - string from enum ([ref](https://stackoverflow.com/a/17741770)): `EndingLetters.name(EndingLetters.OMEGA)`
    - enum from string ([ref](https://stackoverflow.com/a/604426)): `EndingLetters.valueOf("OMEGA")`
  - C#: GENERATED
  - Python: GENERATED
    - string from enum and enum from string can beaccessed through ProtoPlus
  - Ruby: GENERATED
  - PHP: GENERATED
    - string from enum: `name(...)`
    - enum from string: `value(...)`
  - JavaScript: GENERATED

## Contributing

1. Add instructions to `proto/generate.sh` to generate the proto stubs for your language
2. Make a top-level directory for your language.
3. Create a small program that will populate all fields with small and large values. See the `go/main.go` implementation for an example.
4. Add the results of your investigation above.
5. Commit your new source files and the generated proto stubs.
