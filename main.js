//------------ Variables -------------
const canvas = document.querySelector("#ourCanvas");
const ctx = canvas.getContext("2d");
const ctxLine = canvas.getContext("2d");
let btnList =document.getElementById("colorBtn");
var LWidth = document.getElementById("lineWidth").value;
var clearContant = document.getElementById("clear");
var saveContant  = document.getElementById("save"); 
// var ourImg = document.getElementById("ourImg");    
var color,LWidth; 

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


// ------------- line width-----------
function changeLW(val){
    ctx.lineWidth = val ;
}

// ------------- color ------------

btnList.addEventListener("mouseout",changeColor)

function changeColor(){
    color = String(btnList.value)
}


//---------------clear-------------------
clearContant.addEventListener('click', function() {
    console.log("h")
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

//--------------- Save -------------------
saveContant.addEventListener("click", function() {
    var dataURL = canvas.toDataURL('image/png');
    saveContant.href = dataURL;
});

// ------------- drawing -----------
var painting = false;
function startPosition(){
    painting = true;
}
    
function finishedPosition(){
    painting = false;
    ctx.beginPath();
 }
    
function draw(e){
    if(!painting) {return false};
    ctx.lineCap = "round";
    ctx.strokeStyle = color;
    ctx.lineTo(e.clientX +5, e.clientY-50);
    ctx.stroke();
    console.log(e.clientY-50);
    ctx.beginPath();
    ctx.moveTo(e.clientX +5, e.clientY-50)
}
canvas.addEventListener("mousedown", startPosition);
canvas.addEventListener("mouseup", finishedPosition);
canvas.addEventListener("mousemove", draw);
//--------------------------------------------------------
let penBtn = document.getElementById("penS");
// penBtn.addEventListener('click',function(){
    //  ; }
//     ctx.stroke()
//     var ourPen =false;
//     function startPen(){
//         ourPen = true;
//     }
//     function finishedPen(){
//         ourPen = false;
//         ctx.beginPath()
//     }
//     function penDraw(g){
//         if(!ourPen) {return false};
//         ctx.lineCap = "round";
//         ctx.strokeStyle = color;
//         ctx.lineTo(g.clientX +5, g.clientY-50);
//         ctx.stroke();
//         ctx.beginPath();
//         ctx.moveTo(g.clientX+5, g.clientY-50)
//     }
//     canvas.addEventListener("mousedown", startPen);
//     canvas.addEventListener("mouseup", finishedPen);
//     canvas.addEventListener("mousemove",penDraw);
// })


//----------- Rect Btn  -------------
let rect = document.querySelector("#rectS");
let line = document.querySelector("#lineS");


rect.addEventListener("click",drawRect);
function drawRect(){
    ctx.strokeRectStyle = "red";
    ctx.strokeRect(20,20,150,150)
}


// function drawRect(){
//     // ctx.strokeStyle = color ;
//     // ctx.strokeRect(b.clientX,b.clientY,150,150);
//     canvas.addEventListener("mousedown", startRect);
//     canvas.addEventListener("mouseup", finishedRect);
//     canvas.addEventListener("mousemove", drawingRect);
//     // function startRect(){
//     //     var fristX = 

//     // }
//     // function finishedRect(){
        
//     // }
//     // function drawingRect(){
        
//     // }

// }

//----------- line Btn  -------------
line.addEventListener("mouse",drawLine);
function drawLine(m){
    // ctx.strokeStyle = color 
    ctx.beginPath()
    ctx.moveTo(clientX,clientY)
    ctx.lineTo(m.clientX,m.clientY)
    ctx.stroke()
}
    // var dd = false;
// function drawLine(a){
//     if (a == 'Run'){
//         // if (dd) return;
//         let paintLine =false;
//         function startLine(){
//             paintLine = true;
//         }
        
//         function finishedLine(){
//             paintLine = false;
//             // ctx.beginPath()
//         }
        
//         function drawingLine(c){
//             if(!paintLine) {return false};
//             ctxLine.lineWidth = 5;
//             ctxLine.lineCap = "round";
//             ctxLine.strokeStyle = color;
//             ctx.beginPath()
//             // ctx.moveTo(e.clientX , e.clientY)
//             ctxLine.lineTo(c.clientX+50 , c.clientY -100);
//             ctxLine.stroke();
//         }
//         canvas.addEventListener("mousedown", startLine);
//         canvas.addEventListener("mouseup", finishedLine);
//         canvas.addEventListener("mousemove", drawingLine);
//     }    
    // else{return;}

        
// }    



    


