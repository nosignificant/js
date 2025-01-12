function calc(){
    const currentYear = 2025;
    const birthYear = prompt("input birthYear", "yyyy");
    let age = 0;
    age = currentYear - birthYear + 1;
    document.querySelector("#result").innerHTML = age;
}