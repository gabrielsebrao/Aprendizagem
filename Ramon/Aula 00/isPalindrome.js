function isPalindrome(string) {
    string = string
            .split(" ").join("")
            .split(",").join("")
            .split(":").join("")
            .toLowerCase()

    return string == string.split("").reverse().join("")
}

module.exports = isPalindrome