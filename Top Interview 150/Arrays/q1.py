from utils import measure_time
from typing import List


@measure_time
def twoSum(nums: List[int], target: int) -> List[int]:
  for i, num1 in enumerate(nums):
    for j, num2 in enumerate(nums):
      if(i == j):
        continue
      if(num1 + num2 == target):
        return [i, j]


@measure_time
def twoSum2(nums: List[int], target: int) -> List[int]:
  for i, num1 in enumerate(nums):
    for j in range(i+1, len(nums)):
      if(num1 + nums[j] == target):
        return [i, j]


if (__name__ == "__main__"):
  print(twoSum(nums = [2,7,11,15], target = 9))
  print(twoSum(nums = [3,2,4], target = 6))
  print(twoSum(nums = [3,3], target = 6))
  print(twoSum(nums = [-1,-2,-3,-4,-5], target = -8))