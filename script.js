window.onload = startTime;

function startTime() {
    const date = new Date();
    
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    
    m = checkTime(m);
    s = checkTime(s);
    
    document.getElementById('time').innerHTML = h + ':' + m + ':' + s;
    const t = setTimeout(startTime, 500);

    const weekdayHolder = document.getElementById('weekday');
    weekdayHolder.innerText = getWeekday(date);

    const monthHolder = document.getElementById('month');
    monthHolder.innerText = getMonth(date);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }; 
    return i;
}

function getWeekday(date) {
    const weekdayIndex =  date.getDay();
    switch(weekdayIndex) {
        case 0: return 'Söndag';
        case 1: return 'Måndag';
        case 2: return 'Tisdag';
        case 3: return 'Onsdag';
        case 4: return 'Torsdag';
        case 5: return 'Fredag';
        case 6: return 'Lördag';

    }
}

function getMonth(date) {
    const dayOfMonth = date.getDate();
    const monthIndex = date.getMonth();

    const prefix = dayOfMonth + ' ';

    switch(monthIndex) {
        case 0: return prefix + 'Januari';
        case 1: return prefix + 'Februari';
        case 2: return prefix + 'Mars';
        case 3: return prefix + 'April';
        case 4: return prefix + 'Maj';
        case 5: return prefix + 'Juni';
        case 6: return prefix + 'Juli';
        case 7: return prefix + 'Augusti';
        case 8: return prefix + 'September';
        case 9: return prefix + 'Oktober';
        case 10: return prefix + 'November';
        case 11: return prefix + 'December';
    }
    
    return dayOfMonth + ' ' + monthIndex;
}



/*

switch(day) {
    case "1":
        monday();
        break;
    case "2":
        tuesday();
        break;
    case "3":
        wednesday();
        break;
    case "4":
        thursday();
        break;
    case "5":
        friday();
        break;
    case "6":
        saturday();
        break;
    case "7":
        sunday();
        break;
    
}

switch(month) {
    case "1":
        january();
        break;
    case "2":
        february();
        break;
    case "3":
        march();
        break;
    case "4":
        april();
        break;
    case "5":
        may();
        break;
    case "6":
        june();
        break;
    case "7":
        july();
        break;
    case "8":
        august();
        break;
    case "9":
        september();
        break;
    case "10":
        october();
        break;
    case "11":
        november();
        break;
    case "12":
        december();
        break;
}

*/




