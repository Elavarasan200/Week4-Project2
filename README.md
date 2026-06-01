Character Counter Project – Explanation
Project Overview

This project creates a Text Area with a Real-Time Character Counter using HTML, CSS, and JavaScript.

The user can type a message into a text area, and the application will:

Count characters as the user types.
Display the number of characters used.
Show the number of remaining characters.
Prevent typing beyond the maximum limit.
Display a warning when the limit is reached.
Project Objectives

By building this project, you will learn:

HTML form elements (textarea)
DOM Manipulation
Event Handling
Real-time updates using JavaScript
Input validation
User-friendly interfaces
Functional Requirements
1. Text Area Creation

A text area is provided for users to enter messages.

Example:

<textarea id="message"></textarea>
Purpose

Allows users to enter multiple lines of text.

Example:

Hello everyone,
Welcome to my project.
2. Maximum Character Limit

The project sets a maximum limit of:

200 characters

Displayed as:

200 Characters Max

This informs users how much text they can enter.

3. Real-Time Character Counting

The counter updates every time the user types.

Event Used
textarea.addEventListener("input", updateCounter);
What is the Input Event?

The input event is triggered whenever:

A character is typed
A character is deleted
Text is pasted

Example:

User types: H
Counter: 1/200

User types: He
Counter: 2/200

User types: Hello
Counter: 5/200
Counting Characters

JavaScript calculates the length of the text:

let currentLength = textarea.value.length;
Example

If the user enters:

Hello

Length becomes:

5
Calculating Remaining Characters

Formula:

remaining = maxLength - currentLength;

Example:

Maximum = 200
Typed = 50

Remaining = 150

Output:

50/200 characters
150 characters remaining
Updating the Counter

The counter changes dynamically:

count.textContent = currentLength;
Example Outputs
0/200 characters
25/200 characters
150/200 characters
200/200 characters
Preventing Extra Characters

The project uses:

maxlength="200"

Example:

<textarea maxlength="200"></textarea>
How It Works

When the user reaches:

200 characters

the browser automatically blocks additional typing.

Example:

Typed: 200 characters

User tries:

A

Result:

Not allowed

No extra characters are added.

Warning Message

When the limit is reached:

if(currentLength >= maxLength)

Show:

Character limit reached!
Example

Before limit:

180/200 characters
20 characters remaining

At limit:

200/200 characters
Character limit reached!
User Interface Design

The CSS provides:

Centered Layout
display:flex;
justify-content:center;
align-items:center;

Creates a professional centered design.

Styled Text Area
textarea{
    width:100%;
    height:150px;
}

Benefits:

Easy typing
Good readability
Mobile friendly
Counter Display
.counter{
    text-align:right;
}

Example:

                     75/200 characters
Warning Message Styling
#warning{
    color:red;
}

Output:

Character limit reached!

appears in red to grab attention.

Project Workflow
User Opens Page
        │
        ▼
Types Message
        │
        ▼
Input Event Triggered
        │
        ▼
Count Characters
        │
        ▼
Calculate Remaining
        │
        ▼
Update Counter
        │
        ▼
Reached 200?
      /     \
    No       Yes
    │         │
Show      Show Warning
Remaining  Message
Characters
Example Execution
Initial State
200 Characters Max

[ Text Area ]

0/200 characters
200 characters remaining
User Types
Hello World

Character count:

11

Output:

11/200 characters
189 characters remaining
User Types 150 Characters

Output:

150/200 characters
50 characters remaining
User Reaches Limit

Output:

200/200 characters
Character limit reached!

Additional typing is blocked.

Technologies Used
HTML

Used for:

Text Area
Counter Display
Warning Message
CSS

Used for:

Layout
Colors
Typography
Responsive Design
JavaScript

Used for:

Event Handling
Character Counting
Remaining Character Calculation
Warning Messages
Real-Time Updates
Learning Outcomes

After completing this project, you will understand:

✅ HTML Text Areas
✅ Event Listeners (input)
✅ DOM Manipulation
✅ Character Counting Logic
✅ String Length Property (length)
✅ Real-Time UI Updates
✅ Input Restrictions (maxlength)
✅ User-Friendly Form Design

This is a common beginner JavaScript project and is often used to practice DOM manipulation and event handling, which are essential skills for front-end web development.
