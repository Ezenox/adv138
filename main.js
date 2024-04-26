img = ""
noseX = 0;
noseY = 0;
marioX = 325;
marioY = 325;

function preload() {
	img = loadLimage("mario.jpg");
}

function setup() {
	createCanvas(650, 400);
	video = createCapture(VIDEO);
	video.size(600,300);

	poseNet = ml5.poseNet(video , modelLoaded);
	poseNet.on('pose' , gotPoses);
}

function draw() {
	background("#D3D3D3");
	  if(noseX < 300)
	  {
		marioX = marioX - 1;
	  }
	  if(noseX > 300)
	  {
		marioX = marioX + 1;
	  }
	  if(noseY < 150)
	  {
		marioY = marioY - 1;
	  }
	image(img, marioX, marioX, 40, 70);
}

function modelLoaded() {
	console.log('Model Loaded! ');
}

function gotPoses(results)
{
	noseX = results[0].pose.nose.x;
	noseY = results[0].pose.nose.y;
	console.log("noseX = " + noseY +", noseY = " + noseY);
}






