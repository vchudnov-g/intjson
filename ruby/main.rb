require 'pp'
require_relative 'intjson_pb'

def nums_eq left, right
    left.label == right.label &&
    left.signed64 == right.signed64 &&
    left.unsigned64 == right.unsigned64 &&
    left.signed32 == right.signed32 &&
    left.unsigned32 == right.unsigned32
  end
  
  small_nums = Intjson::Numbers.new
  small_nums.label = "small_numbers"
  small_nums.signed64 = -10
  small_nums.unsigned64 = 12
  small_nums.signed32 = -10
  small_nums.unsigned32 = 12
  pp small_nums
  pp small_nums.to_json
  
  small_nums_copy = Intjson::Numbers.decode_json small_nums.to_json
  small_nums_eq = nums_eq small_nums, small_nums_copy
  
  pp small_nums_copy
  puts "Small numbers are equal: #{small_nums_eq}"
  
  large_nums = Intjson::Numbers.new
  large_nums.label = "large_numbers"
  large_nums.signed64 = -1<<60
  large_nums.unsigned64 = 1<<60
  large_nums.signed32 = -1<<30
  large_nums.unsigned32 = 1<<30
  
  pp large_nums
  pp large_nums.to_json
  
  large_nums_copy = Intjson::Numbers.decode_json large_nums.to_json
  large_nums_eq = nums_eq large_nums, large_nums_copy
  
  pp large_nums_copy
  puts "Small numbers are equal: #{large_nums_eq}"
  
  fail "Small numbers shoud be equal" unless small_nums_eq
  fail "Large numbers should be equal" unless large_nums_eq
  