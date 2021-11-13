Generate JSON Definiton
`npx pbjs -t json proto/intjson.proto > js/intjson.json`
Generate Javascript and Typescript Definitio
`npx pbjs -t static-module -r intjson_proto proto/intjson.proto > js/intjson.js | npx pbts js/intjson.js -o js/intjson.d.ts`
