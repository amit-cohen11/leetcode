import java.util.*;

public class main {
  public static void main(String[] args) {
    String str = "()[([])]{}]";
    System.out.println(isValid(str));
  }

  public static boolean isValid(String str) {
    Map<Character, Character> BRACKET = Map.of(
        '(', ')',
        '[', ']',
        '{', '}');

    Stack<Character> bracketsStack = new Stack<>();

    if (str.equals(""))
      return true;

    for (char br : str.toCharArray()) {
      boolean isOpenBracket = false;
      for (char BR : BRACKET.keySet()) {
        if (br == BR)
          isOpenBracket = true;
      }

      if (isOpenBracket)
        bracketsStack.push(br);
      else if (!bracketsStack.empty() && br == BRACKET.get(bracketsStack.peek()))
        bracketsStack.pop();
      else
        return false;
    }

    return bracketsStack.empty();
  }
}
