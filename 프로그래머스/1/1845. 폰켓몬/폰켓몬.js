function solution(nums) {
    let answer = 0;
    let uniqueNum = new Set(nums)
    
    if (nums.length/2 <= uniqueNum.size) {
        answer = nums.length/2;
    }else {
        answer = uniqueNum.size;
    }

    return answer;
}