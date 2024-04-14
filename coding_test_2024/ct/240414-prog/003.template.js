// URL >

const solution = (products, purchased) => {
    const productsMap = new Map();
    let tempProduct = []
    let unbuyItems = []
    let result = ""

    for (let i = 0; i < products.length; i++) {
        const product = products[i].split(" ");
        let property = "";
        for (let j = 1; j < product.length; j++) {
            if (j !== 1) property += " ";
            property += product[j];
        }
        productsMap.set(product[0], property);
        tempProduct.push(product[0])
    }

    const unBoughtItem = tempProduct.filter(item => !purchased.includes(item))

    let tempArr = []
    for (let i = 0; i < purchased.length; i++) {
        const purchasedItemProperty = productsMap.get(purchased[i])
        let purchasedSplit = purchasedItemProperty.split(" ")
        for(let j = 0; j < purchasedSplit.length; j++){
            tempArr.push(purchasedSplit[j])
        }
    }

    const rs = tempArr.reduce((p,n) => {
        const idx = p.map(i => i.key).findIndex(v => {
            if ( v == n) return v
        })
        if ( idx > -1 ) {
            p[idx].value += 1;
            return p
        }
        else return [...p, {key: n, value: 1}]
    }, []).sort((a, b) => {
        if( a.value - b.value != 0) return   b.value - a.value
        else {
            return a.key - b.key
        }
    })

    for(let i = 0 ; i< unBoughtItem.length ; i++){
        const rr = productsMap.get(unBoughtItem[i])
        const split =  rr.split(" ")
    }


};

console.log("result:: ", solution([ "sofa red long", "blanket blue long", "towel red", "mattress long", "curtain blue long cheap" ], [ "towel", "mattress", "curtain" ])); // "blanker"
// console.log("result:: ", solution(["towel red long thin", "blanket red thick short", "curtain red long wide", "mattress thick", "hat red thin", "pillow red long", "muffler blue thick long"], ["blanket", "curtain", "hat", "muffler"])); // "towel

