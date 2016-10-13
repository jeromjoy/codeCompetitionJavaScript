function sortNumber(a,b) {
    return parseInt(a) - parseInt(b);
}

function singleLineTask(input) {
    var output = "";
    var inputArr = input.split(' ');
    
    var sorted = inputArr.sort(sortNumber);
    if(sorted.length===1){
        return '';
    }
    var min = parseInt(sorted[0]);
    var result = '';
    for (var i = 1; i < sorted.length; i++) {
        if ((min + i) !== parseInt(sorted[i])) {
            var j = 0;
            while ((min + i + j) < parseInt(sorted[i])) {
                result += parseInt(min + i + j) + ' ';
                j++;
            }
            min = min+j;
        }
    }
    return(result.trim());
}
function task(input) {
    var arr = input.split('\n');
    var len = arr.length - 1;
    var result = '';
    for (var i = 1; i < arr.length; i++) {
        result  = result + singleLineTask(arr[i]) + '\n';
    }
    console.log(result);
    document.getElementById('area').value = result;
}

