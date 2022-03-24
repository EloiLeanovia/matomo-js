/*
This document contains all elements used by multiple leanapm rum functions.
You do not need to add all this functions to your leanapm rum script, only the ones needed.
To know which functions are needed, you can check ibefore each function the scripts they are used in,
or you can check at the start of each script all the functions that they use.
Each segment (function, group of variables,...) will have an ID assigned to help you.
*/

//ID1 : Used by matomo_pagename_functions.js & matomo_similarurl_functions.js
var paramsIterator = new URLSearchParams(window.location.search);
var paramsKeys = Array.from(paramsIterator.keys())

//ID2 : Used by matomo_xhr_functions.js & 
function checkIfSameUrl(rawUrl,variableUrl){
    var nbParamRawUrl = rawUrl.split("/").length;
    var nbParamVariableUrl = variableUrl.split("/").length;
    if(nbParamRawUrl != nbParamVariableUrl)
        return false;
    var startUrl = variableUrl.split("/$")[0];
    if(!rawUrl.startsWith(startUrl))
        return false;
    return true;
}

//ID3 : Used by matomo_xhr_function.js if matomo_userid_data.js sets userid extraction by xhr
function extractFromXHRByPosition(url,position){
    try{
        var splittedUrl = url.split("/");
        var res = splittedUrl[position];
        return res;
    }catch{
        return null;
    }
}

//ID4 : Used by matomo_userid_functions.js, and needs ID5 and ID6 to work
function extractByIdAndInnerHTMLBeginningAndEnd(id, beginning, end){
    try{
        var identifiedElement = extractElementById(id)
        var text = identifiedElement.innerHTML;
        if(beginning == null && end == null){
		return text;
	}
	var res = extractTextBetweenBeginningAndEnd(text,beginning,end);
        return res;
    } catch{
        return null;
    }
}

//ID5 : Used by ID4 & matomo_goal_functions
function extractTextBetweenBeginningAndEnd(text,beginning,end){
    var res = text.split(beginning)[1].split(end)[0];
    return res;
}

//ID6 : Used by ID4
function extractElementById(id){
    var res = document.getElementById(id);
    return res;
}

//ID7 : Used by matomo_goal_functions.js
function extractByTagTypeAndNumber(tag,number){
    //Starts from 0
    try{
        var res = document.querySelectorAll(tag)[number];
    } catch {
        var res = null;
    }
    return res;
}

