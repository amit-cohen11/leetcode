from typing import List

def removeDuplicates(nums: List[int]) -> int:
  i = 0
  while(i < len(nums) and i + 1 < len(nums)):
    if(nums[i] == nums[i+1]):
      nums.pop(i + 1)
    else: 
      i += 1
  
  return len(nums)

  # is_changed = False
  # i, j = 0 , 1
  # while(j < len(nums)):
  #   if(nums[i] == nums[j]):
  #     nums[j] = "_"
  #     is_changed = True
  #   else: 
  #     i = j
  #   j += 1

  # if (not is_changed):
  #   return len(nums)

  # count, i, j = 1, 1, 2
  # while(j < len(nums)):
  #   if(nums[j] == "_"):
  #     j += 1
  #   else:
  #     nums[i] = nums[j]
  #     nums[j] = "_"
  #     count += 1
  #     i += 1

  # return count

if (__name__ == "__main__"):
  print(removeDuplicates(nums = [1,2]))
  print(removeDuplicates(nums = [1,2,2]))
  print(removeDuplicates(nums = [1,1,2]))
  print(removeDuplicates(nums = [0,0,1,1,1,2,2,3,3,4]))