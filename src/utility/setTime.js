export default function setTime (date, time = false, noDay = false) {
    var dateObj = new Date(date);
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    switch(month){
        case 1: month = "January";
            break;
        case 2: month = "February";
            break;
        case 3: month = "March";
            break;
        case 4: month = "April";
            break;
        case 5: month = "May";
            break;
        case 6: month = "June"; 
            break;
        case 7: month = "July";
            break;
        case 8: month = "August";
            break;
        case 9: month = "September";
            break;
        case 10: month = "October";
            break;
        case 11: month = "November";
            break;
        case 12: month = "December";
            break;
    }

    let withPmAm = '';

    if (time == true) {
        withPmAm = dateObj.toLocaleTimeString('en-US', {
            // en-US can be set to 'default' to use user's browser settings
            hour: '2-digit',
            minute: '2-digit',
        });
        return month + " " + day + ", " + year + ' at ' + withPmAm;
    } else if (noDay == true) {
        return month + ", " + year;
    } else {
        return month + " " + day + ", " + year;
    }
}