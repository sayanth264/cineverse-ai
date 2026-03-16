let mediaRecorder;
let audioChunks=[];

function startRec(){

navigator.mediaDevices.getUserMedia({audio:true})
.then(stream=>{

mediaRecorder=new MediaRecorder(stream);

mediaRecorder.start();

document.getElementById("recstatus").innerHTML="Recording...";

mediaRecorder.ondataavailable=e=>{
audioChunks.push(e.data);
};

mediaRecorder.onstop=e=>{

let blob=new Blob(audioChunks,{type:"audio/mp3"});

let url=URL.createObjectURL(blob);

document.getElementById("audioPlayback").src=url;

audioChunks=[];

};

});

}

function stopRec(){

mediaRecorder.stop();

document.getElementById("recstatus").innerHTML="Recording stopped";

}
