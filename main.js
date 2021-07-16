canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var rover_width=100
var rover_height=90
var rover_x=10
var rover_y=10
var rover_image="rover.png"

var marsgobrrfranchise =["marsgobrr1.jpg","marsgobrr2.jpg","marsgobrr3.jpg","marsgobrr4.jpg"]
var marsgobrrramnumber=Math.floor(Math.random()*4);
console.log(marsgobrrramnumber);
var backround=marsgobrrfranchise[marsgobrrramnumber]
function add() {
    background_imgtag= new Image();
    background_imgtag.onload=uploadbackround;
    background_imgtag.src=backround
    roverimage= new Image();
    roverimage.onload=uploadrover_image
    roverimage.src=rover_image
}
function uploadbackround() {
    ctx.drawImage(background_imgtag,0,0,1800,1000)
}
function uploadrover_image(){
    ctx.drawImage(roverimage,rover_x,rover_y,rover_width,rover_height)
}
window.addEventListener("keydown",my_keydown)
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed)
    if (keypressed==37){
        left()
        console.log("left")
    }
    if (keypressed==38){
        up()
        console.log("up")
    }
    if (keypressed==39){
        right()
        console.log("right")
    }
    if (keypressed==40){
        down()
        console.log("down")
    }
}
function right() {
    if(rover_x<700){
        rover_x= rover_x+10 ;
        console.log("when right arrow is pressed,x = "+ rover_x + "y = "+ rover_y);
        uploadbackround()
        uploadrover_image()
        
    }
}
function left() {
    if(rover_x>0){
        rover_x= rover_x-10 ;
        console.log("when left arrow is pressed,x = "+ rover_x + "y = "+ rover_y);
        uploadbackround()
        uploadrover_image()
    }
}
function up() {
    if(rover_y>0){
        rover_y= rover_y-10 ;
        console.log("when up arrow is pressed,x = "+ rover_x + "y = "+ rover_y);
        uploadbackround()
        uploadrover_image()
    }
}
function down() {
    if(rover_y<510){
        rover_y= rover_y+10 ;
        console.log("when down arrow is pressed,x = "+ rover_x + "y = "+ rover_y);
        uploadbackround()
        uploadrover_image()
    }
}