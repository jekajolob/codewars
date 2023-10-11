// https://www.codewars.com/kata/59b0a6da44a4b7080300008a/train/javascript

function to24hourtime(hour, minute, period) {


    if(hour <= 9 && period == 'am'){
        hour = '0' + hour
    }

    if(minute <= 9 || minute == 0){
        minute = '0' + minute
    }
  
      if(hour == 12 && period == 'am'){
        hour = '00'
    }

    if(period == 'pm' && hour != 12){
      hour = hour+12
    }
    return `${hour}${minute}`
    // return "0000";
  }

 console.log(to24hourtime( 1,  2, "am"))
 console.log(to24hourtime( 1,  54, "pm"))
 console.log(to24hourtime( 1,  0, "pm"))
 console.log(to24hourtime( 9,  7, "pm"))


 // other solutions

 //1
/*  function to24hourtime(hour, minute, period) {
    if (period === "am" && hour === 12) {
      hour = 0;
    } else if (period === "pm" && hour !== 12) {
      hour += 12;
    }
    return hour.toString().padStart(2, "0") + minute.toString().padStart(2, "0");
  } */

  //2
/*   to24hourtime=(h,m,p)=>String(h%12+(p==='pm'?12:0)).padStart(2,'0')+String(m).padStart(2,'0')
 */