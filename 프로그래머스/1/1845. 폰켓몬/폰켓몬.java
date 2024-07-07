import java.util.Arrays;
class Solution {
    public int solution(int[] nums) {
        int answer = 0;
        int[] pocketmon = Arrays.stream(nums).distinct().toArray();
        
        if(nums.length/2 < pocketmon.length){
            answer = nums.length/2;
        }else{
            answer = pocketmon.length;
        }
        return answer;
    }
}