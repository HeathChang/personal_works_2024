// URL >

const solution = (n, arr, str) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        const index1 = arr[i][0]
        const index2 = arr[i][1]

        result.push(str[index1-1], str[index2-1])


    }
    console.log(1, result)
};

const result = solution(7, [ [ 1, 2 ], [ 2, 5 ], [ 2, 6 ], [ 1, 3 ], [ 1, 4 ], [ 3, 7 ] ], [ "root", "abcd", "cs", "hello", "etc", "hello", "solution" ]);
console.log("result:: ", result);
