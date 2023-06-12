let inputName = document.querySelector(".name");
let ageInput = document.querySelector(".age");
let locationInput = document.querySelector('.location');
let job = document.querySelector("select");

if (sessionStorage.getItem('name')) {
    inputName.value = sessionStorage.getItem('name');
}
if (sessionStorage.getItem('age')) {
    ageInput.value = sessionStorage.getItem('age');
}
if (sessionStorage.getItem('location')) {
    locationInput.value = sessionStorage.getItem('location');
}
if (sessionStorage.getItem('job')) {
    job.value = sessionStorage.getItem('job');
}


inputName.onchange = (e) => {
    sessionStorage.setItem("name", e.target.value)
}
ageInput.onchange = (e) => {
    sessionStorage.setItem("age", e.target.value)
}
locationInput.onchange = (e) => {
    sessionStorage.setItem("location", e.target.value)
}
job.onchange = (e) => {
    sessionStorage.setItem("job", e.target.value)
}
