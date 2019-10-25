
function convertToRoman(num) {

if(num>0 && num<=10){
    return cases(num);
}
if(num>10 && num<100){
    let dixieme = parseInt(num/10)*10;
    let unieme = num - dixieme;
    let tableau = [cases(dixieme),cases(unieme)];
    return tableau.join('');
}
if(num>=100 && num<1000){
    let centieme = parseInt(num/100)*100;
    let dixieme = parseInt((num-centieme)/10)*10;
    let unieme = num - centieme - dixieme;
    let tableau = [cases(centieme), cases(dixieme), cases(unieme)];
    return tableau.join('');
}
if(num>=1000 && num<=4000){
    let milliem = parseInt(num/1000)*1000;
    let centieme = parseInt((num-milliem)/100)*100;
    let dixieme = parseInt((num-milliem-centieme)/10)*10;
    let unieme = num - milliem - centieme - dixieme;
    let tableau = [cases(milliem), cases(centieme), cases(dixieme), cases(unieme)];
    return tableau.join('');
}
function cases(n){
    let val = '';
    switch(n){
        case 1:
            val = 'I';
            break;
        case 2:
            val = 'II';
            break;
        case 3:
            val = 'III';
            break;
        case 4:
            val = 'IV';
            break;
        case 5:
            val = 'V';
            break;
        case 6:
            val = 'VI';
            break;
        case 7:
            val = 'VII';
            break;
        case 8:
            val = 'VIII';
            break;
        case 9:
            val = 'IX';
            break;
        case 10:
            val = 'X';
            break;
        case 20:
            val = 'XX';
            break;
        case 30:
            val = 'XXX';
            break;
        case 40:
            val = 'XL';
            break;
        case 50:
            val = 'L';
            break;
        case 60:
            val = 'LX';
            break;
        case 70:
            val = 'LXX';
            break;
        case 80:
            val = 'LXXX';
            break;
        case 90:
            val = 'XC';
            break;
        case 100:
            val = 'C';
            break;
        case 50:
            val = 'L';
            break;
        case 100:
            val = 'C';
            break;
        case 200:
            val = 'CC';
            break;
        case 300:
            val = 'CCC';
            break;
        case 400:
            val = 'CD';
            break;
        case 500:
            val = 'D';
            break;
        case 600:
            val = 'DC';
            break;
        case 700:
            val = 'DCC';
            break;
        case 800:
            val = 'DCCC';
            break;
        case 900:
            val = 'CM';
            break;
        case 1000:
            val = 'M';
            break;
        case 2000:
            val = 'MM';
            break;
        case 3000:
            val = 'MMM'
            break;
        case 4000:
            val = 'MMMM';
            break;
    }
return val;
    }
}

convertToRoman(36);

