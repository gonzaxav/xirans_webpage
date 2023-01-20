const PRICES_URL = "https://raw.githubusercontent.com/gonzaxav/xirans_webpage/main/json/prices.json";
const COMMISSION_INFORMATION_URL = "https://api.trello.com/1/lists/5f7cb19e1f25c258301d2734/cards";
const AMOUNT_OF_COMMISSIONS_URL = "https://api.trello.com/1/lists/5f7cb19ee26f79442887834e/cards";
const WORK_IN_PROGRESS_URL = "https://api.trello.com/1/lists/5f7cb19e78b3ae03f247d058/cards";
const COMPLETED_URL = "https://api.trello.com/1/lists/5f8b9f2c645a831dfec7adab/cards";
const COMMISSION_DISCOUNT_SS_URL = "https://sheets.googleapis.com/v4/spreadsheets/1hnZIYbsV7wUGfhKzpqLDIgeIFYWMCG3D2OVDNJ_obkE/values/public!A1:V101?key=AIzaSyDEl89HU6IEVqW9Nk6OuxbEWNq7csd1TXE";

const POST_NEW_COMMENT = "/new-comment";
const GET_ALL = "/get_all";
const GET_1 = "/get_1";
const POST = "/post";
const PUT = "/put";
const DELETE = "/delete";

var showSpinner = function () {
  document.getElementById("spinner-wrapper").style.display = "block";
}

var hideSpinner = function () {
  document.getElementById("spinner-wrapper").style.display = "none";
}

var getJSONData = function (url) {
  var result = {};
  showSpinner();
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    })
    .then(function (response) {
      result.status = 'ok';
      result.data = response;
      hideSpinner();
      return result;
    })
    .catch(function (error) {
      result.status = 'error';
      result.data = error;
      hideSpinner();
      return result;
    });
}

var postJSONData = function (url, obj) {
  var result = {};
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    })
    .then(function (response) {
      result.status = 'ok';
      result.data = response;
      return result;
    })
    .catch(function (error) {
      result.status = 'error';
      result.data = error;
      return result;
    });
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
  let userLogged = localStorage.getItem('User-Logged');
  let user = document.getElementById("user");
  let logout = document.getElementById("logout");

  if (userLogged && user){
    userLogged = JSON.parse(userLogged);
    user.innerText = '' + userLogged.email;
  }
  if (logout){
    logout.addEventListener("click", function(e){
      localStorage.removeItem('User-Logged');
    });
  }
});