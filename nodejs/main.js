// instruction: run the following commands
// cd nodejs && npm install && node main.js
const protobuf = require('protobufjs');
const root = protobuf.Root.fromJSON(require('./intjson.json'));
const numbersMessage = root.lookup('Numbers');

const values = [{
  label: "small number",
  signed64: -10,
  unsigned64: 12,
  signed32: -210,
  unsigned32: 212
},{
  label: "large number",
  signed64: -1<<60,
  unsigned64:1<<60,
  signed32: -1<<30,
  unsigned32: 1<<30,
}]

values.forEach(val => {
  const before = numbersMessage.fromObject(val);
  console.log('before conversion, message object::\n ', before);
  const after = numbersMessage.toObject(before, {longs: String});
  console.log('after conversion, json object::\n ', after);
});

//----------------------------print out result----------//
//   before conversion, message object::
//   Numbers {
//   label: 'small number',
//   signed64: Long { low: -10, high: -1, unsigned: false },
//   unsigned64: Long { low: 12, high: 0, unsigned: true },
//   signed32: -210,
//   unsigned32: 212
// }
// after conversion, json object::
//   {
//   label: 'small number',
//   signed64: '-10',
//   unsigned64: '12',
//   signed32: -210,
//   unsigned32: 212
// }
// before conversion, message object::
//   Numbers {
//   label: 'large number',
//   signed64: Long { low: -268435456, high: -1, unsigned: false },
//   unsigned64: Long { low: 268435456, high: 0, unsigned: true },
//   signed32: -1073741824,
//   unsigned32: 1073741824
// }
// after conversion, json object::
//   {
//   label: 'large number',
//   signed64: '-268435456',
//   unsigned64: '268435456',
//   signed32: -1073741824,
//   unsigned32: 1073741824
// }
