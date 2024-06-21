const removeElement = (nums, val) => {
  let left = 0;
  let right = nums.findLastIndex((num) => num != val);
  while (left <= right) {
    if (nums[left] == val) {
      nums[left] = nums[right];
      right--;
      while (nums[right] == val) {
        right--;
      }
    }
    left++;
  }
  console.log("left", left);
  console.log("nums", nums);
  return left;
};

removeElement([0, 1, 2, 2, 3, 0, 4, 2, 2, 4], 2);
