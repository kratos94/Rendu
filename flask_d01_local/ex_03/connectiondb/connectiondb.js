var request = new XMLHttpRequest();
request.responseType = 'arraybuffer';
request.open('GET', '/');
request.onload = function() {
  console.log(request.response);
  console.log(request.response.byteLength);
};
request.send();