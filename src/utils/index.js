export function newlineText(str) {
  const newText = str.split("\n").map((str, i) => <p key={i}>{str}</p>);
  return newText;
}

export const HTML_QUESTIONS = [
  {
    id: 1,
    question: `1. What does HTML stand for? `,
    options: [
      "Hyper Text Makeup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyper Text Markup Language ",
    ],
    answer: 3,
  },
  {
    id: 2,
    question: `2.	Which tag is used to create a hyperlink in HTML? `,
    options: ["<a>", "<link> ", "<src> ", "<img>"],
    answer: 0,
  },
  {
    id: 3,
    question: `3.	Which tag is used to define a paragraph in HTML? `,
    options: ["<para> ", "<paragraph> ", "<p> ", "<img> "],
    answer: 2,
  },
  {
    id: 4,
    question: `4.	Which tag is used to define a heading in HTML?`,
    options: [" <a> ", "<h3> ", "<p> ", "<img> "],
    answer: 1,
  },
  {
    id: 5,
    question: `5.	Which tag is used to add an image in HTML? `,
    options: [" <a>", "<h1>", "<p>", "<img>"],
    answer: 3,
  },
  {
    id: 6,
    question: `6.	Which tag is used to create a line break in HTML?`,
    options: [" <br> ", "<break>", "<p>", "<b>"],
    answer: 0,
  },
  {
    id: 7,
    question: `7.	Which attribute is used to specify the alternate text for an image in HTML?`,
    options: ["alternate", "src", "img", "alt"],
    answer: 3,
  },
  {
    id: 8,
    question: `8.	Which tag is used to define ordered list in HTML?`,
    options: [" <li> ", "<ol>", "<ul>", "<dl>"],
    answer: 1,
  },
  {
    id: 9,
    question: `9.	Which tag is used to define an unordered list in HTML?`,
    options: [" <li> ", "<ol>", "<ul>", "<dl>"],
    answer: 2,
  },
  {
    id: 10,
    question: `10.	Which tag is used to define a definition list in HTML?`,
    options: [" <li> ", "<ol>", "<ul>", "<dl>"],
    answer: 3,
  },
  {
    id: 11,
    question: `11.	Which attribute is used to set the width of a table in HTML?`,
    options: ["width", "height", "size", "style "],
    answer: 0,
  },
  {
    id: 12,
    question: `12.	Which tag is used to define a table row in HTML?`,
    options: ["<tr> ", "<td> ", "<t-row>", "<table-row> "],
    answer: 0,
  },
  {
    id: 13,
    question: `	13.	Which tag is used to define a table cell in HTML? `,
    options: [" <tr> ", "<td> ", "<th>", "<table-cell> "],
    answer: 1,
  },
  {
    id: 14,
    question: `	14.	Which tag is used to define a table header cell in HTML?  `,
    options: ["<tr> ", "<td> ", "<th>", "<table-header> "],
    answer: 2,
  },
  {
    id: 15,
    question: `	15.	Which tag is used to create a form in HTML? `,
    options: ["<input> ", "<label>", "<form> ", "<select>  "],
    answer: 2,
  },
  {
    id: 16,
    question: `	16.	Which attribute is used to specify the type of an input field in HTML?`,
    options: ["type ", "text", "name", "input"],
    answer: 0,
  },
  {
    id: 17,
    question: `17.	Which input type is used to create a checkbox in HTML?`,
    options: ["check-box", "check", "checkbox", "radio"],
    answer: 2,
  },
  {
    id: 18,
    question: `	18.	Which input type is used to create a radio button in HTML?`,
    options: ["text", "password", "input-radio", "radio"],
    answer: 3,
  },
  {
    id: 19,
    question: `	19.	Which input type is used to create a password field in HTML?`,
    options: ["pwd ", "password", "type", "radio"],
    answer: 1,
  },
  {
    id: 20,
    question: `20.	Which tag is used to create a input dropdown list in HTML?`,
    options: ["<drop>", "<input>", "<label> ", "<select>"],
    answer: 3,
  },
  {
    id: 21,
    question: `	21.	Which attribute is used to specify the value of an input field in HTML?`,
    options: ["type", "value", "text-value", "action"],
    answer: 1,
  },
  {
    id: 22,
    question: `	27.	Which tag is used to add an iframe in HTML? `,
    options: ["<frame> ", "<embed>  ", "<i-frame> ", "<iframe> "],
    answer: 3,
  },
  {
    id: 23,
    question: `	23.	Which tag is used to add a comment in HTML? `,
    options: [
      "<comment>comment</comment>",
      "<!-- comment --> ",
      "//<p>comment</p> ",
      "/*<span>comment</span>*/",
    ],
    answer: 1,
  },
  {
    id: 24,
    question: `24.	Which of this is not a framework?  `,
    options: ["React ", "Bootstrap", "Angular", "CSS"],
    answer: 3,
  },
  {
    id: 25,
    question: `25.	Which of these is not a semantic element?  `,
    options: ["<form>", "<table>", "<div> ", "<article> "],
    answer: 2,
  },
  {
    id: 26,
    question: `	26.	An iframe tag is use to?  `,
    options: [
      "Add border to a content",
      "Display a web page within a web",
      "None of the above",
      "All of the above",
    ],
    answer: 1,
  },
  {
    id: 27,
    question: `	22.	Which attribute is used to specify the action to be performed on form submission in HTML? `,
    options: ["type ", "value", "name", "action"],
    answer: 3,
  },
  {
    id: 28,
    question: `28.	Which symbol is used for single line comment in Javascript? `,
    options: [
      "<comment>comment</comment>",
      "<!-- comment --> ",
      "//<p>comment</p> ",
      "/*<span>comment</span>*/",
    ],
    answer: 2,
  },
  {
    id: 29,
    question: `28.	Which symbol is used for multi line comment in Javascript? `,
    options: [
      "<comment>comment</comment>",
      "<!-- comment --> ",
      "//<p>comment</p> ",
      "/*<span>comment</span>*/",
    ],
    answer: 3,
  },
  {
    id: 30,
    question: `	31.	What is the full meaning of CDN `,
    options: [
      "Content device network ",
      "Content Delivery framework",
      "Content Delivery network",
      "None of the above",
    ],
    answer: 2,
  },
  {
    id: 31,
    question: `	31.	What does CSS stand for? `,
    options: [
      " Computer Style Sheets  ",
      "Creative Style Sheets ",
      "Cascading Style Sheets",
      " Colorful Style Sheets Answer",
    ],
    answer: 2,
  },
  {
    id: 32,
    question: `	33.	What is the correct CSS syntax for setting the font family of an element?  `,
    options: [
      "font:family: Arial, sans-serif; ",
      "font-family: Arial, sans-serif;",
      "family-font: Arial, sans-serif; ",
      "font-type: Arial, sans-serif; ",
    ],
    answer: 1,
  },
  {
    id: 33,
    question: `	33.	Which property is used to change the background color of an element in CSS?  `,
    options: ["color", "background-color", "bg-color ", "bg"],
    answer: 1,
  },
  {
    id: 34,
    question: `34.	What is === operator ?`,
    options: ["Assignment", "Logical ", "Comparison", " Nome of the above "],
    answer: 2,
  },
  {
    id: 35,
    question: `35.	What is an undefined value in JavaScript? `,
    options: [
      "Variable used in the code doesn’t exist",
      "Variable is not assigned to any value",
      "All of the above",
      "None of the above",
    ],
    answer: 2,
  },
  {
    id: 36,
    question: `	36.	Which property is used to align text in CSS? `,
    options: ["align", "text-align ", "center ", "justify "],
    answer: 1,
  },
  {
    id: 37,
    question: `	37.	Which property is used to set the font size in CSS? `,
    options: ["font ", "size ", "font-size  ", "font-style"],
    answer: 2,
  },
  {
    id: 38,
    question: `	38.	Which property is used to make the text bold in CSS? `,
    options: ["font-weight", "bold ", " font-style ", "text-bold"],
    answer: 0,
  },
  {
    id: 39,
    question: ` 39.	Which property is used to make the text italic in CSS? `,
    options: ["font-style ", "italic ", "font-weight  ", "text-transform"],
    answer: 0,
  },
  {
    id: 40,
    question: `	40.	Which property is used to add an underline to text in CSS? `,
    options: [
      "underline",
      "text-decoration",
      "decoration",
      "None of the above",
    ],
    answer: 1,
  },
  {
    id: 41,
    question: `41. Which property is used to add a border to an element in CSS?`,
    options: ["border", "outline", "border-style ", "border-width"],
    answer: 0,
  },
  {
    id: 42,
    question: ` 42.	Which property is used to add padding to an element in CSS?`,
    options: ["padding ", "margin", "spacing", "border"],
    answer: 0,
  },
  {
    id: 43,
    question: `43.	What is the data type of: const result = 1 > 2`,
    options: ["String ", "Number", "Object", "Boolean"],
    answer: 3,
  },
  {
    id: 44,
    question: `	44.	Which property is used to set the position of an element in CSS?`,
    options: ["position", "padding", "margin", "height"],
    answer: 0,
  },
  {
    id: 45,
    question: `	45.	Which property is used to change the color of text in CSS?`,
    options: ["color ", "font-color ", "text-color ", "style"],
    answer: 0,
  },
  {
    id: 46,
    question: `	46.	Which property is used to set the opacity of an element in CSS?`,
    options: ["transparency ", "filter", "opacity", "visibility"],
    answer: 2,
  },
  {
    id: 47,
    question: `	47.	Which property is used to add a shadow to an element in CSS?`,
    options: ["shadow", "box-shadow", "text-shadow", "element-shadow"],
    answer: 1,
  },
  {
    id: 48,
    question: `	48.	const cloths = ["Shirt", "Pant", "TShirt"];
     \n cloths.pop();
     what will cloths output?
     `,
    options: [
      '["Shirt", "Pant", "TShirt"]',
      '["Shirt", "Pant"]',
      '["Pant", "TShirt"]',
      '"Shirt", "Pant"',
    ],
    answer: 1,
  },
  {
    id: 49,
    question: `	49.	Is JavaScript case-sensitive`,
    options: ["Yes", "No", "None of the above", "All of the above"],
    answer: 0,
  },
  {
    id: 50,
    question: `50.	what will the code below output \n 
    const result = 2 > 1 ? 10 : 20
    `,
    options: ["20", "10", "2", "1"],
    answer: 1,
  },
  {
    id: 51,
    question: `	51.	Which property is used to display an element as an inline-level element in CSS? `,
    options: [
      "display:block;",
      "display: inline;",
      "display: none;",
      "display: flex;",
    ],
    answer: 1,
  },
  {
    id: 52,
    question: `	52.	Which property is used to display an element as a flex container in CSS? `,
    options: [
      "display:block;",
      "display: inline;",
      "display: none;",
      "display: flex;",
    ],
    answer: 3,
  },
  {
    id: 53,
    question: `	53.	Which property is used to add a gradient background to an element in CSS?`,
    options: [
      "background-color",
      "background-image",
      "background-gradient ",
      "gradient-color",
    ],
    answer: 1,
  },
  {
    id: 54,
    question: `	54.	Which property is used to make an element transparent in CSS?`,
    options: ["visibility", "filter", "opacity", "transparent"],
    answer: 2,
  },
  {
    id: 55,
    question: `55.	Which property is used to change the order of elements in a flex container in CSS?`,
    options: ["order", "flex-direction", "justify-content", "align-items"],
    answer: 0,
  },
  {
    id: 56,
    question: `	56.	Which property is used to align flex items horizontally in a flex container in CSS?`,
    options: ["order", "flex-direction", "justify-content", "align-items"],
    answer: 2,
  },
  {
    id: 57,
    question: `	57.	Which property is used to align flex items vertically in a flex container in CSS?`,
    options: ["order", "flex-direction", "justify-content", "align-items"],
    answer: 3,
  },
  {
    id: 58,
    question: `	59.	Which property is used to change the flex direction of a flex container in CSS?`,
    options: ["order", "flex-direction", "justify-content", "align-items"],
    answer: 1,
  },
  {
    id: 59,
    question: `	59.	Which property is used to set the maximum width of an element in CSS?`,
    options: ["max-width", "width", "min-width", "100%"],
    answer: 0,
  },
  {
    id: 60,
    question: `	60.	Which property is used to set the maximum height of an element in CSS? `,
    options: ["max-height", "height", "min-height", "flex-basis"],
    answer: 0,
  },
  {
    id: 61,
    question: `	61.	What is Bootstrap? `,
    options: [
      "A programming language",
      "A framework for CSS and HTML",
      "A database management system",
      "A text editor",
    ],
    answer: 1,
  },
  {
    id: 62,
    question: `	62.	Which version of Bootstrap is the latest as of January 2023? `,
    options: ["3", "4", "5", "6"],
    answer: 2,
  },
  {
    id: 63,
    question: `63.	What will the code below output \n
    const x = [1,2,4]
    const y = [3,5]
    const result = [x,y]
    `,
    options: ["[1,2,4,3,5]", "[y,x]", "[[1,2,4],[3,5]]", "None of the above"],
    answer: 2,
  },
  {
    id: 64,
    question: `63.	What will the code below output \n
    const x = [1,2,4]
    const y = [3,5]
    const result = [...x,...y]
    `,
    options: ["[1,2,4,3,5]", "[y,x]", "[[1,2,4],[3,5]]", "None of the above"],
    answer: 0,
  },
  {
    id: 65,
    question: `65. Which class is used to create a container in Bootstrap? `,
    options: [".grid", ".container", ".row", ".col"],
    answer: 1,
  },
  {
    id: 66,
    question: `66. Which class is used to create a navigation bar in Bootstrap?  `,
    options: [".navbar", ".nav", ".navbar-nav", ".nav-link "],
    answer: 0,
  },
  {
    id: 67,
    question: ` 67.	Which class is used to create a button in Bootstrap? `,
    options: [".button", ".btn", ".btn-group", ".btn-link  "],
    answer: 1,
  },
  {
    id: 68,
    question: `68.	Which class is used to create a card in Bootstrap? `,
    options: [".card", ".card-body", ".card-title", ".card-header  "],
    answer: 0,
  },
  {
    id: 69,
    question: `	69.	Which class is used to create a modal in Bootstrap? `,
    options: [".modal", " .modal-body", ".modal-header", ".modal-dialog"],
    answer: 0,
  },
  {
    id: 70,
    question: `70.	What will result in the code below output \n 
    const obj = {name:'James',age:20}
    const result = obj['name']
    `,
    options: ["name", "James ", "20", "undefined"],
    answer: 1,
  },
  {
    id: 71,
    question: `71.	Which class is used to create a form in Bootstrap? `,
    options: [".form", " .form-control ", ".form-group", ".form-check"],
    answer: 2,
  },
  {
    id: 72,
    question: `72.	const result = typeof '1'  \n 
    what will be the answer of the code above 
    `,
    options: ["1", "undefined", "string", "number"],
    answer: 2,
  },
  {
    id: 73,
    question: `72.	const result = 1 + '1'  \n 
    what will be the answer of the code above 
    `,
    options: ["1", "11", "2", "undefined"],
    answer: 1,
  },
  {
    id: 74,
    question: `74.	Which text color will be displayed in the code below \n 
    <div class='box' id='box'>Hello</div> \n 
    #box{ color:green} \n 
    .box{ color:red}
    `,
    options: ["green", "red", "None of the above", "All of the above"],
    answer: 0,
  },
  {
    id: 75,
    question: `75.	margin-inlie will add margin to the:`,
    options: [
      "left side",
      "top side",
      "left and right side",
      "top and bottom side",
    ],
    answer: 2,
  },
  {
    id: 76,
    question: `75.	margin-block will add margin to the:`,
    options: [
      "left side",
      "top side",
      "left and right side",
      "top and bottom side",
    ],
    answer: 3,
  },
  {
    id: 77,
    question: `	77.	Bootstrap Grid is divided into how many columns`,
    options: ["1", "4", "6", "12"],
    answer: 3,
  },
  {
    id: 78,
    question: `	78.	Which of this is not a button type?`,
    options: ["Submit ", "button", "text", "reset"],
    answer: 2,
  },
  {
    id: 79,
    question: `	79.	Which on is not an input type?`,
    options: ["color", "month", "size", "text"],
    answer: 1,
  },
  {
    id: 80,
    question: `	80.	Is h1, h2, h3, h4, h5,h6  classes in Bootstrap `,
    options: ["Yes", "No", "Not Sure"],
    answer: 0,
  },
  {
    id: 81,
    question: `	81.	Which of these is a class in Bootstrap `,
    options: ["div", "table", "span", "img"],
    answer: 1,
  },
  {
    id: 82,
    question: `	82.	Which is not a class in Bootstrap`,
    options: ["btn", "p-2", "py-3", "ps-4"],
    answer: 3,
  },
  {
    id: 83,
    question: `	83.	What will the border color of the code below output \n 
    {
      background-color:green;
      color:red;
      border:solid 1px;
    }
    `,
    options: ["None", "White", "Green", "Red"],
    answer: 3,
  },
  {
    id: 84,
    question: `	86.	what will this color code output: \n 
    {color:rgba(0,0,255,1)}
    `,
    options: ["Red", "Green ", "Blue ", "Black", "white"],
    answer: 2,
  },
  {
    id: 85,
    question: `	86.	what will this color code output: \n 
    {color:rgba(255,255,255,1)}
    `,
    options: ["Red", "Green ", "Blue ", "Black", "white"],
    answer: 4,
  },
  {
    id: 86,
    question: `	86.	what will this color code output: \n 
    {color:#00FF00}
    `,
    options: ["Red", "Green ", "Blue ", "Black", "white"],
    answer: 1,
  },
  {
    id: 87,
    question: `	87.	Which class is used to create a container that spans the full width of the viewport in Bootstrap 5? `,
    options: [
      ".container-fluid",
      ".container-full",
      ".container-wide ",
      ".container-viewport ",
    ],
    answer: 0,
  },
  {
    id: 88,
    question: `	88. what is the full mean of UI/UX `,
    options: [
      "User Interaction/User Section",
      "User Interface/User Experience",
      "Useful Interaction/User Examination",
      "Unit Integration/Unit-X",
    ],
    answer: 1,
  },
  {
    id: 89,
    question: `89.	What will result in the code below output? \n
    const result = 2 * '3'
    `,
    options: ["23", "6", "5", "undefined"],
    answer: 1,
  },
  {
    id: 90,
    question: `90.	What will result in the code below output? \n
    const result = 1 + 2 + '3' + 3
    `,
    options: ["9", "1233", "36", "333"],
    answer: 3,
  },
];
