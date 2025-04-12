// URL > https://leetcode.com/problems/pascals-triangle/

const solution = (numRows) => {
	const returnArr = [[1]];
    if(numRows === 1) return returnArr;

    const getArray = (arr, index) => {
        const tempArr= [1]
        for(let i = 1; i < index; i++){
            if(i === index - 1) tempArr.push(1);
            else tempArr.push(arr[i]+arr[i-1]);
        }
        return tempArr;
    }

	for (let i = 1; i < numRows; i++) {
        returnArr[i] = getArray(returnArr[i-1],i + 1)
	}
	return returnArr;
};

console.log("result:: ", solution(5));