// URL >

const solution = (products, purchased) => {
    /*
    * How To Solve (HTS)
    * 1. 전체 products에서, 구매한 적이있는 purchased 를 빼서, unpurchased 찾기
    * 2. purchased에서 추천 목록 찾기
    * 3. unpurchased에서 purchased 맞는거 찾기
    * */

    const productsMap = new Map();
    let bought = [];
    let unpurchased = [];
    let result = ''



    for (let i = 0; i < products.length; i++) {
        const product = products[i].split(" ");
        let property = "";
        for (let j = 1; j < product.length; j++) {
            if (j !== 1) property += " ";
            property += product[j];
        }
        productsMap.set(product[0], property);
        bought.push(product[0]);
    }

    console.log(1, productsMap);
    console.log(2, bought);

    unpurchased = bought.filter(item => !purchased.includes(item));
    console.log(3, unpurchased);

    let tempArr = [];
    let purchasedPropertyMap = new Map();

    for (let i = 0; i < purchased.length; i++) {
        const purchasedItemProperty = productsMap.get(purchased[i]);
        let purchasedItemPropertySplit = purchasedItemProperty.split(" ");
        for (let j = 0; j < purchasedItemPropertySplit.length; j++) {
            tempArr.push(purchasedItemPropertySplit[j]);
            if (purchasedPropertyMap.has(purchasedItemPropertySplit[j])) {
                let value = purchasedPropertyMap.get(purchasedItemPropertySplit[j]);
                purchasedPropertyMap.set(purchasedItemPropertySplit[j], value + 1);
            } else {
                purchasedPropertyMap.set(purchasedItemPropertySplit[j], 1);
            }
        }
    }
    let tempEntries = Array.from(purchasedPropertyMap);
    // Sort the array by values first, then by keys if values are the same
    tempEntries.sort((a, b) => {
        // Compare values (a[1] and b[1])
        if (a[1] !== b[1]) {
            return b[1] - a[1]; // Sort by value
        } else {
            // If values are the same, compare keys (a[0] and b[0])
            if (a[0] > b[0]) {
                return 1;
            } else if (a[0] < b[0]) {
                return -1;
            }
        }
    });
    purchasedPropertyMap = new Map(tempEntries);

    let tempUnpurchased = [...unpurchased]

    purchasedPropertyMap.forEach((value, key) => {
        for (let i = 0; i < unpurchased.length; i++) {
            let split = productsMap.get(unpurchased[i]).split(" ")
            if(!split.includes(key)){
                const index = tempUnpurchased.indexOf(unpurchased[i])
                tempUnpurchased.splice(index, 1)
            }
            if(tempUnpurchased.length === 1){
                result = tempUnpurchased[0]
            }
        }
    });

    return result;
};


console.log("result:: ", solution([ "sofa red long", "blanket blue long", "towel red", "mattress long", "curtain blue long cheap" ], [ "towel", "mattress", "curtain" ])); // "blanker"
console.log("result:: ", solution(["towel red long thin", "blanket red thick short", "curtain red long wide", "mattress thick", "hat red thin", "pillow red long", "muffler blue thick long"], ["blanket", "curtain", "hat", "muffler"])); // "towel

