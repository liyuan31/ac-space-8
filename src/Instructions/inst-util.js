/*
    A function that allows a text element to breathe between two colors
    @para
        selection: a d3 selection of, usually a <text> element
        colorFrom: the color from which the element is changed
        colorTo: the color to which the element is changed, although the order of from and to doesn't really matter
        frequency: the breathe frequency in Hz
*/
function breathe(selection, colorFrom, colorTo, frequency) {
    const duration = 1/frequency*1000;
    selection.attr("fill", colorFrom);
    selection.transition()
        .duration(duration)
        .attr("fill", colorTo)
        .on("end", breathe(selection, colorFrom, colorTo, frequency));
}

String.prototype.shuffle = function () {
    var a = this.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}


function gen_random_int (min, max, inclusive=false) {
    if (inclusive == false){
      return Math.floor(Math.random() * (max-min)) + min;
    } else {
      return Math.floor(Math.random() * (max-min+1)) + min;
    }
}

function fisher_yates_shuffle (arr) {
    let j = undefined;
    let k = undefined;
    for (let i = arr.length-1; i >=0; i--){
      j = gen_random_int(0,i,true);
      k = arr[j];
      arr[j] = arr[i];
      arr[i] = k;
    }
    return arr;
}