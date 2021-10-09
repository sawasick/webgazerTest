webgazer.setGazeListener(function(data, elapsedTime) {
    if (data == null) {
        return;
    }
    var xprediction = data.x;
    var yprediction = data.y;
    var z = document.elementFromPoint(xprediction, yprediction);
    console.log(z);
    // console.log(elapsedTime);
}).begin();