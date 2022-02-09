const dropArea = document.getElementById("upload");

dropArea.addEventListener("dragover", ()=> {
  console.log("File is over dragArea")
});

dropArea.addEventListener("dragleave", ()=> {
  console.log("File is outside from dragArea")
});

function ativo() {
  console.log("tudo certo por aqui");
}

function show(){
  console.log("tudo certo por aqui");
}
function schedule(){
  window.location.assign("../pages/post.html");
}
function showList(){
  window.location.assign("../pages/agendado.html");
}