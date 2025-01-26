// https://www.codewars.com/kata/5915686ed2563aa6650000ab/train/javascript

function evilCodeMedal(userTime, gold, silver, bronze) {
    // Helper function to convert time string to total seconds
    const timeToSeconds = (time) => {
      const [hours, minutes, seconds] = time.split(":").map(Number);
      return hours * 3600 + minutes * 60 + seconds;
    };
  
    // Convert all times to total seconds
    const userTimeTotalSeconds = timeToSeconds(userTime);
    const goldTotalSeconds = timeToSeconds(gold);
    const silverTotalSeconds = timeToSeconds(silver);
    const bronzeTotalSeconds = timeToSeconds(bronze);
  
    // Determine the medal
    if (userTimeTotalSeconds < goldTotalSeconds) {
      return "Gold";
    } else if (userTimeTotalSeconds < silverTotalSeconds) {
      return "Silver";
    } else if (userTimeTotalSeconds < bronzeTotalSeconds) {
      return "Bronze";
    } else {
      return "None";
    }
  }

console.log(evilCodeMedal("00:00:01","00:00:02","00:00:03","00:00:04")) //"Gold"
console.log(evilCodeMedal("03:15:00","03:15:00","03:15:01","03:15:02")) //"Silver"
console.log(evilCodeMedal("00:30:00","00:15:00","00:45:00","01:15:00")) //"Silver"