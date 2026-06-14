//1
const fetchUserProfile = new Promise((resolve, reject) => {
    setTimeout(() => {
        const user = {
            name: "John Doe",
            email: "john@example.com",
            age: 25
        };

        resolve(user);
    }, 2000);
});

fetchUserProfile
    .then(user => {
        console.log("User Profile:");
        console.log("Name:", user.name);
        console.log("Email:", user.email);
        console.log("Age:", user.age);
    })
    .catch(error => {
        console.log("Error:", error);
    });
// correct

//2
function processPayment(amount) {
    return new Promise((resolve, reject) => {
        if (amount > 0) {
            resolve(`Payment of ₦${amount} was successful.`);
        } else {
            reject("Invalid payment amount.");
        }
    });
}

processPayment(5000)
    .then(message => {
        console.log(message);
    })
    .catch(error => {
        console.log(error);
    });
// correct
    
//3
function getUserID() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(101);
        }, 1000);
    });
}

function getOrders(userID) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(["Order1", "Order2"]);
        }, 1000);
    });
}

function getShippingDetails(orders) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Shipping: Delivery in 3 days");
        }, 1000);
    });
}

getUserID()
    .then(userID => {
        console.log("User ID:", userID);
        return getOrders(userID);
    })
    .then(orders => {
        console.log("Orders:", orders);
        return getShippingDetails(orders);
    })
    .then(shipping => {
        console.log(shipping);
    })
    .catch(error => {
        console.log(error);
    });
// correct
    
//4
function checkInventory(quantity) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (quantity > 0) {
                resolve("Product is available in stock.");
            } else {
                reject("Product is out of stock.");
            }
        }, 2000);
    });
}

checkInventory(5)
    .then(message => {
        console.log(message);
    })
    .catch(error => {
        console.log(error);
    });
// correct
    
//5
const file1 = new Promise(resolve => {
    setTimeout(() => resolve("File 1 downloaded"), 1000);
});

const file2 = new Promise(resolve => {
    setTimeout(() => resolve("File 2 downloaded"), 2000);
});

const file3 = new Promise(resolve => {
    setTimeout(() => resolve("File 3 downloaded"), 3000);
});

Promise.all([file1, file2, file3])
    .then(results => {
        console.log(results);
        console.log("All files downloaded successfully.");
    })
    .catch(error => {
        console.log("Download failed:", error);
    });
// correct