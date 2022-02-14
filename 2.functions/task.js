// Задание 1

function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }

    sum = sum + arr[i];
  }

  avg = +(sum / arr.length).toFixed(2);
    
  return { min: min, max: max, avg: avg };
}


//--------------------------------------------------------------------------------- Задание 2
function worker(arr) {
  let initialValue = 0;
  let sum = arr.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;
  
  for ( let i = 0; i < arrOfArr.length; i++) {
    let rezalt = func(arrOfArr[i]);
       if (max < rezalt) {
      max = rezalt;
    }
  }
  return max;
}

// ---------------------------------------------------------------------------------- Задание 3

function worker2(arr) {
  let min = arr[0];
  let max = arr[0];
  let diff = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }

    diff = Math.abs(max - min);

  }

  return diff;
}

