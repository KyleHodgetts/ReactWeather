/*
  Callback method
*/
function getTempCallback (location, callback) {
  callback(undefined, 78);
  callback('City not found');
}

getTempCallback('London', function (err, temp) {
  if(err) {
    console.log('error', err);
  }
  else {
    console.log('Success', temp);
  }
});

/*
  Promise method
*/
function getTempPromise (location) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(79);
      reject('City not found');
    }, 1000);
  });
}

getTempPromise('London').then(function (temp) {
    console.log('Promise Success', temp);
}, function (err) {
    console.log('Promise Error', err);
});

// Challenge Area

function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if(typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
      return;
    }
    reject('One of the arguments was not a number');
  });
}

addPromise(1, 3).then(function (answer) {
  console.log("Adding Success", answer);
}, function(err) {
  console.log("Adding error", err);
});

addPromise(1, 'v').then(function (answer) {
  console.log("Adding Success", answer);
}, function(err) {
  console.log("Adding error", err);
});

addPromise(1, '3').then(function (answer) {
  console.log("Adding Success", answer);
}, function(err) {
  console.log("Adding error", err);
});
