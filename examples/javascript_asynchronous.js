/**
 * Asychronosity: this is the process of executing task concurrently
 */


// const task1 = () => {
//     console.log("executing task 1");
// }

// const task2 = () => {
//     console.log("executing task 2")
// }

// task1()
// task2()

// asychronous execution

const promise = new Promise((resolve, reject) => {
    console.log("executing task")
    setTimeout(() => {
        resolve("done")
    }, 500)
})

promise.then((result) => {
    console.log("task done")
})

const otherTask = () => {
    console.log("executing other task")
}

otherTask()