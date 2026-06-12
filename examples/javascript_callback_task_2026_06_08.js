//6
function processCart(cartItems, callback) {
    const total = callback(cartItems);
    console.log("Total Cost: ₦" + total);
}

const cart = [
    { name: "Book", price: 2000 },
    { name: "Pen", price: 500 },
    { name: "Bag", price: 5000 }
];

processCart(cart, function(items) {
    return items.reduce((sum, item) => sum + item.price, 0);
});

// correct

//7
function processResult(studentName, score, callback) {
    let result = score >= 50 ? "Passed" : "Failed";
    callback(studentName, result);
}

processResult("Abdulrahman", 75, function(name, result) {
    console.log(`Result sent to ${name}: ${result}`);
});
// correct


//8
function uploadFile(fileName, callback) {
    console.log("Uploading file...");

    setTimeout(() => {
        callback(fileName, "Upload Successful");
    }, 3000);
}

uploadFile("assignment.pdf", (file, status) => {
    console.log(`${file}: ${status}`);
});
// correct


//9
function trafficLight(callback) {
    console.log("Red Light");

    setTimeout(() => {
        console.log("Yellow Light");

        setTimeout(() => {
            console.log("Green Light");
            callback();
        }, 2000);

    }, 2000);
}

trafficLight(() => {
    console.log("Traffic light cycle completed.");
});
// correct


//10
function bookTicket(eventName, callback) {
    console.log("Booking ticket...");

    setTimeout(() => {
        let ticket = {
            event: eventName,
            ticketID: "TKT12345"
        };

        callback(ticket);
    }, 2000);
}

bookTicket("Music Concert", (ticket) => {
    console.log("Booking Confirmed!");
    console.log(`Event: ${ticket.event}`);
    console.log(`Ticket ID: ${ticket.ticketID}`);
});
// correct