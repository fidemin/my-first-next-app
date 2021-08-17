
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default class CurrentTime {
    static async fetchCurrentTime() {
        await sleep(1000)
        const resp = await fetch("http://worldtimeapi.org/api/timezone/Asia/Seoul")
        const currentTime = await resp.json()
        console.log("current time API called: ", currentTime.datetime)
        return currentTime
    }
}