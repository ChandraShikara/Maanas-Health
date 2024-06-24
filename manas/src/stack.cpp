// // #include <iostream>
// // using namespace std;

// // class Node {
// // public:
// //     char data;
// //     Node* next;
// //     Node(char d) {
// //         next = NULL;
// //         this->data = d;
// //     }
// // };

// // class Stack {
// // public:
// //     int size;
// //     Node* tail;
// //     Node* head;

// //     Stack() {
// //         this->tail = NULL;
// //         this->head = NULL;
// //         this->size = 0;
// //     }

// //     void push(Node* n) {
// //         size += 1;
// //         if (tail == NULL) {
// //             tail = n;
// //             head = n;
// //         } else {
// //             tail->next = n;
// //             tail = n;
// //         }
// //     }

// //     void print() {
// //         Node* s = head;
// //         while (s != NULL) {
// //             cout << s->data << endl;
// //             s = s->next;
// //         }
// //     }

// //     void printSize() {
// //         cout << size << endl;
// //     }

// //     void pop() {
// //         if (tail == NULL) {
// //             cout << "Stack is empty" << endl;
// //         } else {
// //             Node* s = head;
// //             Node* prev = NULL;
// //             while (s->next != NULL) {
// //                 prev = s;
// //                 s = s->next;
// //             }
// //             cout<<s->data<<endl;
// //             prev->next = NULL;
// //             tail = prev;
// //             delete s;
// //             size--;
// //         }
// //     }

// //     void peak() {
// //         if (tail != NULL) {
// //             cout << "Peak value is " << tail->data << endl;
// //         } else {
// //             cout << "Stack is empty" << endl;
// //         }
// //     }

// //     void isEmpty() {
// //         if (size == 0) {
// //             cout << "Stack is empty" << endl;
// //         } else {
// //             cout << "Stack is not empty" << endl;
// //         }
// //     }
// // };

// // int main() {
// //     Stack* s = new Stack();
// //     s->push(new Node('s'));
// //     s->push(new Node('o'));
// //     s->push(new Node('o'));
// //     s->push(new Node('n'));
// //     s->pop();
// //     s->pop();
// //     s->pop();
// //     s->pop();
// //    return 0;
// // }


// #include <iostream>
// #include <stack>
// #include <queue>
// #include <cctype>  

// using namespace std;

// int performOperation(char operation, int operand1, int operand2) {
//     switch (operation) {
//         case '+': return operand1 + operand2;
//         case '-': return operand1 - operand2;
//         case '*': return operand1 * operand2;
//         case '/': return operand1 / operand2;
//         default:  return 0;  // Invalid operation
//     }
// }

// int solveExpression(string expression) {
//     stack<int> operandStack;
//     queue<char> operatorQueue;

//     for (char ch : expression) {
//         if (isdigit(ch)) {
//             operandStack.push(ch - '0');  // Convert char to int
//         } else if (ch == '+' || ch == '-' || ch == '*' || ch == '/') {
//             operatorQueue.push(ch);
//         }
//     }

    
//     while (!operatorQueue.empty()) {
//         int operand1 = operandStack.top();
//         operandStack.pop();
//         int operand2 = operandStack.top();
//         operandStack.pop();
//         char operation = operatorQueue.front();
//         operatorQueue.pop();

//         int result = performOperation(operation, operand2, operand1);
//         operandStack.push(result);
//     }

//     // The final result is on the top of the stack3
//     return operandStack.top();
// }

// int main() {
//     string expression;
//     cout << "Enter an algebraic expression: ";
//     getline(cin, expression);

//     int result = solveExpression(expression);
//     cout << "Result: " << result << endl;

//  return 0;
// }


#include <iostream>
#include <stack>
#include <cctype>

// Function to check if a character is an operator
bool isOperator(char c) {
    return (c == '+' || c == '-' || c == '*' || c == '/');
}

// Function to get the precedence of an operator
int precedence(char op) {
    if (op == '+' || op == '-')
        return 1;
    else if (op == '*' || op == '/')
        return 2;
    return 0;
}

// Function to convert infix to postfix
std::string infixToPostfix(const std::string& infix) {
    std::stack<char> s;
    std::string postfix;

    for (char ch : infix) {
        if (std::isalnum(ch)) {
            postfix += ch; // If operand, append to postfix
        } else if (ch == '(') {
            s.push(ch);
        } else if (ch == ')') {
            while (!s.empty() && s.top() != '(') {
                postfix += s.top();
                s.pop();
            }
            s.pop(); // Pop the '('
        } else if (isOperator(ch)) {
            while (!s.empty() && precedence(s.top()) >= precedence(ch)) {
                postfix += s.top();
                s.pop();
            }
            s.push(ch);
        }
    }

    // Pop remaining operators from stack
    while (!s.empty()) {
        postfix += s.top();
        s.pop();
    }

    return postfix;
}

int main() {
    std::string infixExpression;
    std::cout << "Enter infix expression: ";
    std::cin >> infixExpression;

    std::string postfixExpression = infixToPostfix(infixExpression);
    std::cout << "Postfix expression: " << postfixExpression << std::endl;

    return 0;
}


