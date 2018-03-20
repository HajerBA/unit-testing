
function concabloup(param) {
    if(typeof(param)=== 'object'){
        throw new Error('no Object');
    }
    return param + 'bloup';
}