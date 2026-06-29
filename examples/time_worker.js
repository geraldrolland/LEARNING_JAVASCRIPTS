const startTime = () => {
    setInterval(() => {
    const date = new Date()
    date.getHours()
    postMessage(date)
    }, 1000)
}
startTime()