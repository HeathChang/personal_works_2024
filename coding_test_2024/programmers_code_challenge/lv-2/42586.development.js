// URL >

const solution = (progresses, speeds) => {
	let tempArr = [];
	let resultArr = [];

	for (let i = 0; i < progresses.length; i++) {
		let remainProgress = Math.ceil(( 100 - progresses[i] ) / speeds[i]);
		tempArr.push(remainProgress);
	}
	let point = -1;
	let count = 0;
	for (let i = 0; i < tempArr.length; i++) {

        if(point === -1) {
            count += 1;
            point = tempArr[i]
        } else  if (point >= tempArr[i]) {
            count += 1;
        } else {
            resultArr.push(count);
            count = 1;
            point = tempArr[i]
        }
        if(i === tempArr.length-1) resultArr.push(count)

	}
	return resultArr;
};

console.log("result:: ", solution([93, 30, 55], [1, 30, 5]));
console.log("@@@@@@@@")
console.log("result:: ", solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));

