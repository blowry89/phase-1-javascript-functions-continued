// Define saturday fun day and use default activity when no arguments are passed and permits default activity to be overridden.
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}
// Same as above.
function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`

} 
// 
function wrapAdjective(string="*"){
    return function(parameter="special"){
        return `You are ${string}${parameter}${string}!`
    }

}

