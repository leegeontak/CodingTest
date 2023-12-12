function solution(sizes) {
    var answer = 0;
    //각 배열마다 오름차순 정렬
    for(let i = 0; i<sizes.length;i++){
        sizes[i].sort((a,b)=>a-b)
    }
    //배열의 첫번째 요소를 기준으로 내림차순 정렬
    sizes.sort((a,b)=>b[0]-a[0]);
    let sero = sizes[0][0];
    //배열의 두번째 요소를 기준으로 내림차순 정렬
    sizes.sort((a,b)=>b[1]-a[1]);
    let garo = sizes[0][1];
    return sero*garo;
}