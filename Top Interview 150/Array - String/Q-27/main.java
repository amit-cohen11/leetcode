import java.util.*;

public class main {
  public static void main(String[] args) {
    int[] nums = { 0, 1, 2, 2, 3, 0, 4, 2, 2, 4 };
    int val = 2;
    removeElement(nums, val);
  }

  public static int removeElement(int[] nums, int val) {
    int valPosition = 0;
    for(int i = 0; i < nums.length; i++){
      if (nums[i] != val) {
        nums[valPosition] = nums[i];
        valPosition++;
      }
    }
    System.out.println(Arrays.toString(nums));
    System.out.println(valPosition);
    return valPosition;
  }
}
// nums [0, 1, 4, 4, 3, 0, 4, 2, 2, 4]
