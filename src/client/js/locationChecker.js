function checkForLocation(inputText) {
    let Rgex = RegExp('^(http|https):\/\/')
    if(Rgex.test(inputText)) {
        alert("Enter an alternative location");
        return false
    } else {
        return true
    }
}

export { checkForLocation }
