var count = 0;
webgazer.setGazeListener(function(data, elapsedTime) {
    if (data == null) {
        return;
    }
    var xprediction = data.x;
    var yprediction = data.y;
    var z = document.elementFromPoint(xprediction, yprediction);
    // console.log(z);
    if(z.hasAttribute('id')) {
      count++;
      console.log(count);
    }
    if(count >= 50) {
      z.classList.add('pink');
    }
    // console.log(elapsedTime);
}).begin();