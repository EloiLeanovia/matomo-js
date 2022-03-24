/*
This script use the segments ID2 and ID3 in matomo_global_functions.js
You need to add this segment before this script in order for it to work.
*/

var open = window.XMLHttpRequest.prototype.open,
send = window.XMLHttpRequest.prototype.send;
var matomoMet = "",
matomoUrl = "",
matomoEventPossibilities = leanapmXhrData;
matomoUrlArray = [];
var extractUserIdFromXHR = false;

//This functions track every XHR requests and use them for the XHRDetected function
function openReplacement(method, url, async, user, password) {
  this._url = url;
  matomoMet = method;
  matomoUrl = url;
  if(matomoUrl.startsWith("http://"))
    matomoUrl = matomoUrl.split("http://")[1];
  if(matomoUrl.startsWith("https://"))
    matomoUrl = matomoUrl.split("https://")[1];
  if(matomoUrl.startsWith("/"))
    matomoUrl = matomoUrl.substring(1);
  return open.apply(this, arguments);
}

function sendReplacement(data) {
  if(this.onreadystatechange) {
    this._onreadystatechange = this.onreadystatechange;
  }
  XHRDetected(matomoMet,matomoUrl);
  this.onreadystatechange = onReadyStateChangeReplacement;
  return send.apply(this, arguments);
}

function onReadyStateChangeReplacement() {
  if(this._onreadystatechange) {
    return this._onreadystatechange.apply(this, arguments);
  }
}

window.XMLHttpRequest.prototype.open = openReplacement;
window.XMLHttpRequest.prototype.send = sendReplacement;

//This functions manage detected XHR
function XHRDetected(method, url){
  //if the user id needs to be extracted from an XHR, this condition will be set to true (in the matomo_userid_functions.js script). 
  if(extractUserIdFromXHR && checkIfSameUrl(url,leanapmUseridData[2]) && method == leanapmUseridData[1])
    _paq.push(['setUserId', extractFromXHRByPosition(url,leanapmUseridData[3])]);
  var UrlDetected = method + " " + url;
  matomoUrlArray.push(url.split("/"));
  var keyFound = false;
  for(var key in matomoEventPossibilities){
      if(checkIfSameUrl(UrlDetected,key)){
          matomoEventPossibilities = matomoEventPossibilities[key];
          keyFound = true;
          break;
      }
  }
  if(!keyFound){
      console.log("key not found");
      unexpectedXHRDetected();
  }
  else
      if(typeof matomoEventPossibilities == "string")
          sendXHREvent(matomoEventPossibilities);
}

function unexpectedXHRDetected(){
    matomoEventPossibilities = leanapmXhrData;
    matomoUrlArray = [];
}

function sendXHREvent(message){
    matomoEventPossibilities = leanapmXhrData;
    _paq.push(['trackEvent', 'XHR', customizeMessage(message)]);
    matomoUrlArray = [];
}

function customizeMessage(message){
    while(message.includes("$var$")){
        var variablePosition = message.indexOf("$var$");
        var splittedMessage = message.slice(variablePosition).split("$");
        var XHRNumber = splittedMessage[2];
        var ParamNumber = splittedMessage[3];
        message = message.replace("$var$" + XHRNumber + "$" + ParamNumber + "$",matomoUrlArray[XHRNumber][ParamNumber]);
    }
    return message;
}
