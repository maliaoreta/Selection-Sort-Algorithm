function selectionSort (arr) {

  for (var i = 0; i < arr.length; i++) {

    var curr = arr[i];

    for (var k = i+1; k < arr.length; k++) {

      var next = arr[k];
      
      if (curr > next) {

        curr = next;
      }

      if (k === arr.length-1) {
        
        arr[arr.indexOf(curr)] = arr[i];
        arr[i] = curr;
      }
    }
  }
  
  return arr;
}


var testArr = [9, 4, 5, 2, 1, 6, 7, 10, 3, 0, 8];
console.log(selectionSort(testArr));