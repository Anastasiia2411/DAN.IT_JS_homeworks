"use strict"
function createNewUser() {
    const NewUser = {
        getLogin() {
            return `${this.firstName[0].toLowerCase()}${this.lastName.toLowerCase()}`;
        },
        getAge() {
            const userInput = this.birthday;
            const dateParts = userInput.split(".")
            const day = dateParts[0];
            const month = dateParts[1];
            const year = dateParts[2];
            let dateReverse = `${year}-${month}-${day}`;
            let age = Date.now() - Date.parse(dateReverse);
            return Math.floor(age / (1000 * 60 * 60 * 24 * 365.25));
        },
        getPassword(){
            return `${this.firstName[0].toUpperCase()}${this.lastName.toLowerCase()}${this.birthday.slice(6, 10)}`;
        }
    }
    NewUser.firstName = prompt("Ваше имя?");
    NewUser.lastName = prompt("Ваша фамилия?");
    NewUser.birthday = prompt ("Ваша дата рождения?");

    return NewUser;
}

let newUser = createNewUser();
console.log(newUser.getLogin());
console.log(newUser.getAge());
console.log(newUser.getPassword());
