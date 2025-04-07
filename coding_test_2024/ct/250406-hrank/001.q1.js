const solution = (pnl, k) => {
    let result = Number.MIN_SAFE_INTEGER;
	for (let i = 0; i < pnl.length; i++) {
        let tempSum = pnl[i];
        for(let j = i + 1; j < Math.min(i + k, pnl.length) ; j++){
            tempSum += pnl[j];
			result = Math.max(result, tempSum)
		}
	}
    return result;
};
// console.log("result:: ", solution([-3, 4, 3, -2, 2, 5], 4)); // 8
// console.log("result:: ", solution([4, 3, -2, 9, -4, 2, 7], 6)); // 15
console.log("result:: ", solution([-7, -5, -8, -6, -7], 3)); // -12
console.log("result:: ", solution([2, 5, -7, 8, -6, 4, 1, -9], 5)); // 5
