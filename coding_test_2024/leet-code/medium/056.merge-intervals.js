// URL > https://leetcode.com/problems/merge-intervals/description/

const solution = (intervals) => {
    if (intervals.length <= 1) return intervals;
    intervals.sort((a, b) => a[0] - b[0]);

    // SOLVE 1.
    // const returnArr = [intervals[0]];
    //
    // for (let i = 1; i < intervals.length; i++) {
    //     const [lastStart, lastEnd] = intervals[i];
    //     const lastInterval = returnArr[returnArr.length - 1];
    //     const [_, lastEnd] = lastInterval;
    //
    //     if (lastEnd >= lastStart) {
    //         lastInterval[1] = Math.max(lastEnd, lastEnd);
    //     } else {
    //         returnArr.push([lastStart, lastEnd]);
    //     }
    // }
    //
    // return returnArr;

    // SOLVE 2.
    const merged = new Map();
    let [lastStart, lastEnd] = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        const [currentStart, currentEnd] = intervals[i];

        if (currentStart <= lastEnd) {
            lastEnd = Math.max(lastEnd, currentEnd);
        } else {
            merged.set(lastStart, lastEnd);
            [lastStart, lastEnd] = [currentStart, currentEnd];
        }
    }
    merged.set(lastStart, lastEnd);

    return [...merged]

};

console.log("result:: ", solution([[2, 6], [1, 3], [15, 18], [8, 10]]));
console.log("result:: ", solution([[1, 3], [1, 5]]));
console.log("result:: ", solution([[1, 4], [0, 2], [3, 5]])); // 0  5
console.log("result:: ", solution([[1, 3], [2, 6], [8, 10], [15, 18]])); // 0  5
