
#include<string>
#include<stack>

using namespace std;

class Solution {
public:

    string decodeString(string s) {

        stack<string> letters;
        stack<int> repetitions;
        string currentString;
        int size = s.length();
        int repeat = 0;

        for (int i = 0; i < size; i++) {

            char ch = s[i];

            if (isdigit(ch)) {
                repeat = repeat * 10 + (ch - '0');

            } else if (ch == '[') {
                repetitions.push(repeat);
                letters.push(currentString);
                currentString = "";
                repeat = 0;

            } else if (ch == ']') {
                string temp = letters.top();
                letters.pop();
                int repeatString = repetitions.top();
                repetitions.pop();
                while (repeatString-- > 0) {
                    temp.append(currentString);
                }
                currentString = temp;

            } else {
                currentString.push_back(ch);
            }
        }
        return currentString;
    }
};
