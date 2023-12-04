function solution(ingredient) {
    let arr = [];
    let sum = 0;
    for(let i = 0; i<ingredient.length;i++){
        arr.push(ingredient[i])
        if(arr.length>=4){
            let str = arr.slice(-4).join("")
            if(str == "1231"){
                arr.pop()
                arr.pop()
                arr.pop()
                arr.pop()
                
                sum++;
            }
        }
    }
    return sum; 
}

