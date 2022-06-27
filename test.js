window.onload = function(event){
  var pzl = document.querySelector("canvas.puzzle");
  var alert = document.querySelector("div.console");
  
  pzl.addEventListener("mousemove", function(e){
    document.querySelector("div.console").innerText = "x: " + e.pageX +"\ny: " + e.pageY;
    
  });

  var start,end,gap;
  var startX,endX,startY,endY;
  pzl.addEventListener("mousedown", function(e){
    start = new Date().getTime();
    startX = e.pageX;
    startY = e.pageY;

    window.addEventListener("mouseup", function(e){
      end = new Date().getTime();
      endX = e.pageX;
      endY = e.pageY;

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
  

  
 
}