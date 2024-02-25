// URL >

// const solution = (ings, menu, sell) => {
//     let answer = 0;
//     for (let i = 0; i < menu.length; i++) {
//         const arr = menu[i].split(" ")
//         const menuIngredientSplit = arr[1].split("").reduce((acc, cur)=> {
//             acc[cur] = (acc[cur] || 0 ) + 1
//             return acc
//         }, {})
//         console.log(1, ings)
//         console.log(1, menuIngredientSplit)
//     }
//     return null;
//
// };

function solution(ings, menu, sell) {
    const ingsMap = new Map();
    const menuMap = new Map();

    ings.forEach(v => {
        const split = v.split(' ');
        ingsMap.set(split[0], split[1])
    })

    menu.forEach( v => {
        const split = v.split(' ');
        menuMap.set(split[0], split[2] - split[1].split('').reduce((p, n)=> {
            return Number(p)+ Number(ingsMap.get(n)?? 0)
        }, 0))
    })

    return sell.reduce((p, n) => {
        const split = n.split(' ')
        return p + (Number(menuMap.get(split[0])) * Number(split[1]))
    }, 0)
}

console.log("result:: ", solution([ "r 10", "a 23", "t 124", "k 9" ], [ "PIZZA arraak 145", "HAMBURGER tkar 100", "BREAD kkk 30", "ICECREAM rar 50", "SHAVEDICE rar 45", "JUICE rra 55", "WATER a 20" ], [ "BREAD 5", "ICECREAM 100", "PIZZA 7", "JUICE 10", "WATER 1" ]));
console.log("result:: ", solution([ "x 25", "y 20", "z 1000" ], [ "AAAA xyxy 15", "TTT yy 30", "BBBB xx 30" ], [ "BBBB 3", "TTT 2" ]));
