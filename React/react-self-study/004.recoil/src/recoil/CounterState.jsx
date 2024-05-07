import {atom, selector} from 'recoil';


const atomA = atom({
    key: 'atomA',
    default: "Current Value is ",
})

export const atomB = atom({
    key: 'atomB',
    default: 20,
});


// Selector를 사용하여 새로운 값 계산
export const counterState = selector({
    key: 'counterState',
    get: ({get}) => {
        const valueA = get(atomA);
        const valueB = get(atomB);
        return valueA + valueB;
    },
});

