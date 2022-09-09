"use strict"

function createNewUser() {
    let userName;
    let userSurname;
    do{
        userName =   prompt("Укажите Ваше имя");
        userSurname = prompt("Укажите Вашу фамилию");
    } while (userName === "" || userSurname === "" || !isNaN(Number(userName))  || !isNaN(Number(userSurname)));
    let newUser = {
        firstName: userName,
        lastName: userSurname,
        getLogin(){
           return `${this.firstName.charAt(0).toLowerCase()}${this.lastName.toLowerCase()}`
        },
    }
    return newUser;
}

let obj = createNewUser();
obj.getLogin();
console.log(obj.getLogin());
