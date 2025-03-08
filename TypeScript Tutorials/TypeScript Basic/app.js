
function display(name) {
    let another = 'Zain'
    for(let i = 0; i <= 5; i++) {
        console.log('Zain ' + (i+1));
    }
    console.log(name + ' ' + another);
    return name + ' ' + another;
}

let name = 'Sardar';

let fullName = display(name);

console.log(fullName);