function solution(A,B){
    var answer = 0;
    let a = A.sort((a,b)=>a-b);
    let b = B.sort((a,b)=>b-a);
    for(let i = 0;i<a.length;i++){
        answer += a[i]*b[i]
    }
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    return answer;
}