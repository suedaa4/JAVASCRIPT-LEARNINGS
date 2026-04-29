var age = 40;

if (age >= 65) {
    console.log("You get your income from your pension.")
} 
else if (65 > age && age >= 18) {
    console.log("Each month you get a salary.")
    
} 
else if (age < 18) {
    console.log("You get an allowance.")
}
else {
    console.log("The value of the age variable is not numerical.")
}