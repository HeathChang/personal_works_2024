// URL >
/*
* Rx C 크기의 흑백 이미지가 있습니다.
* 1x 1크기의 각 칸은 한 개의 픽셀을 나타내며, 검은식 또는 흰색으로 이루어져 있고, 검은색 부분은 0, 흰색 부분은 1로 표현됩니다.
* 어때, 우리는 흰식으로만 어루어진 영역이 몇 개인지 찾으려고 합니다. 영역이란, 픽셀들이 가보 또는 세로로 서로 연결되어 있을 때 1개의 영역이라고 하며,
* 픽션의 개수가 그 영역의 넓이가 됩니다.
* 단, 대라선으로 연결된 것은 같은 영역이 아닙니다.
*
*
* 로 주어질때, 흰색 영역은 4개이며, 가장 큰 넘이는 8이 됩니다.
* 흑백 이미지가 매개번수 v로 주어질 때, 흰색 영역의 개수와 흰색 영역 중에서 가장 큰 넓이를 retur 하도록 solution 함수를 완성해 주세요.
* 단, 영역의 개수와 넓이 손으로 retum 해주세요. 위의 예시의 경우, [4.8)을 return 하면 됩니다
* */


const solution = (v) => {
    console.log(1, v)
};


console.log("result:: ", solution([
    [ 1, 1, 0, 1, 1 ],
    [ 0, 1, 1, 0, 0 ],
    [ 0, 0, 0, 0, 0 ],
    [ 1, 1, 0, 1, 1 ],
    [ 1, 0, 1, 1, 1 ],
    [ 1, 0, 1, 1, 1 ]
])); // (4,8)
