//Q3) Create an arrow function by which you will take input of 
//string and you check given string is palindrome or not

let checkPalindrome=(str:string) =>{

   
    const len1= str.length;
    for (let i = 0; i < len1 / 2; i++) {

        
        if (str[i] !== str[len1- 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}




const value1 = checkPalindrome("madam");
const value2 = checkPalindrome("Madhvi");
console.log(value1);
console.log(value2);