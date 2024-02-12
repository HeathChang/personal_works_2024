function getStaleServerCount(n, log_data, query, X) {
    const result = [];
    for( const q of query){
        const interval = [q - X, q]
        const set = new Set();
        log_data.forEach( v => {
            if(v[1] >= interval[0] && v[1] <= interval[1]) set.add(v[0])//성공한 애들을 찾고
        })
        result.push(n - set.size)
    }
    return result
}
const n = 6;
const x = 2;
const logData = [ [ 3, 2 ], [ 4, 3 ], [ 2, 6 ], [6,3] ]; // serverID,time
const query = [ 3,2,6 ];

const res = getStaleServerCount(n, logData,query, x)
console.log("answer:: ", res)

