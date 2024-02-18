// URL >

function solution(playList, listenTime) {
    let totalPlayTime = 0;
    let songCount = 0;
    let index = 0;

    // 모든 음악의 총 재생 시간을 계산
    const totalDuration = playList.reduce((acc, curr) => acc + curr, 0);

    // 듣는 시간이 전체 재생 시간보다 길 경우, 모든 곡을 반복해서 들을 수 있음
    if (listenTime >= totalDuration) {
        return playList.length; // 모든 곡을 들을 수 있으므로, 곡의 총 개수 반환
    }

    // 듣는 시간 동안 최대한 많은 곡을 듣기
    while (totalPlayTime < listenTime) {
        totalPlayTime += playList[index % playList.length]; // 곡의 재생 시간을 더함
        index++; // 다음 곡으로 이동
        if (totalPlayTime <= listenTime) { // 현재 곡을 전부 들을 수 있는 경우
            songCount++; // 들은 곡의 수 증가
        }
    }

    return songCount; // 최대 곡 수 반환
}

const result = solution([2,3,1,4], 3);
console.log("result:: ", result);
