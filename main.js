var count = 0;
webgazer.setGazeListener(function(data, elapsedTime) {
    if (data == null) {
        return;
    }
    var xprediction = data.x;
    var yprediction = data.y;
    var z = document.elementFromPoint(xprediction, yprediction);
    // console.log(z);
    if(z.attr() == 'box3') {
      count++;
    }
    if(count >= 50) {
      z.remove();
    }
    // console.log(elapsedTime);
}).begin();