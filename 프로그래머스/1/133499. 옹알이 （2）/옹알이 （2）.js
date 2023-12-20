function solution(babbling) {
    var answer = 0;
    let arr = babbling.map(item=>{
        item = item.replaceAll("aya",1)
        item = item.replaceAll("ye",2)
        item = item.replaceAll("woo",3)
        item = item.replaceAll("ma",4)
        return item
    })
    let newArr = arr.filter(item=>{
        return !isNaN(item)
    })
    for(let i =0;i<newArr.length;i++){
        for(let j =0;j<newArr[i].length;j++){
            if(newArr[i][j] == newArr[i][j+1]){
                answer--;
                break;
            }
        }
        answer++;
    }
    console.log(newArr)
    return answer;
}