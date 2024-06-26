import java.util.*;

public class main {
  public static void main (String[] args) {
    int[] nums = { 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 3, 3, 4 };
    removeDuplicates(nums);
  }

  public static int removeDuplicates(int[] nums) {
    int curPosition = 0;
    int nextPosition = 0;
    while (nextPosition < nums.length - 1){
      nextPosition++;
      if(nums[curPosition] != nums[nextPosition]){
        curPosition++;
        nums[curPosition] = nums[nextPosition];
      }
    }
    System.out.println(Arrays.toString(nums));
    System.out.println(++curPosition);
    return ++curPosition;
  }
}
