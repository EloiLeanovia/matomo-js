/*
This script use the segments ID5 and ID7 in matomo_global_functions.js
You need to add this segment before this script in order for it to work.
*/

function checkIfPageInData(url, params){
    found = true
    if("url" in leanapmGoalData && url in leanapmGoalData["url"]){
        console.log(url + " found")
        dict = leanapmGoalData["url"][url];
        if(params.length == 0 && !("" in dict))
            found = false
        params.forEach(param => {
            if(param in dict){
                dict = dict[param];
                console.log(param + " found");
            }
            else
                found = false;
        });
    }
    else
        found = false
    if(found)
        return dict
    else
        return found
}

data = checkIfPageInData(window.location.pathname,paramsKeys);
if(typeof data == "object"){
    switch(data[3][0]){
        case 1:
            res = parseFloat(extractTextBetweenBeginningAndEnd(extractByTagTypeAndNumber(data[3][1],data[3][2]).innerText,data[3][3],data[3][4]).replace(/\s/g, "").replace(',','.'));
            break;
    }
    _paq.push(['trackEvent', data[0], data[1],data[2],res]);
}
