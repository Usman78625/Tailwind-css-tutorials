// write js program to check two numb and return true if one of the number is 100 and also return true their sum is 100
const isFun100 = (a,b) => a=== 100 || b === 100 || (a+b) === 100;
console.log(isFun100(100, 0))
console.log(isFun100(0, 100))
console.log(isFun100(20, 80))

// write js prog to get the extension of a fileanme
const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));
console.log(getFileExtension('index.html'));

// write js code to replace every charater in a given string with a chracter following in alphbet
// write js program to get current date
const formatDate = (date = new Date())  => {
    const days = date.getDate();
    const months = date.getMonth()+1;
    const years = date.getFullYear();
    return `${days}/${months}/${years}`;
}
console.log(formatDate());

// write a js program to create new string adding new in front of given string if the given string begins with new already then return the orignal string
const addNew = (str) => str.indexOf('New') === 0 ? str : `New ${str}`;
console.log(addNew('New Offers'))

 
// write js progra to create new string from a f=given  string 
