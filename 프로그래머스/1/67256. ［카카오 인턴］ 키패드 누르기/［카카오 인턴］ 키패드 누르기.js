function solution(numbers, hand) {
    var answer = '';
    let keypad = {
        1:[0,0],
        2:[0,1],
        3:[0,2],
        4:[1,0],
        5:[1,1],
        6:[1,2],
        7:[2,0],
        8:[2,1],
        9:[2,2],
        "*":[3,0],
        0:[3,1],
        "#":[3,2],
    }
    let prevItem = null; // 이전 item을 저장할 변수
    let leftHand = keypad["*"];
    let rightHand = keypad["#"];

    answer = numbers.map((item, idx) => {
        if (item == 1 || item == 4 || item == 7) {
            leftHand = keypad[item];
            return "L";
        } else if (item == 3 || item == 6 || item == 9) {
            rightHand = keypad[item];
            return "R";
        } else {
            let result = calculate(leftHand, rightHand ,keypad[item],hand);
            if(result == "L"){
                leftHand = keypad[item];
                 return "L";
            }else{
                rightHand = keypad[item];
                return "R";
            }
        }
    });

    function calculate(leftHand, rightHand, currentItem,hand) {
        let leftHandDistance = 
            Math.abs(leftHand[0] - currentItem[0]) + Math.abs(leftHand[1] - currentItem[1])
        let rightHandDistance = 
            Math.abs(rightHand[0] - currentItem[0]) + Math.abs(rightHand[1] - currentItem[1])
        if(leftHandDistance>rightHandDistance){
            return "R"
        }else if(leftHandDistance<rightHandDistance){
            return "L"
        }else if(leftHandDistance==rightHandDistance){
            if(hand == "left"){
                return "L"
            }else{
                return "R"
            }
        }
    }
    
    return answer.join("");
}