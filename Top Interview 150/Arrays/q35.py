from typing import List


def searchInsert(nums: List[int], target: int) -> int:
  left, right, midd = 0, len(nums) - 1, len(nums) // 2

  if(target > nums[right]):
    return right + 1
  if(target <= nums[left]):
    return 0

  while(left + 1 < right):
    if(target == nums[midd]):
      return midd
    
    if(target > nums[midd]):
      left = midd
      midd = left + ((right - left) // 2)
    if(target < nums[midd]):
      right = midd
      midd = left + ((right - left) // 2)

  if(target > nums[left]):
    return left + 1
  else:
    return right


if (__name__ == "__main__"):
  #                   0  1  2  3  4  5
  # print(searchInsert([1, 3, 5, 6, 9, 100], 2))
  # print(searchInsert([1, 3, 5, 6, 9, 100], 7))
  print(searchInsert([1], 1))
  # print(searchInsert([1,3,5,6], 5))
  # print(searchInsert([1,3,5,6], 2))
  # print(searchInsert([1,3,5,6], 7))