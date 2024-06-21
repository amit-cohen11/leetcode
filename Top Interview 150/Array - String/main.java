import java.util.*;

public class main {
  public static void main(String[] args) {
    int[] nums1 = { 4, 5, 6, 0, 0, 0 };
    int m = 3;
    int[] nums2 = { 1, 2, 3 };
    int n = 3;
    merge(nums1, m, nums2, n);
  }

  public static void merge(int[] nums1, int m, int[] nums2, int n) {
    int i = nums1.length - 1;

    while (n > 0) {
      if (m == 0)
        nums1[i] = nums2[n - 1];

      if (m != 0 && nums1[m - 1] > nums2[n - 1]) {
        nums1[i] = nums1[m - 1];
        m--;
      } else {
        nums1[i] = nums2[n - 1];
        n--;
      }
      i--;
    }

    System.out.println(Arrays.toString(nums1));
  }
}
