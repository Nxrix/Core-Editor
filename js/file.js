function getText(fileurl){
 const request = new XMLHttpRequest();
 request.open('GET', fileurl, false);
 request.send(null);
 return request.responseText;
}

function copyText(text) {
  var textarea = document.createElement("textarea");
  document.body.appendChild(textarea);
  textarea.value = text;
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}
  
function saveText(text,name) {
  var a = document.createElement('a');
  a.href = 'data:attachment/text,' + encodeURI(text);
  a.target = '_blank';
  a.download = name;
  a.click();
}

function saveImage(image,name) {
  var a = document.createElement('a');
  a.href = encodeURI(image);
  a.target = '_blank';
  a.download = name + ".png";
  a.click();
}
