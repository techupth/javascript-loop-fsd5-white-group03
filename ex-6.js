// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";
let length = companyName.length;

while(length > 0){
    reversedCompanyName += companyName[length-1];
    length--;
}

console.log(reversedCompanyName);
