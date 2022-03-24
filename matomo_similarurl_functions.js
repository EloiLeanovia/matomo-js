/*
This script does not need any function from matomo_global_functions.js.
You need to add the following line in your basic leanapm rum installation script to make this script work : 
_paq.push(['setCustomUrl', manageSimilarUrl(window.location.pathname,paramsKeys)]);
It needs to be before the "trackPageView" line.
*/

function manageSimilarUrl(url, params){
    if(url in leanapmSimilarUrlData){
        if(paramsKeys.length==0)
            dict = leanapmSimilarUrlData[url][""];
        else{
            var found = true;
            var dict = leanapmSimilarUrlData[url];
            params.forEach(param => {
                if(param in dict)
                    dict = dict[param];
                else
                    found = false;
            });
        }
        if(found){
            newUrl = window.location.href;
            dict.forEach(param => {
                console.log("Manage " + param)
                newUrlPartOne = newUrl.substr(0,newUrl.indexOf(param));
                temp = newUrl.substr(newUrl.indexOf(param)+param.length+1);
                if(temp.includes('&'))
                    newUrlPartTwo = temp.substring(temp.indexOf('&'));
                else
                    newUrlPartTwo = ""
                newUrl = newUrlPartOne + param + "=XXX" + newUrlPartTwo;
            });
            return newUrl
        }
        else
            return url;
    }
    else
        return url;
}