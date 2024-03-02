// URL > https://school.programmers.co.kr/learn/courses/30/lessons/159994

const solution = (card1, card2, goal) => {
    for (let i = 0; i < goal.length; i++) {
        const condition1 = card1[0] === goal[i];
        const condition2 = card2[0] === goal[i];
        if (condition1 || condition2) {
            if (condition1) card1.shift();
            else if (condition2) card2.shift();
        } else {
            return 'No';
        }
    }
    return 'Yes';
};

console.log("result:: ", solution([ "i", "drink", "water" ], [ "want", "to" ], [ "i", "want", "to", "drink", "water" ]));
