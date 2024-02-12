function solution(products, discounts) {
    let discount = new Map(discounts.map(discount => [discount[0], {type: discount[1], discounted: discount[2]}]))
    let totalCost = 0;
    for (const product of products) {
        const [price, ...tags] = product
        let minPrice = price;

        for(const tag of tags){
            if(tag === 'EMPTY' || !discount.has(tag)) continue;
            const {type, discounted} = discount.get(tag)
            let discountedPrice;
            switch (+type){
                case 0:
                    discountedPrice = discounted;
                    break;
                case 1:
                    discountedPrice = price * (1 - discounted / 100)
                    break;
                case 2:
                    discountedPrice = price - discounted
                    break;
                default:
                    discountedPrice = price
                    break;
            }
            minPrice = Math.min(minPrice, discountedPrice)
        }
        totalCost += Math.round(minPrice);
    }
    return totalCost
}
function solution2(products, discounts) {
    const discountMap = new Map();
    discounts.forEach( v => {
        switch(+v[1]){
            case 0:
                discountMap.set(v[0], ()=> v[2])
                break;
            case 1:
                discountMap.set(v[0], (val)=> Math.ceil(((1 - (val / 100)) * v[2])))
                break;
            case 2:
                discountMap.set(v[0], val => val - v[2])
                break;
        }
    })
    discountMap.set("EMPTY", val => val)
    return products.map(elem => {
        const price = elem[0]
        let min = price;

        for(let i = 1; i < elem.length ; i++) {
            min = Math.min(min, discountMap.get(elem[i])(price))
        }
        return min
    }).reduce((p , n) => p+n, 0)
}
// const products = [ [ 10, "d0", "d1"], [ 15, "EMPTY", "EMPTY" ], [ 20, "d1", "EMPTY" ] ];
// const discounts = [ [ "d0", 1, 27 ], [ "d1", 2, 5 ] ];

const products = [ [ '10', 'sale', 'january-sale' ], [ '200', 'sale', 'EMPTY' ] ];
const discounts = [ [ 'sale', '0', '10' ], [ 'january-sale', '1', '10' ] ];

const res = solution(products, discounts);
const res2 = solution2(products, discounts);
console.log("answer:: ", res);
console.log("answer2:: ", res2);

