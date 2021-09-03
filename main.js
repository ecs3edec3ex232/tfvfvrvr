canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

r_width=100;
r_height=90;

r_y=10;
r_x=10;

r_image="rover.png";
b_image="mars.jpg";

function add(){
    bg=new Image();
    bg.onload=uploadbackground;
    bg.src=b_image;

    r=new Image();
    r.onload=uploadrover;
    r.src=r_image;
}

function uploadbackground(){
    ctx.drawImage(bg,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(r,r_x,r_y,r_width,r_height);
}