var checkPalindrome = function (str) {
    var len1 = str.length;
    for (var i = 0; i < len1 / 2; i++) {
        if (str[i] !== str[len1 - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
};
var value1 = checkPalindrome("madam");
var value2 = checkPalindrome("Madhvi");
console.log(value1);
console.log(value2);
