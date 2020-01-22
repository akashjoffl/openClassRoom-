const user = {
    firstName: "Akash",
    lastName: "Jeganath",
    age: 20
};

const user1 = {
    firstName: "Sarah",
    age: 18
};

try {
    console.log(user2.firstName + " " + user2.lastName);
}
catch (error) {
    alert("An error occured!");
    console.log(error);
}
