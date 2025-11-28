from typing import List

def removeDuplicates(nums: List[int]) -> int:
  i = 0
  while(i < len(nums) and i + 1 < len(nums)):
    if(nums[i] == nums[i+1]):
      nums.pop(i + 1)
    else: 
      i += 1
  
  return len(nums)


if (__name__ == "__main__"):
  print(removeDuplicates(nums = [1,2]))
  print(removeDuplicates(nums = [1,2,2]))
  print(removeDuplicates(nums = [1,1,2]))
  print(removeDuplicates(nums = [0,0,1,1,1,2,2,3,3,4]))