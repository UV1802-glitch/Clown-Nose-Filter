noseX = 0;
noseY = 0;

function preload()
{
    clown_nose = loadImage('https://i.postimg.cc/qvZ0GZcY/Clown-Nose.png');
}

function setup()
{
    canvas = createCanvas(400, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotResult);
}

function draw()
{
    image(video, 0, 0, 400, 400)

    image(clown_nose, noseX, noseY, 40, 40);
}

function take_photo()
{
    save("picture_taken.png");
}

function modelLoaded()
{
    console.log("poseNet is innitialised!!")
}

function gotResult(result)
{
    if(result.length > 0)
    {
        console.log(result);
        console.log("Nose X = " + result[0].pose.nose.x);
        noseX = result[0].pose.nose.x - 15;
        console.log("Nose Y = " + result[0].pose.nose.y);
        noseY = result[0].pose.nose.y - 15;
        console.log("Length of Array = " + result.length); 
    }
}