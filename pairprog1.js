/* Partner Programming 2/27 */
/* Camby &  */

/* Manually Code a math.pow() method */

function power(x, y){
    if (y===0) {return 1}
    
    let total = 1;
    for( i = 1; i < y; i++){
        total = total * x
    }
    return total;
}