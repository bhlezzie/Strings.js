// Storing favorite actor's first and last names
let favActorFirstName = "Kim";
let favActorLastName = "Taehyung";

// Concatenating the first and last names into fullName
let fullName = favActorFirstName + " " + favActorLastName;

// Creating uppercase and lowercase versions
let uppercase = fullName.toLowerCase(); // Full name in lowercase
let lowercase = "Tanggols"; // Assuming "Max" is the pet's name and converting to lowercase

// Creating a message with the actor's name in uppercase
let message = "My favorite actor is " + fullName.toUpperCase();

// Appending additional text to the message
message += " and his best show is Hwarang";

// Logging all variables to the console
console.log("Favorite Actor First Name: ", favActorFirstName);
console.log("Favorite Actor Last Name: ", favActorLastName);
console.log("Full Name: ", fullName);
console.log("Uppercase (Full name in lowercase): ", uppercase);
console.log("Lowercase (Pet's name in lowercase): ", lowercase);
console.log("Message: ", message);
