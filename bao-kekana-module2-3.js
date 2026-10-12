// Part 1
// Challenge 1

//stores name in variable Full_Name
const Full_Name = "Bao Kekana";
// stores 33 in variable age
const age = 33;
// a boolean becaues it stores either true or false
let Do_You_Enjoy_JavaSCript = true;

// variable that stores temperature as a decimal
const temperature = 22.5;
// Nan represents an invalid number
const Invalid_Number = Number("This is not a number");


const Infinite_Number = 1/0;
//A variable holding Number.MAX_SAFE_INTEGER
const Maximum_Safe_Integer = Number.MAX_SAFE_INTEGER;

//A variable set explicitly to null
const Empty_Value = null;

//A variable set explicitly to undefined
let missingValue = undefined;

// template literal that uses at least two of the above variables

const Introduction = `My name is ${Full_Name} and I am ${age} years old.`;

console.log("Full Name:", Full_Name, "|", typeof Full_Name);
console.log("Age:", age, "|", typeof age);
console.log("Do you enjoy JavaScript:", Do_You_Enjoy_JavaSCript, "|", typeof Do_You_Enjoy_JavaSCript);
console.log("Favourite temeperature:", temperature, typeof temperature);
console.log("Invalid Number:", Invalid_Number, "|", typeof Invalid_Number);
console.log("Infinite Number:", Infinite_Number, "|", typeof Infinite_Number);
console.log("Maximum Safe Integer:", Maximum_Safe_Integer, "|", typeof Maximum_Safe_Integer);
console.log("Empty Value:", Empty_Value, "|", typeof Empty_Value);
console.log("Missing Value:", missingValue, "|", typeof missingValue );
console.log("Introduction", Introduction, "|", typeof Introduction);

//Part B :  PREDICT AND VERIFY

// Prediction -> "object"
console.log("typeof null:", typeof null);

// Presiction -> "number"
console.log("typeof NaN:", typeof NaN);

//Prediction -> undifined
console.log("typeof NAN:", typeof NaN);

// Prediction -> undefined
console.log("typeof undefined:", typeof undefined);

//Prediction -> "string"
console.log('typeof "42":', typeof "42");

//// Prediction -> "string"
console.log("typeof (typeof 42):", typeof (typeof 42));


// Prediction->"function"
console.log("typeof function() {}:", typeof function() {});

//Challenge 2 — Type Conversion Workshop 

const Given_Values = ["123", " 3.14", "hello", "42abc", "", 0, null, undefined];

for (const value of Given_Values) {
    console.log("Original Value:", value, "| Type:", typeof value);

    const Number_Result = Number(value);
    // Reads an integer from the beginning of a string
    const Integer_Result = parseInt(value);
    // Reads a decimal number from the beginning of a string
    const Float_Result = parseFloat(value);
    //Converts a value to true or false
    const BooleanResult = Boolean(value);
    //Converts a value to text
    const String_Result = String(value);

    console.log("Number:", Number_Result, "| Type:", typeof Number_Result);
    console.log("parseInt:", Integer_Result, "| Type:", typeof Integer_Result);
    console.log("parseFloat:", Float_Result, "| Type:", typeof Float_Result);
    console.log("Boolean:", BooleanResult , "| Type:", typeof BooleanResult );
    console.log("String:", String_Result, "| Type:", typeof String_Result);

}

//Challenge 3 — Operators Masterclass 

const Gross_Salary = 45000;
const Tax = Gross_Salary * 0.25;
const UIF = Gross_Salary * 0.01;
const Medical_Aid = 2500;
const Net_Salary = Gross_Salary - Tax - UIF - Medical_Aid;

console.log("Tax:", Tax);
console.log("UIF:", UIF);
console.log("Net Salary: R",Net_Salary);
console.log(" Remainder when we divide 2500 by 7:", 2500 % 7);

//Assignment Operators
// Building a shopping cart, i will apply a discount and also add VAT.

let Cart_Total = 0;

Cart_Total += 150;
Cart_Total += 85;
Cart_Total += 220;

console.log("Subtotal:", Cart_Total);

Cart_Total *=0.90;// Reduces the subtotal by 10 percent
console.log("After VAT is Applied:", Cart_Total);

// Comparison Operators
// VValidate age, password Length and matching email adresses.
const Sign_Up_Age = 25;
const Password = "MelsoftPassw123";
const Typed_Email = "bao@Melsoft.com";
const Confirmed_Email =  "bao@Melsoft.com";

const Old_Enough = Sign_Up_Age >= 18;
const Is_Your_Password_Long_Enough = Password.length >= 8;
const Check_Email_Match = Typed_Email === Confirmed_Email;

console.log("Old Enough:", Old_Enough);
console.log("Is Your Password Long enough:", Is_Your_Password_Long_Enough);
console.log("Email match:", Check_Email_Match);

//Logical Operators
const Logged_In = true;
const Email_Verified = true;
const isAdmin = false;

const  Access_To_Premium = (Logged_In && Email_Verified) || isAdmin;

console.log("Can access premium:", Access_To_Premium );

//Unary Operators
const Age_Input = "25";
const Converted_Age = +Age_Input;

console.log("Converted age:", Converted_Age, typeof Converted_Age);

// Ternary Operator
// Selecting the correct membership Label.

const Membership_Type = "premium";

//const Membership_Badge =  Membership_Badge === "premium" ? "Premium Member" : Membership_Type ==="trail" ? "Trail_Member" : " Free ";
//console.log("Memebership badge:", Membership_Badge);

//String CONCANTENATION
const Customer_Name = "Thabo Nkosi";
const Customer_Age = 28;

const Greetings_With_Plus = "Welcome back " + Customer_Name + ", you are " + Customer_Age + "years old.";

const Greeting_With_Tempalte = `Welcome back ${Customer_Name}, you are ${Customer_Age} years old.`;

console.log(Greetings_With_Plus);
console.log(Greeting_With_Tempalte);

/* 1.Prefix versus postfix
   Prefix (++Variable) The variable is increased before the expression is evaluated
   Postfix (variable++) The old value is evaluated before the variable is increased

   2.Three concrete real-world uses for the modulo operator 
   i. It is used to check whether a number is even or odd
   ii. To make sure that if you want to make sure that things are shared equally.
   
   3. Nested ternaries
   They are good if you have a simple choice to make.One that is not long or comlicated.


*/

//Challenge 4 Part A

const Equality_Testing = [
    ["0 == false", () => 0 == false],
    ["0 === false", ( )  => 0 === false],
    ['"" == 0', () => "" == 0],
    ['"" === 0', () => "" === 0],
    ['"0" == 0', () => "0" == 0],
    ['"0" === 0', () => "0" === 0],
    ["null == undefined", () => null == undefined],
    ["null === undefined", () => null === undefined],
    ["null == 0", () => null == 0],
    ["null >= 0", () => null >= 0],
    ["null > 0", () => null > 0],
    ["NaN == NaN", () => NaN == NaN],
    ["NaN === NaN", () => NaN === NaN],
    ["-0 === +0", () => +0 === -0],
    ["[1,2,3] == '1,2,3'", () => [1, 2, 3] == "1,2,3"],
    ["[] == false", () => [] == false],
];

for (const [expression,test] of Equality_Testing) {
    console.log(expression, " gives", test());
}

// Part B of challenge 4

function Validate_Password_Reset(form) {
    const checks = [
        {
            name: "Passwords Match",
            passed:form.newPassword === fromTwos.Confirm_Password
        },
        {
            name: " Email Matches",
            passed: form. Current_Email ===form.Current_Email
        },

        {
            name: "Password contains at least 8 characters ",
            passed: form.newPasswor.length
        }

    
    ];
}

// Challenge 5 — Operator Precedence
// Prediction = 56


//Prediction = 13
// BODMAS rules apply for this, Multiplication befor addition and subtraction
console.log( 2 + 3 * 4 - 1);

//Prediction = 15
console.log( (2 + 3) * (4 - 1));

//Prediction = 4
//we start subraction from right to left.
console.log( 10 - 4 - 2);

// Prediction= 512
//basically we are working with exponents.
console.log( 2 ** 3 ** 2);

// Prediction= 3
//We start with modulo,multiplication then addition
console.log(10 % 3 * 2 + 1);

// Prediction = 5
//devision will start from the right side to the left
console.log( 100 / 4 / 5);

// Prediction=true
// is greater that 6 whilst 3 is less than 4
console.log( 5 + 2 > 6 && 3 < 4);

// Prediction = true
// And has precedence over OR
console.log( true && false || true && true);

// Prediction = false
// we valuate the !(NOT) operator before the (&&)AND
console.log( !false && !!0);

// Prediction = true
// The &&(AND) opereator takes precedence over the ||(OR)
console.log( 5 > 3 && 10 < 20 || !(2 === "2"));

// Prediction = 1035
//we multiply starting from the right hand side to the left
console.log( 1000 * 1.15 * 0.9);

// Prediction = "number1"
// it merges the return type with the value 1
console.log( typeof 5 + 1);

// Prediction ="56"
//Multiplication take precedence then the string merge will take place
console.log( "5" + 3 * 2);

// Prediction = 4
console.log("15.", "5" - 3 + 2);

// presiction = 4
console.log( "5" - 3 + 2);

// Interview answer:  To make it easy to read, i would use parentheses even in cases where they may seen as they are unnecessary, this is especially for calculation the involce finances as it is easy to read.

//Challenge 6 — Ternary and Short-Circuit Patterns

const percentages = [ 95, 82, 73, 65, 54, 42, 0, 100];

for (const percentage of percentages) {

    const grade =
        percentage >= 90 ? "A" :
        percentage >= 80 ? "B" :
        percentage >= 70 ? "C" :
        percentage >= 60 ? "D" :
        percentage >= 50 ? "E" : "F";

    console.log(
        `Percentage: ${percentage}% | Grade: ${grade}`
    );
}

// Part B

const missingProfile = {};
const partialProfile = {
    displayName: "",
    theme: "",
    maxResults: 0,
    lastLogin: null,
    notificationCount: 0
};

function showProfile(profile) {
    const displayName = profile.displayName || "Guest User";
    const theme = profile.theme || "light";
    const maxResults = profile.maxResults || 10;
    const lastLogin = profile.lastLogin ?? "Never";
    const notificationCount = profile.notificationCount ?? 0;

    console.log({
        displayName,
        theme,
        maxResults,
        lastLogin,
        notificationCount
    });
}

showProfile(missingProfile);
showProfile(partialProfile);

// Part C
const users = [

    {
        name: "Drake",
        address: { city: "Toronto" }
    },

    {
        name: "Lil Wayne",
        address: { city: "New Orleans" }
    },

    {
        name: "BAo",
        address: { city: "Lebowakgomo" }
    },

    null


];

for (const user of users) {
    const City_With_And = user && user.address && user.address.city;

    const City_With_Optional_Chaining = user?.address?.city;
    console.log("Using &&:", City_With_And);
    console.log("Using ?:", City_With_Optional_Chaining);
}

//Challenge 7 — typeof, instanceof, delete 
console.log( typeof 42); // Prediction = number
console.log( typeof "hello");   //Prediction =  "string"
console.log( typeof true);      //Prediction = "boolean"
console.log( typeof undefined);   //Prediction = "undefined"
console.log( typeof null);        //Prediction = "null"
console.log( typeof {});          //Prediction = "object"
console.log( typeof []);           //Prediction = "object"
console.log( typeof function() {});  //Prediction = "function"
console.log( typeof NaN);            //Prediction =  "number"
console.log( typeof undeclaredVariable); // "undefined"

const Sample_Array = [1, 2, 3];
const Sample_Object = { name: "Drake "};
console.log("Array:", Array.isArray(Sample_Array)); // True
console.log("Is object an array?", Array.isArray(Sample_Object)); // false

//Part B
console.log([] instanceof Array);             // true
console.log([] instanceof Object);            // true
console.log({} instanceof Object);            // true
console.log("hello" instanceof String);       // false
console.log(new String("hello") instanceof String); // true
console.log(42 instanceof Number);            // false
console.log(new Date() instanceof Date);      // true
console.log(/abc/ instanceof RegExp);         // true

// typeof is usefull for checking primitive types. instanceof is good for verifying whether a particular object belongs to a certain constructors's protypr chain.

//Part C
const user = {
    name: "Lerato",
    age: 25,
    role: "student"
};

const roleDeleted = delete user.role;
console.log("Delete succeeded:", roleDeleted);

//Challenge 8 — Bitwise Permission System 
const READ = 1;        // Binary: 0001
const WRITE = 2;       // Binary: 0010
const DELETE = 4;      // Binary: 0100
const ADMIN = 8;       // Binary: 1000

//User with READ | WRITE permission
let User_Permsission = READ | WRITE;

console.log("User permission:", User_Permsission);
console.log("Binary version:", User_Permsission.toString(2));

const Admin_Permissions =  READ | WRITE | DELETE | ADMIN;
console.log("Admin_Permissions", Admin_Permissions);
console.log("Admin binary version:", Admin_Permissions.toString(2));

//console.log(" Read permission granted:",( Admin_Permissions & READ ) ! == 0 ? "yes" : "No");

//Challenge 9
const gross = 45000;
const paye = gross * 0.25;
const uif = Math.min(gross * 0.01, 177.12);
const medicalAidCost = 2500;
const pension = gross * 0.075;

const Total_Deductions =  paye + uif + medicalAidCost + pension;
const NetSalary = gross - Total_Deductions;

console.log()