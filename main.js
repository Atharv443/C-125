mid = 0;
lefteyeX=0;
righteyeX=0;

  function setup() {
    canvas = createCanvas(350, 350);  
    canvas.center();
    video = createCapture(VIDEO);
    div = createDiv();
    div.attribute("id","live_div");
    video.parent(div);
    

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log('Model Loaded!');
}

function draw() {
background('#d6dcf5');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    lefteyeX=results[0].pose.lefteye.x;
    lefteyeY=results[0].pose.lefteye.y;
    console.log("lefteyeX = " + lefteyeX + " lefteyeY = " + lefteyeY);
    righteyeX=results[0].pose.righteye.x;
    righteyeY=results[0].pose.righteye.y;
    console.log("righteyeX = " + righteyeX + " righteyeY = " + righteyeY);
    mid=floor(lefteyeX + righteyeX/2);
    console.log(mid);
    
    //write code to store the x co-ordinate of left and right eye in "leftEyeX" and "rightEyeX" variable respectively
    
    
    //Add the left eye x co-ordinate with the right eye x co-ordinate, and then divide it by 2 and store it in "mid" variable
      
    
    //console "leftEyeX", "rightEyeX" and mid variable
     
  }
}

