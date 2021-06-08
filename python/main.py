import intjson_pb2 as pb
from google.protobuf.json_format import MessageToJson

def main():
    messages = [pb.Numbers(label="small numbers", signed64=-10, unsigned64=12, signed32=-210, unsigned32=212),
                pb.Numbers(label="large numbers", signed64=-1<<60, unsigned64=1<<60, signed32=-1<<30, unsigned32=1<<30),]

    for idx, numbers in enumerate(messages):
      formatted = numbers.__str__().replace('\n', ' ')
      print(f'{idx}: {formatted}\n{MessageToJson(numbers)}---')

if __name__ == "__main__":
    main()
