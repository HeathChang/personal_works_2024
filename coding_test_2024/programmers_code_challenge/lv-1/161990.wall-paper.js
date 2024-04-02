// URL > https://school.programmers.co.kr/learn/courses/30/lessons/161990

const solution = (wallpaper) => {
    let xMin = 9999999;
    let yMin = 999999;
    let xMax = 0;
    let yMax = 0;


    for (let i = 0; i < wallpaper.length; i++) {
        for (let j = 0; j < wallpaper[i].length; j++) {
            if (wallpaper[i][j] === "#") {
                if (xMin > i) xMin = i; //-1
                else if (xMax < i + 1) xMax = i + 1;
                if (yMin > j) yMin = j;
                else if (yMax < j + 1) yMax = j + 1;
            }
        }
    }
    if (yMin >= yMax) return [ xMin, yMin, xMin + 1, yMin + 1 ];
    return [ xMin, yMin, xMax, yMax ];
};


console.log("result:: ", solution([ ".#...", "..#..", "...#." ])); // [ 0, 1, 3, 4 ]
console.log("result:: ", solution([ "..........", ".....#....", "......##..", "...##.....", "....#....." ])); //    [1, 3, 5, 8]
console.log("result:: ", solution([ ".##...##.", "#..#.#..#", "#...#...#", ".#.....#.", "..#...#..", "...#.#...", "....#...." ])); //[0, 0, 7, 9]
console.log("result:: ", solution([ "..", "#." ])); // [1, 0, 2, 1];
