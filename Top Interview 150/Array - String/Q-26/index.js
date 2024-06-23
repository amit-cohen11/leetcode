const removeDuplicates = (nums) => {
  curPosition = 0;
  nextPosition = 0;
  while (nextPosition < nums.length - 1) {
    nextPosition++;
    if (nums[curPosition] != nums[nextPosition]) {
      curPosition++;
      nums[curPosition] = nums[nextPosition];
    }
  }

  console.log("nums", nums);
  console.log("curPosition", ++curPosition);
  return ++curPosition;
};

removeDuplicates([0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
