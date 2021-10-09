webgazer.setGazeListener(function(data, elapsedTime) {
    if (data == null) {
        return;
    }
    var xprediction = data.x;
    var yprediction = data.y;
    console.log(elapsedTime);
}).begin();