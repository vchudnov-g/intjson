using System;
using Intjson;
using Google.Protobuf;


namespace csharp
{
    class Program
    {

        static void Main(string[] args)
        {
            var smallNum = new Numbers {
                Label = "small_numbers",
                Signed64 = -10,
                Unsigned64 = 12,
                Signed32 = -210,
                Unsigned32 = 212
            };

            var smallNumJson = smallNum.ToString();
            Console.WriteLine(smallNumJson);

            var smallNumCopy = JsonParser.Default.Parse<Numbers>(smallNumJson);
            bool smallEquals = smallNum.Equals(smallNumCopy);
            Console.WriteLine($"Small numbers are equal: {smallEquals}");
  
            var largeNum = new Numbers {
                Label = "large_numbers",
                Signed64 = ((long) -1) << 60,
                Unsigned64 = ((long) 1) << 60,
                Signed32 = (-1) << 30,
                Unsigned32 = 1 << 30,
            };

            Console.WriteLine(largeNum.Unsigned32);

            var largeNumJson = largeNum.ToString();
            Console.WriteLine(largeNumJson);

            var largeNumCopy = JsonParser.Default.Parse<Numbers>(largeNumJson);
            bool largeEquals = largeNum.Equals(largeNumCopy);
            Console.WriteLine($"Large numbers are equal: {largeEquals}");

            if (!smallEquals)
            {
                throw new InvalidOperationException("Small numbers should be equal");
            }
            
            if (!largeEquals)
            {
                throw new InvalidOperationException("Large numbers should be equal");
            }
        }
    }
}
