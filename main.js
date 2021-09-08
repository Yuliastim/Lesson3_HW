//Задание 1
function checkNum (firstNum, secondNum) {
    if (firstNum<secondNum) {
        alert ('-1');
    } else if (firstNum>secondNum) {
        alert ('1');
    } else alert ('0');
}
//alert (checkNum(2,5));
// Задание 2
function checkFactorial (num) {
    return (num != 1) ? num * checkFactorial(num - 1) : 1;
}
//alert (checkFactorial(6));
//Задание 3
function checkConnect (a, b,c) {
    let connection = a*100+b*10+c;
    return connection;
}
//alert (checkConnect (10, 2, 4));
//Задание 4
function checkS (a, b) {
    let S;
    if (a!=''&&b!='') {
        return S=a*b;
    } else if (a!=''&&b=='') {
        return S=a*a;
    } else return S=b*b;
}
//alert (checkS (2, ''));
//Задание 5
function checkNumber (num) {
    for (let i=2; i<num; i++) {
        if (num % i ==0) {
            return true;
        } else return false;
    }
}
//alert (checkNumber(29));
//Задание 6
function number(min,max) {
    
    for (let i= min; i<max; i++) {
        if (checkNumber(i)) {
            alert (i);
        } 
    }
}
//alert (number(2,10000));
//Задание 7
function setTime (h, m=0, s=0) {
    if (m==0&&s!=0) {
        alert (`${h}:00:${s}`);
    } else if (m!=0&&s==0) {
        alert (`${h}:${m}:00`)
    } else alert (`${h}:${m}:${s}`);
}
//alert (setTime (1, 2, 5))
//Задание 8
function setSecond (h, m, s) {
    let time = h*3600+m*60+s;
    return time;
}
//alert (setSecond (23, 45, 20));
function setH (s) {
    let h = Math.trunc(s/3600);
    s%=3600;
    let m = Math.trunc(s/60);
    s%=60;
    alert (`${h}:${m}:${s}`);
}
//alert (setH(85520));
//Задание 10
function setDif (h1, m1, s1, h2, m2, s2) {
    let c, a;
    let time1 = setSecond (h1, m1, s1);
    let time2 = setSecond (h2, m2, s2);
    if (time1>time2) {
        c= time1-time2;
    } else c = time2-time1;
    setH (c);
    return c;
}
//alert (setDif (1, 2, 3, 4, 5, 6));