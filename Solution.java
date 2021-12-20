
import java.util.Stack;

public class Solution {

    public String decodeString(String s) {

        Stack<StringBuilder> letters = new Stack<>();
        Stack<Integer> repetitions = new Stack<>();
        StringBuilder currentString = new StringBuilder();
        int size = s.length();
        int repeat = 0;

        for (int i = 0; i < size; i++) {

            char ch = s.charAt(i);

            if (Character.isDigit(ch)) {
                repeat = repeat * 10 + (ch - '0');

            } else if (ch == '[') {
                repetitions.push(repeat);
                letters.push(currentString);
                currentString = new StringBuilder();
                repeat = 0;

            } else if (ch == ']') {
                StringBuilder temp = letters.pop();
                int repeatString = repetitions.pop();
                while (repeatString-- > 0) {
                    temp.append(currentString);
                }
                currentString = temp;

            } else {
                currentString.append(ch);
            }
        }

        return currentString.toString();
    }
}
