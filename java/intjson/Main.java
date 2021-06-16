package intjson;

import com.google.protobuf.InvalidProtocolBufferException;
import com.google.protobuf.util.JsonFormat;

public class Main {

  public static void main(String[] args) throws InvalidProtocolBufferException {
    Intjson.Numbers smallNumbers = Intjson.Numbers.newBuilder()
        .setLabel("small_numbers")
        .setSigned64(-10)
        .setUnsigned64(12)
        .setSigned32(-210)
        .setUnsigned32(212)
        .build();

    Intjson.Numbers largeNumbers = Intjson.Numbers.newBuilder()
        .setLabel("large_numbers")
        .setSigned64(-1L<<60)
        .setUnsigned64(1L<<60)
        .setSigned32(-1<<30)
        .setUnsigned32(1<<30)
        .build();

    String smallNumbersStr = JsonFormat.printer().print(smallNumbers);
    String largeNumbersStr = JsonFormat.printer().print(largeNumbers);

    System.out.println(smallNumbersStr); // int32 are numbers, int64 are strings
    System.out.println(largeNumbersStr); // int32 are numbers, int64 are strings

    Intjson.Numbers.Builder smallNumbersCopy = Intjson.Numbers.newBuilder();
    JsonFormat.parser().merge(smallNumbersStr, smallNumbersCopy);

    Intjson.Numbers.Builder largeNumbersCopy = Intjson.Numbers.newBuilder();
    JsonFormat.parser().merge(largeNumbersStr, largeNumbersCopy);

    System.out.println(smallNumbers.equals(smallNumbersCopy.build())); // outputs true
    System.out.println(largeNumbers.equals(largeNumbersCopy.build())); // outputs true
  }
}
