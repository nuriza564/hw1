// let userResponse = confirm("Вам есть 15?");

// if (userResponse) {
//     alert("Добро пожаловать!");
// } else {
//     alert("Выход запрещен");
// }


//Доп дз
let userResponse = confirm("Вам есть 15?");

if (userResponse) {
    let userName = prompt("Как вас зовут?");
    if (userName) {
        alert("Добро пожаловать, " + userName + "!");
    }
} else {
    alert("Выход запрещен");
}