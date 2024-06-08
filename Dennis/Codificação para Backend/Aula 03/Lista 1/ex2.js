console.log(longestString(["Gabriel", "Daniel", "Nicolas", "Giulia"]))

function longestString(strings) {

    let longestWidth = 0;

    for(string of strings) {
        (string.length > longestWidth) ? longestWidth = string.length : null
    }

    for(string of strings) {
        if(string.length == longestWidth) {
            return string
        }
    }
}