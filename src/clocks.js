const getCurrentTime = () => {

    const today = new Date();

    let day = today.getDay();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    let millisecond = today.getMilliseconds(); 

    const dayArray= [
        "Sun","Mon","Tues","Wed","Thr","Fri","Sat"
    ];
    
    let currentTime = `${dayArray[day]} ${hour} : ${minute} : ${second} : ${millisecond}`;
    
     hour= checkLeadingZero(hour);
     minute= checkLeadingZero(minute);
     second= checkLeadingZero(second);
    
    document.querySelector(".clock").innerHTML = currentTime;

     setTimeout(getCurrentTime, 100);
}

    const checkLeadingZero = (paramTime) =>{
        paramTime < 10
        ? paramTime = `0${paramTime}`
        : null 

        return paramTime;
    
    }  