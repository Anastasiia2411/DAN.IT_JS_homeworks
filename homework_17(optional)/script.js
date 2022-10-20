"use strict"

let student = {
    name: null,
    lastName: null,
    tabel: {},
    question() {
        let nameFirst = prompt("Enter your name");
        let lastNameSecond = prompt("Enter your last name");
        if (nameFirst === "" || lastNameSecond === "" || nameFirst === null || lastNameSecond === null || !isNaN(Number(nameFirst)) || !isNaN(Number(lastNameSecond))) {
            alert("no correct name or last name, try again");
            this.question()
        } else {
            this.name = nameFirst;
            this.lastName = lastNameSecond;
        }
    },
    tabelList() {
        let nameLesson;
        let grade;
        do {
            nameLesson = prompt("Enter your lesson name");
            if (nameLesson === null) {
                break
            }
            grade = prompt("Enter your grade");
            if (nameLesson !== null && grade !== null && nameLesson !== "" && grade !== "" && !isNaN(Number(grade)) && isNaN(Number(nameLesson))) {
                this.tabel[nameLesson] = grade;
            }
            if (nameLesson === "" || grade === "") {
                alert("you need to enter the name of the lesson and grade, please try again")
                this.tabelList()
                return
            } else if (nameLesson !== null && !isNaN(Number(nameLesson))) {
                alert("lesson name must be a string, please try enter data again")
                this.tabelList()
                return
            } else if (grade !== null && isNaN(Number(grade))) {
                alert("The grade must be a number, please try enter data again")
                this.tabelList()
                return
            }
        } while (nameLesson !== null)
    },
    runToObj() {
        function isEmpty(obj) {
            return Object.keys(obj).length === 0;
        }

        let isEmptys = isEmpty(this.tabel)
        if (!isEmptys) {
            let a = 0
            if (Object.values(this.tabel).every((elem) => elem > 4)) {
                alert("Студент переведено на наступний курс")
            } else {
                return
            }
            for (let key in this.tabel) {
                a += Number(this.tabel[key]);
            }
            let averageRating = a / 2;
            if (averageRating > 7) {
                alert("Студенту призначено стипендію");
            }
        } else {
            return;
        }
    }
}
student.question()
student.tabelList()
student.runToObj()




