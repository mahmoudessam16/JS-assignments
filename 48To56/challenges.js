let myAdmins = ["Ahmed", "Osama",  "Sayed", "Mustafa", "Stop"];
let myEmployees = ["Amged", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar", "Mahmoud", "Mohamed"];
let count = 1;

document.write(`<h2>We have ${(myAdmins.slice(0, myAdmins.indexOf("Stop"))).length} Admins</h2>`);
document.write("<hr>");

for (let i = 0; i < (myAdmins.slice(0, myAdmins.indexOf("Stop"))).length; i++) {
    document.write(`<div>`);
    document.write(`The Admin For Team ${i + 1} Is ${myAdmins[i]}`)
    document.write(`<h3>Team Members: </h3>`);
    count = 1;
    for (let j = 0; j < myEmployees.length; j++) {
        if (myEmployees[j][0] === myAdmins[i][0]) {
            document.write(`<p>[${count++}] ${myEmployees[j]}</p>`)
        }
    }
    document.write(`</div>`);
    document.write("<hr>")
}