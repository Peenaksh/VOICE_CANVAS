x = 0
y = 0
draw_circle = "";
draw_rectangle = "";
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start() {
    document.getElementById("status").innerHTML = "system is listening please speak ";
    recognition.start()

}
recognition.onresult = function(event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "the speech has been recognised as " + content ;
    if (content == "circle") {
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML = "started drawing a circle"
        draw_circle = "set"
    }
    if (content == "rectangle") {
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML = "started drawing a rectangle"
        draw_rectangle = "set"
    } 
}

function setup() {
    Canvas = createCanvas(900,600) ;
}
function draw() {
     if (draw_circle == "set"){
        radius = Math.floor(Math.random()*100)
        circle(x,y,radius) 
        document.getElementById("status").innerHTML = "A circle is drawn"
        draw_circle = ""
     }
     if (draw_rectangle == "set") {
        rect(x,y,80,55)
        document.getElementById("status").innerHTML = "A rectangle is drawn"
        draw_rectangle = ""
     }
    }