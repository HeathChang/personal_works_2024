// URL > https://leetcode.com/problems/simplify-path/

const solution = (path) => {
	// First Attempt:
	// const splitArr = path.split("/");
	// let carvePath = [];
	// for (let i = 1; i < splitArr.length; i++) {
	//     if(splitArr[i] === '') continue;
	// 	if (splitArr[i] === '..') {
	// 		carvePath?.pop();
	// 		carvePath?.pop();
	// 	} else if (splitArr[i] === '.') {
	// 		continue;
	// 	} else {
	// 		carvePath.push(splitArr[i]);
	// 		carvePath.push('/');
	// 	}
	// }
	// if(carvePath.length <= 1) return "/"
	// let joinString = carvePath.join('');
	// joinString = joinString.startsWith('/') ? joinString : '/' + joinString
	// return joinString.endsWith('/') ?  joinString.slice(0, -1) : joinString;


	// Second Attempt:
	const splitArr = path.split("/");
	const carvePath = [];

	for (let item of splitArr) {
		if (item === '' || item === '.') continue;
		else if (item === '..' && item.length > 0) carvePath.pop();
		else carvePath.push(item);
	}

	return '/' + carvePath.join('/');
};

console.log("result:: ", solution("/home/"));
console.log("result:: ", solution("/home//foo/")); // "/home/foo"
console.log("result:: ", solution("/home/user/Documents/../Pictures")); // "/home/user/Pictures"
console.log("result:: ", solution("/../"));
console.log("result:: ", solution("/.../a/../b/c/../d/./")); // "/.../b/d"
console.log("result:: ", solution("/a/../../b/../c//.//")); // "/c"