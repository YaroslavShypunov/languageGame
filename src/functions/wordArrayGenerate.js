export default (word, last) => {
    if (word.length) {
        const arr = word.split("");
        const d = new Date();
        const time = d.getTime();
        return {
            now: last + 1,
            timeNow: time,
            activeCharakter: arr[0],
            charatkers: arr.map((charakter, index) => ({
                name: charakter,
                id: charakter,
                time: index === 0 ? time : false,
                hint: false,
                left: Math.floor(Math.random() * 100) + 1,
                opacity: Math.floor(Math.random() * (9 - 5)) + 5,
                top: Math.floor(Math.random() * 100) + 1,
                found: false,
            }))
        }
    }
    return {}
}