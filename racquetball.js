const canvas = document.getElementById('can')
const ctx = canvas.getContext('2d')
canvas.width = 1024;
canvas.height = 576;
//canvas.width = window.innerWidth;
//canvas.height = window.innerHeight;
const fps = 1/60;
class Ball{
    constructor(){
        this.velocity = {
            x: 0,
            y: 0
        }
        this.opacity = 1
        this.radius = 10
        this.position = {
            x: canvas.width/2,
            y: canvas.height - (2* this.radius)
        }}

        draw(){
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = 'red';
        ctx.fill()
        ctx.stroke();
    }
}
class Arrow{
    #ctx;
    #width;
    #height;
    constructor(ctx, width, height){
        //this.f +=f;
        this.#ctx = ctx;
        this.#ctx.strokeStyle = 'black';
        this.#width = width;
        this.#height = height;
        console.log("effect loaded");
        this.force = 0;
    }
    #draw(force){
        var headlen = 10;
        var startx = ball.position.x;
        var starty = ball.position.y;
        var endx = startx - force;
        var endy = starty - force;
        var dx = endx-startx;
        var dy = endy-starty;
        var angle = Math.atan2(dy,dx);

        this.#ctx.beginPath();
        this.#ctx.moveTo(startx, starty);
        this.#ctx.lineTo(endx, endy);
        this.#ctx.lineTo(endx-headlen * Math.cos(angle - Math.PI / 6), endy - headlen * Math.sin(angle - Math.PI /6));
        this.#ctx.moveTo(endx,endy);
        this.#ctx.lineTo(endx - headlen * Math.cos(angle + Math.PI / 6), endy - headlen * Math.sin(angle + Math.PI / 6));
        this.#ctx.stroke();
        this.#ctx.closePath();
    }
    update(force){
        this.#ctx.clearRect(0,0,this.width,this.height);
        this.#draw(this.force);
        this.force +=force;
       // requestAnimationFrame(this.update.bind(this));
        //this.f += f;
        //take start position and add the force for both x and y
    }
}
const arrow = new Arrow(ctx, canvas.width, canvas.height);
const ball = new Ball();
ball.draw();

const arrows = [];


//const arrow = new Arrow();
//arrow.draw();
const balls = [];
const keys = {
    a: {
        pressed : false
    },
    d: {
        pressed : false
    },
    space: {
        pressed : false
    }
}
let game = {
    over: false,
    active:true
}
let frames = 0;
let toggled = false;

function animate(){
    if(!game.active) return
    requestAnimationFrame(animate);
    const force = 10*fps;
    //force = force;
    console.log(force);
    ctx.fillStyle = 'white';
    ctx.fillRect = (0,0, canvas.width, canvas.height);
    //ball.update();
    

    if(keys.space.pressed == true){
        //force=(fps);
        //arrow.update(force);
        arrow.update((force));
        toggled = true;
        
    }
    else if(keys.space.pressed == false && toggled){
        force = 0;
    }
    

    
    
    //console.log(frames);
    if(frames == 300){
        game.active = false;
    }
    frames++;
}
animate();

addEventListener('keydown', ({key}) => {
    if(game.over) return
    switch(key){
        case 'a' : {
            keys.a.pressed = true
        break
        }
        case 'd' : {
            keys.d.pressed = true
        break
        }
        case ' ' : {
           keys.space.pressed = true
           //if keys.space.pressed is true then increase force 1/frame
           //force.update(force+1);
        break
        }

    }
})

addEventListener('keyup', ({key}) => {
    switch(key){
        case 'a' : {
            keys.a.pressed = false
        break
        }
        case 'd' : {
            keys.d.pressed = false
        break
        }
        case ' ' : {
            //console.log('space')
            keys.space.pressed = false
            //force = 0;
        break
        }

    }
})