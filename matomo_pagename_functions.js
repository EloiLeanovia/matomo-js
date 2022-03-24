/*
This script use the segment ID1 in matomo_global_functions.js
You need to add this segment before this script in order for it to work.

You need to add the following line in your basic leanapm rum installation script to make this script work : 
_paq.push(['setDocumentTitle',getCustomPageName(window.location.pathname,paramsKeys)]);
It needs to be before the "trackPageView" line.
*/

function getPageNameFromData(url,paramArray){
    console.log('call1');
    if(paramArray.length==0)
        if(url in leanapmPathData && "" in leanapmPathData[url])
            return leanapmPathData[url][""];
        else
            return url;
    var dict = leanapmPathData[url];
    var nameIsInDict = true;
    paramArray.forEach(param => {
        if(param in dict)
            dict = dict[param];
        else
            nameIsInDict = false;
    });
    if(nameIsInDict)
        if(typeof dict == "object"){
            if("" in dict)
                return dict[""];
            else
                return url;
        }
        else
            return dict;
    else
        return url;
}

function getCustomPageName(path,paramArray){
    console.log("call2");
    path = getPathWithoutSemicolon(path);
    var name = getPageNameFromData(path,paramArray);

    paramArray.forEach(param => {
        name = name.replace("$" + param,paramsIterator.get(param));
    });

    return name;
}

function getPathWithoutSemicolon(path){
    return path.split(';')[0]
}
