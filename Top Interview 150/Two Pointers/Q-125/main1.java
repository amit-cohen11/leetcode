import java.util.*;

public class main1 {
  public static void main(String[] args) {
    String str = "A man, a plan, a canal: Panama";
    System.out.println(isPalindrome(str));
  }

  public static boolean isPalindrome(String str) {
    String alphanumericStr = str.toLowerCase().replaceAll("[^a-zA-Z0-9]", "");
    int left = 0, right = alphanumericStr.length() - 1;
    while (left < right) {
      if (alphanumericStr.charAt(left) != alphanumericStr.charAt(right))
        return false;
      left++;
      right--;
    }
    return true;
  }
}