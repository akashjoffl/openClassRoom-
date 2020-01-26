const firstUser = {
    name: "Akash",
    online: true,
    accountType: "normal"
};

const secondUser = {
    name: "Sarah",
    online: true,
    accountType: "premium"
}; 

const thirdUser = {
    name: "Haley",
    online: true,
    accountType: "pro"
};

const sendWelcomeMessageToUser = (user) => {
    if (user.online) {
        if (user.accountType === "normal") {
            console.log("Hello " + user.name + "!");
        } else if (user.accountType === "premium") {
            console.log("Welcome premium user " + user.name + "!");
        } else {
            console.log("Welcome pro user " + user.name + "!");
        }
    }    
}   


sendWelcomeMessageToUser(firstUser);
sendWelcomeMessageToUser(secondUser);
sendWelcomeMessageToUser(thirdUser);