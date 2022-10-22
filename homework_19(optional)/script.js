"use strict"
const arrPeople = [2, 3, 6, 7, 8];//24
const arrBacklog = [5, 7, 4, 8, 10];//34
const deadline = new Date("2022-10-25");
console.log(deadline)

function getBusinessDatesCount(startDate, endDate) {
    let count = 0;
    const curDate = new Date(startDate.getTime());
    while (curDate <= endDate) {
        const dayOfWeek = curDate.getDay();
        if (dayOfWeek === 0 || dayOfWeek === 6) {
            count++
        }
        curDate.setDate(curDate.getDate() + 1);
    }
    return count;
}


function sumArr(x) {
    let s = 0;
    for (let i = 0; i < x.length; i++) {
        s += x[i]
    }
    return s
}

calcDeadline(arrPeople, arrBacklog, deadline)

function calcDeadline(arrPeople, arrBacklog, deadline) {
    let dateNow2 = new Date()
    let dateNow = new Date().toLocaleDateString();
    if (deadline < dateNow2) {
        alert("дедлайн вже пройшов, виберіть іншу дату")
        return
    }
    let arr = [deadline.getDate(),
        deadline.getMonth() + 1,
        deadline.getFullYear()]
    let fullDateofDeadline = arr.reverse().join("-");
    let Forfunction = dateNow.split(".").reverse().join("-");
    let functionStartDate = new Date(`${Forfunction}`)
    let functionFullDateOfDeadline = new Date(`${fullDateofDeadline}`)
    let weekends = getBusinessDatesCount(functionStartDate, functionFullDateOfDeadline)
    let daysBeforeDeadline = (deadline - dateNow2) / (1000 * 3600 * 24) - weekends;
    let StoryPointsPeopleDo = sumArr(arrPeople);
    let allStoryPoints = sumArr(arrBacklog);
    let WhatPeopleCanDoBeforeDeadLine = (daysBeforeDeadline + 1) * StoryPointsPeopleDo;
    let daysHowlong = allStoryPoints / StoryPointsPeopleDo;
    let howMuchDays = daysBeforeDeadline - daysHowlong;
    if (howMuchDays < 0) {
        howMuchDays = `${parseInt(howMuchDays)}`.slice(1)
    }
    if (WhatPeopleCanDoBeforeDeadLine >= allStoryPoints) {
        alert(`Усі завдання будуть успішно виконані за ${Math.round(howMuchDays)} днів до настання дедлайну!`)
    } else {
        alert(`Команді розробників доведеться витратити додатково ${Math.round(howMuchDays) * 8} годин після дедлайну, щоб виконати всі завдання в беклозі`)
    }
}

