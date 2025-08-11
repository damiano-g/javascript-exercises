const fibonacci = function(position) {
    
    position = Number(position);

    if(position < 0) return "OOPS";
    if(position == 0) return 0;
    if(position == 1) return 1;

    let prev = 0;
    let actual = 1;
    let res;

    for(let i=2; i <= position; i++){
        res = actual+prev;
        prev = actual;
        actual = res;
    }

    return res;
};

// Do not edit below this line
module.exports = fibonacci;
