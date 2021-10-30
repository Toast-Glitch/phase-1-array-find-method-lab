//return the year of 'W' inside array

function superbowlWin (Array) {
     for (const record of Array) {
          if (record.result === 'W') {
               return record.year;}
          }
     }