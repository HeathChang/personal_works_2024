function solution(times, directions) {
    // UNSOLVED
    const timeLength = times.length;
    const exit = [];
    const enter = [];
    const result = new Array(timeLength).fill(-1)

    for (let i = 0; i < timeLength; i++) {
        if (+directions[i] === 0) {
            enter.push({ 'i': directions[i], time: times[i] });
        } else {
            exit.push({ 'i': directions[i], time: times[i] });
        }
    }
    console.log(1, enter)
    console.log(2, exit)





}


const times = [ 0, 0, 1, 5 ];
const directions = [ 0, 1, 1, 0 ];
const res = solution(times, directions); // [2,0,1,5]
console.log("answer:: ", res);

