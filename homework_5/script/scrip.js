"use strict"

function createNewUser(userName, userSurname) {
    let newUser = {
        _firstName: userName,
        _lastName: userSurname,
        getLogin(){
           return `${this._firstName.charAt(0).toLowerCase()}${this._lastName.toLowerCase()}`
        },
    }
    newUser.getLogin();
    return newUser;
}

createNewUser(prompt("Укажите Ваше имя"),prompt("Укажите Вашу фамилию"));

