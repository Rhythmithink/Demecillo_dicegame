var x = 5;
if(x>1){
    document.writeln("x is greater than 1! Ty!");
}
else{
    document.writeln("NO, " + x + " IS NOT GREATER THAN 1. I TRUSTED YOU >:{");
}


var y = 3;
if(y<15){
    document.writeln("<h1> y is lesser than 15 </h1>");
}
else{
    document.writeln("<h1> y is greater than 15 </h1>");
}


var a = "60";
if(a >= 18 && a <= 59){
    document.writeln("<h1> You may come in </h1>");
}
else if(a>=60){
    document.writeln("<h1> You are too old for this old man ): </h1>");
}
else if(a <= 17 && a>=0){
    document.writeln("<h1> May gatas ka pa sa labi </h1>");
}
else{
    document.writeln("<h1> Is that even an age :/ </h1>");
}

var months = 10;
switch(months){
    case 1:
        months = "January";
        break;
    case 2:
        months = "February";
        break;
    case 3:
        months = "March";
        break;
    case 4:
        months = "April";
        break;
    case 5:
        months = "May";
        break;
    case 6:
        months = "June";
        break;
    case 7:
        months = "July";
        break;
    case 8:
        months = "August";
        break;    
    case 9:
        months = "September";
        break;
    case 10:
        months = "October";
        break;
    case 11:
        months = "November";
        break;
    case 12:
        months = "December";
        break;
    default:
        months = "Invalid Value";
        break;           
}
document.writeln(months);