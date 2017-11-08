export const itemEdit = (item_id) => new Promise((resolve, reject) => {
  var oReq = new XMLHttpRequest();
  oReq.onreadystatechange = function (){
    if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
      var response = JSON.parse(this.response);
      resolve(response);
    }
  };
  oReq.open("PUT", `http://localhost:8080/api/items/${item_id}`);
  oReq.setRequestHeader('content-type', 'application/json');
  oReq.send();
})