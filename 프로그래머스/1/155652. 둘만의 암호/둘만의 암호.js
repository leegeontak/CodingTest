function solution(s, skip, index) {
    var answer = 'abcdefghijklmnopqrstuvwxyz';
    let str = ""
    let newArray = [...answer].filter((item)=>{
        return skip.indexOf(item) == -1
    })
    
    console.log(newArray)
    for(let i = 0; i<s.length;i++){
       if(newArray.indexOf(s[i]) !== -1){
        str += newArray[(newArray.indexOf(s[i]) + index) % newArray.length];
        }
    }
    console.log(str)
    return str;
}