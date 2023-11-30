      function solution(board, moves) {
        var answer = 0;
        let result = [];
        let popResult = [];
        for (let i = 0; i < moves.length; i++) {
          for (let j = 0; j < board[0].length; j++) {      
            if (board[j][moves[i] - 1] !== 0) {
              result.push(board[j][moves[i] - 1]);
              board[j][moves[i] - 1] = 0;
              break;
            }
          }
        }
        for (let i = 0; i < result.length; i++) {
          if (result[i] == result[i + 1]) {
            result.splice(i, 2);
            i = -1;
            answer += 2;
            
          }
        }
        
        return answer;
      }