## Calculator Web App

This project is a calculator web application which handles both basic and advanced mathematical operations, including trigonometric functions, logarithms, powers, and more.


### How to Use
The most basic features can be accessed directly when you open the app, which includes simple arithmetic calculations following BODMAS rule.

The left arrow button opens a panel with extra functions like trigonometry, logarithms and more. The panel can also be closed via the same button.<br>
***Note:*** Ensure you properly close the brackets. Every opening paranthesis must have a closing paranthesis.

The right arrow opens a panel which maintains history of calculations made for easy refernece. It also has a delete history button which deletes all the calculations that have been done till then.


### How It Works

When the left side panel is not opened, the algorithm maintains two stacks, one for numbers and other for operands and brackets. And we evaluate the expression as we traverse through the mathematical expression which can be input via the buttons in the interface or can also be typed using keyboard.

When the left side panel is opened, for simplicity, the app takes a mathematical expression as a string and evaluates it using JavaScript's Math object functions.

