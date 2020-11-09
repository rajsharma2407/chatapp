const moment = require('moment');
const today = new Date();
var hour = today.getHours();
var min = today.getMinutes();
var state;
if(hour>12){
    hour-=12;
    state = 'PM';
}else{
    state = "AM";
}
const formatMessage = (username,text)=>{
    return {
        username,
        text,
        time:`${hour}:${min} ${state}`
    }
}
module.exports  = formatMessage;