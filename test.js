window.onload = function(event){
  var pzl = document.querySelector("canvas.puzzle");
  var alert = document.querySelector("div.console");
  
  pzl.addEventListener("touchmove", function(e){
    document.querySelector("div.console").innerText = "x: " + e.changedTouches[0].pageX +"\ny: " + e.changedTouches[0].pageY;
    
  });

  var start,end,gap;
  var startX,endX,startY,endY;
  pzl.addEventListener("touchstart", function(e){
    start = new Date().getTime();
    startX = e.changedTouches[0].pageX;
    startY = e.changedTouches[0].pageY;

    window.addEventListener("touchend", function(e){
      end = new Date().getTime();
      endX = e.changedTouches[0].pageX;
      endY = e.changedTouches[0].pageY;

      var gapX = endX - startX;
      var gapY = endY - startY;
      console.log("startX: " + startX
                  +"\n" + "endX: " + endX
                  +"\n" + "startY: " + startY
                  +"\n" + "endY: " + endY
                  +"\n" + "gapX: " + gapX
                  +"\n" + "gapY: " + gapY
                 );
      gap = end - start;
      console.log(gap);

      var vector = gapX + gapY;
      var speed = 360/gap * vector;
      console.log("speed: "+speed);

      /*
      if((speed <= 90 && -90 <= speed) || (speed <= 90 && speed >= -90)){
        alert.innerText = "더 세게!!";
        return;
      }
      */
      
      var attr = pzl.style.getPropertyValue("transform");
      if(attr==null || attr== undefined || attr==""){
        attr = 0;
      }else{
        attr = Number(attr.split("(")[1].split("deg")[0]);
      }

      pzl.style.transform = `rotate(${attr+speed}deg)`;

    });
  });
  document.documentElement.addEventListener('touchstart', function (event) {if (event.touches.length > 1) { event.preventDefault(); } }, false); 
  var lastTouchEnd = 0; 
  document.documentElement.addEventListener('touchend', function (event) { var now = (new Date()).getTime(); if (now - lastTouchEnd <= 300) { event.preventDefault(); } lastTouchEnd = now; }, false);

  
 
}
