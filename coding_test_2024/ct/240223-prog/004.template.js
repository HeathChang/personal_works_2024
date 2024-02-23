// URL >

const solution = (s, times) => {
    const dateArr = s.split(":");
    const date = new Date(Date.UTC(dateArr[0], dateArr[1] - 1, dateArr[2], dateArr[3], dateArr[4], dateArr[5]));
    const startDate = new Date(date.getTime()).getUTCDate();
    let skipped = 1;

    for (let i = 0; i < times.length; i++) {
        const tempArr = times[i].split(":");
        const before = new Date(date).getUTCDate();
        date.setTime(date.getTime() + tempArr[0] * (24 * 60 * 60 * 1000) + tempArr[1] * (60 * 60 * 1000) + tempArr[2] * (60 * 1000) + tempArr[3] * (1000));
        const after = new Date(date).getUTCDate();
        if (after - before > 1) {
            skipped = 0;
        }
    }

    return [ skipped, (date.getUTCDate() - startDate) + 1 ];

};

console.log("result:: ", solution("2021:04:12:16:08:35", [ "01:06:30:00", "01:04:12:00" ])); // [0,4]
console.log("result:: ", solution("2021:04:12:16:08:35", [ "01:06:30:00", "00:01:12:00" ])); // [0,4]
