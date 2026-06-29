//1
function delayedGreeting() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello! Welcome back.");
    }, 3000);
  });
}

async function greet() {
  const message = await delayedGreeting();
  console.log(message);
}
// correct

greet();

//2
function fetchUserProfile() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "John Doe",
        email: "john@example.com",
        age: 25
      });
    }, 2000);
  });
}

async function displayUserProfile() {
  const user = await fetchUserProfile();

  console.log("Name:", user.name);
  console.log("Email:", user.email);
  console.log("Age:", user.age);
}

displayUserProfile();
// correct

//3
function login() {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;

    setTimeout(() => {
      if (success) {
        resolve("Login successful!");
      } else {
        reject("Invalid username or password.");
      }
    }, 1000);
  });
}

async function attemptLogin() {
  try {
    const message = await login();
    console.log(message);
  } catch (error) {
    console.log("Login failed:", error);
  }
}

attemptLogin();
// correct

//4
function getProfile() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ userId: 1, name: "John" });
    }, 1000);
  });
}

function getOrders(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Order 1", "Order 2"]);
    }, 1000);
  });
}

function getPaymentHistory(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Payment A", "Payment B"]);
    }, 1000);
  });
}

async function fetchUserData() {
  const profile = await getProfile();
  console.log("Profile:", profile);

  const orders = await getOrders(profile.userId);
  console.log("Orders:", orders);

  const payments = await getPaymentHistory(profile.userId);
  console.log("Payments:", payments);
}

fetchUserData();
// correct

//5
function checkProductStock(productName) {
  return new Promise((resolve, reject) => {
    const inStock = false;

    setTimeout(() => {
      if (inStock) {
        resolve(`${productName} is available.`);
      } else {
        reject(`${productName} is out of stock.`);
      }
    }, 1000);
  });
}

async function checkAvailability() {
  try {
    const result = await checkProductStock("Laptop");
    console.log(result);
  } catch (error) {
    console.log("Error:", error);
  }
}

checkAvailability();
// correct

//10
function downloadFile(fileName) {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.2; // 80% chance of success

    setTimeout(() => {
      if (success) {
        resolve(`${fileName} downloaded successfully.`);
      } else {
        reject(`${fileName} failed to download.`);
      }
    }, Math.random() * 3000);
  });
}

async function downloadAllFiles() {
  try {
    const files = [
      downloadFile("File1.pdf"),
      downloadFile("File2.docx"),
      downloadFile("File3.jpg"),
      downloadFile("File4.mp4"),
      downloadFile("File5.zip")
    ];

    const results = await Promise.all(files);

    console.log("All downloads completed:");
    results.forEach(result => console.log(result));

  } catch (error) {
    console.log("Download Error:", error);
  }
}

downloadAllFiles();

// correct