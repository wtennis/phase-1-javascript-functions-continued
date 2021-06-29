function saturdayFun(activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(workChoice = 'go to the office') {
    return `This Monday, I will ${workChoice}.`
}

function wrapAdjective(outerParam = '*') {
    return function (innerParam = 'special') {
        return `You are ${outerParam}${innerParam}${outerParam}!`
    }
}
    
