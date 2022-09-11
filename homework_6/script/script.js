"use strict"


function createNewUser() {
    let userName;
    let userSurname;
    let userBirthday;
    do {
        userName = prompt("Укажите Ваше имя");
        userSurname = prompt("Укажите Вашу фамилию");
        userBirthday = prompt("Ваша дата рождения(dd.mm.yyyy)");
    } while (userName === "" || userSurname === "" || !isNaN(Number(userName)) || !isNaN(Number(userSurname))
    || userBirthday === "");

    let newUser = {
        firstName: userName,
        lastName: userSurname,
        birthday: userBirthday,
        getLogin() {
            return `${this.firstName.charAt(0).toLowerCase()}${this.lastName.toLowerCase()}`
        },
        getFullYear() {
            let dok = ".";
            let splitString = this.birthday.split(dok);
            let deleteElem = splitString.splice(2, 1);
            return Number(deleteElem);
        },
        getAge() {
            return new Date().getFullYear() - Number(this.getFullYear());
        },
        getPassword() {
            return `${this.firstName.charAt(0).toUpperCase()}${this.lastName.toLowerCase()}${this.getFullYear()}`
        }

    }
    return newUser;

}

let obj = createNewUser();
obj.getAge()
obj.getPassword()
console.log(obj);
console.log(obj.getPassword());
console.log(obj.getAge());