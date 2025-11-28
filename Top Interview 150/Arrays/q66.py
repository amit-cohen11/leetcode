from typing import List

def plusOne(digits: List[int]) -> List[int]:
  i = len(digits) - 1
  while(i >= 0):
    if(digits[i] != 9):
      digits[i] += 1
      return digits
    else:
      digits[i] = 0
      i -= 1
  digits.insert(0, 1)
  return digits


if (__name__ == "__main__"):
  print(plusOne(digits = [1,2,3]))
  print(plusOne(digits = [4,3,2,1]))
  print(plusOne(digits = [9]))
  print(plusOne(digits = [9,9,9,8,9]))
  print(plusOne(digits = [9,9,9,9,9]))