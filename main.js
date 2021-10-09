var xprediction, yprediction;
webgazer.setGazeListener(function(data, elapsedTime) {
    if (data == null) {
        return;
    }
    xprediction = data.x;
    yprediction = data.y;
    // console.log(elapsedTime);
}).begin();

$(function(){
  var z = document.elementFromPoint(xprediction, yprediction);

  //コンソールログを残す
  console.log(z);
});