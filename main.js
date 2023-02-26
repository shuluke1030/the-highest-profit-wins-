function minMax(arr){
let max = Math.max(...arr);
let min = Math.min(...arr);
let newarray = [min, max];

return newarray;

}

// return [Math.min(...arr), Math.max(...arr)];