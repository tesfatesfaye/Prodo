class DateManager{
    constructor (){
        this.dateObject =new Date()
        this.dayNumber=this.dateObject.getDay()
        this.month=this.dateObject.getMonth()
        this.year=this.dateObject.getFullYear()
        this.date=this.dateObject.getDate()
        this.monthNameHolder=["January","February","March",
        "April","May","June","July","August",
        "September","October","November","December"];
        this.dayNameHolder=["Sunday","Monday","Tuesday","Wednesday","Thursday",
        "Friday","Saturday"]
        }
         get currentDayName(){
           return this.dayNameHolder[this.dayNumber]
            
         }
         get currentDayAb(){
           
             return this.currentDayName.substring(0,3);
             
         }
         get currentMonthName(){
             return this.monthNameHolder[this.month]
         }
         get currentMonthAb(){
             return this.monthNameHolder[this.month].substring(0,3)
         }
    }
    const dateInfo=new DateManager()
    const dateInfoTitle=()=>`${dateInfo.currentDayAb} ${dateInfo.currentMonthAb} ${dateInfo.date}`
    const monthDate=`${dateInfo.currentMonthAb} ${dateInfo.date}`
    const dateCreated=()=>`${dateInfo.month+1}/${dateInfo.date}/${dateInfo.year}`
    export{dateInfo,dateInfoTitle,monthDate,dateCreated}