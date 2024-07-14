class Solution {
    public int[] solution(int[] numbers) {
        int[] answer = {};
        int[] answer2 = numbers;
        for(int i = 0;i<numbers.length;i++){
            answer2[i] = numbers[i]*2;
        }
        
        return answer2;
    }
}