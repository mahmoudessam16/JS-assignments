// Assignment One
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <title>Learn JavaScript</title>
//     <script>
//       // Code One
//        Will Not Run Because the DOM rendered line by line
//       document.getElementById("el").style.color = "red";
//     </script>
//     <script>
//       // Code Two
//        Will Not Run Because the DOM rendered line by line
//       window.onload = function () {
//         document.getElementById("el").style.color = "red";
//       };
//     </script>
//   </head>
//   <body>
//     <h1 id="el">Page Title</h1>
//     <script>
//       // Code Three
//       Will Run
//       document.getElementById("el").style.color = "red";
//     </script>
//   </body>
// </html>

// Assignment Two
document.write(`<h1>Elzero</h1>`);
document.querySelector('h1').style.color = "blue";
document.querySelector('h1').style.fontSize = "80px";
document.querySelector('h1').style.fontWeight = "bold";
document.querySelector('h1').style.textAlign = "center";
document.querySelector('h1').style.fontFamily = "Arial";


// Assignment Three
console.log("%cElzero %cWeb %cSchool", "color: red; font-size: 40px; font-weight: bold;", "color: green; font-size: 40px; font-weight: bold;", "color: white; font-size: 40px; font-weight: bold;background-color: blue;")