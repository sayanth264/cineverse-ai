let recorder;
let audioChunks=[];

async function startRecording(){

let stream = await navigator.mediaDevices.getUserMedia({audio:true});

recorder = new MediaRecorder(stream);

recorder.start();

recorder.ondataavailable = e=>{
audioChunks.push(e.data);
}

}

function stopRecording(){

recorder.stop();

recorder.onstop = e=>{

let blob = new Blob(audioChunks);

let audioURL = URL.createObjectURL(blob);

document.getElementById("audioPlayback").src = audioURL;

audioChunks=[];

}

}
