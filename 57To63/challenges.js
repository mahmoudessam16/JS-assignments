function showDetails(a, b ,c) {
    let name;
    let age;
    let status;
    typeof a === "string" ? name = a : typeof a === 'number' ? age = a : status = a;
    typeof b === "string" ? name = b : typeof b === 'number' ? age = b : status = b;
    typeof c === "string" ? name = c : typeof c === 'number' ? age = c : status = c;
    status === true ? status = "You Are Available For Hire" : status = "You Are Not Available For Hire"
    document.write(`<p>Hello ${name}, Your Age Is ${age}, ${status}</p>`)
}

showDetails("Osama", 38, true);
showDetails(38, "Osama", true);
showDetails(true, 38, "Osama");
showDetails(false, "Osama", 38);
showDetails(35, false, "Mahmoud");