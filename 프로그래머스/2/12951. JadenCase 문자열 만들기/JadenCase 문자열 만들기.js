function solution(s) {
    let words = s.split(" ")
    let newWord = words.map(word=>{
        return word==""? "": word[0].toUpperCase() + word.slice(1).toLowerCase()
    })
    return newWord.join(" ");
}