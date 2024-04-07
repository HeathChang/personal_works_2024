// URL > https://school.programmers.co.kr/learn/courses/30/lessons/92341

const solution = (fees, records) => {
    // 요금 정보 추출
    let baseTime = fees[0]; // 기본 시간(분)
    let baseCost = fees[1]; // 기본 요금(원)
    let unitMin = fees[2]; // 단위 시간(분)
    let unitCost = fees[3]; // 단위 요금(원)

    // 차량별 주차 기록을 담을 Map 생성
    let carMap = new Map();

    // 차량 주차 기록 분석 및 저장
    for (let i = 0; i < records.length; i++) {
        let record = records[i].split(" ");
        let carNumber = record[1];

        if (carMap.has(carNumber)) {
            let existingRecords = carMap.get(carNumber);
            carMap.set(carNumber, [...existingRecords, record]);
        } else {
            carMap.set(carNumber, [record]);
        }
    }

    // 차량 번호로 정렬된 Map 생성
    let sortedCarMap = new Map([...carMap.entries()].sort(([key1,], [key2,]) => key1.localeCompare(key2)));

    // 주차 요금 계산을 위한 변수 초기화
    let inTime = ''; // 입차 시간
    let totalUseTime = 0; // 총 주차 시간
    let resultArr = []; // 결과 배열

    // 정렬된 차량별 주차 기록을 순회하며 요금 계산
    sortedCarMap.forEach((item) => {
        for (let j = 0; j < item.length; j++) {
            if (item[j][2] === "OUT") {
                // 주차 종료 (OUT 기록)
                const outTime = new Date(`2024-04-01T${item[j][0]}:00`);
                const timeDifferenceMs = outTime - inTime;
                const minutesDifference = Math.floor(timeDifferenceMs / (1000 * 60));
                totalUseTime += minutesDifference;
            } else {
                // 주차 시작 (IN 기록)
                inTime = new Date(`2024-04-01T${item[j][0]}:00`);
            }

            // 차량의 마지막 기록 처리
            if (j + 1 === item.length) {
                // 출차 기록이 없는 경우, 자정까지 주차된 것으로 처리
                if (item[j][2] === "IN") {
                    const outTime = new Date(`2024-04-01T23:59:00`);
                    const timeDifferenceMs = outTime - inTime;
                    const minutesDifference = Math.floor(timeDifferenceMs / (1000 * 60));
                    totalUseTime += minutesDifference;
                }

                // 주차 시간에 따른 요금 계산
                let totalCost = 0;
                if (totalUseTime <= baseTime) {
                    totalCost = baseCost; // 기본 시간 내 주차 요금
                } else {
                    // 초과된 시간에 대한 추가 요금 계산
                    totalCost = baseCost + Math.ceil((totalUseTime - baseTime) / unitMin) * unitCost;
                }

                // 결과 배열에 주차 요금 추가
                resultArr.push(totalCost);

                // 변수 초기화 (다음 차량 처리를 위해)
                totalUseTime = 0;
            }
        }
    });

    // 계산된 주차 요금 배열 반환
    return resultArr;
};

console.log("result:: ", solution([180, 5000, 10, 600], ["05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"])); // [14600, 34400, 5000]
// console.log("result:: ", solution([120, 0, 60, 591], ["16:00 3961 IN","16:00 0202 IN","18:00 3961 OUT","18:00 0202 OUT","23:58 3961 IN"])); // [0, 591]
// console.log("result:: ", solution([1, 461, 1, 10], ["00:00 1234 IN"])); // [14841]
