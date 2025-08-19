const solution = (s) => {
	let count = 0;
	const tempMap = new Map();

	for (let i = 0; i < s.length; i++) {
		const includesCondition = ['a', 'z'].includes(s[i]);
		const hasCondition = tempMap.has(s[i]);

		if (!hasCondition && includesCondition) tempMap.set(s[i], [i]);
		else if (hasCondition && includesCondition) tempMap.get(s[i]).push(i);
	}

	for(let i = 0 ; i < tempMap.get('a').length; i++){
      for(let j  = 0 ; j < tempMap.get('z').length; j++){
          const [a,z] = [tempMap.get('a')[i],tempMap.get('z')[j]]
          const bigger = Math.max(a, z);
          const smaller = Math.min(a,z);
          const tempSlice = s.slice(smaller + 1, bigger);
          if(!tempSlice.includes('a') && !tempSlice.includes('z')) count+=1
      }
  }
	return count;

};

console.log("result:: ", solution('abcz')); // 1
console.log("result:: ", solution('zabzczxa')); // 3 (["ZAbzczxa", "zAbZczxa", "zabzcZxA"])
console.log("result:: ", solution('abcdez')); // 1
console.log("result:: ", solution('azaz')); // 3