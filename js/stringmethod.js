const circle_area = (raduis) => {
    const pi = 3.14156;
    let area = (pi * raduis) ** 2;
    return area;
}

const checkOddEven = (check) => {
    if (check % 2 == 0) {
        return 'even';
    } else {
        return 'odd';
    }
}

const getStaffCount = (list, prop, value, operator='==') =>{
    let count = 0;
    list.forEach((item) => {
        if(prop == 'age'){
            count += getAgeCount(item[prop], operator, value);
        }else if(prop == 'languages'){
            if(item[prop].includes(value)){
                count++;
            }
        }else{
            if(item[prop] == value){
                count++;
            }
        }
    });
    return count;
}
