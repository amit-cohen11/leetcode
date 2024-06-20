const merge = (nums1, m, nums2, n) => {
  i = nums1.length - 1;
  while (n > 0) {
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[i] = nums1[m - 1];
      m--;
    } else {
      nums1[i] = nums2[n - 1];
      n--;
    }
    i--;
  }
  console.log(nums1);
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
