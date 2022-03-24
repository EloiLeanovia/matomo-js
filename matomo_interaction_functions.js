/*
This script does not need any function from matomo_global_functions.js.
*/


//This part adds an "onclick" attribute to each defined element

//Tracks all links with either text or an image inside
links = document.querySelectorAll('a');
links.forEach(link => {
    if(link.hasChildNodes){
        switch(link.firstChild.nodeName){
            case "#text":
                link.setAttribute("onclick","sendEvent('Link click','" + link.firstChild.textContent + "');");
                break;
            case "IMG":
                link.setAttribute("onclick","sendEvent('Image click','" + link.firstChild.src + "');");
                break;
        }
    }
});

saveButton = document.querySelectorAll('input#btnSend')[0];
if(saveButton) 
{
    saveButton.setAttribute("onclick","sendEvent('Input click','Sauvegarde du ttk')");
}

saveButton = document.querySelectorAll('input#btnCancel')[0];
if(saveButton) 
{
    saveButton.setAttribute("onclick","sendEvent('Input click','Annulation de la saisie du ttk')");
}


//Send an event to Matomo depending on the category, the name and the leanapmInteractionData variable
function sendEvent(category, name){
    console.log("triggered")
    if(category in leanapmInteractionData && name in leanapmInteractionData[category]){
        try{
            var eventNameData = leanapmInteractionData[category][name];
            if (typeof eventNameData == "string")
                _paq.push(['trackEvent', 'Automated Tracking',category,eventNameData]);
            else{
                if(eventNameData.length == 2)
                    _paq.push(['trackEvent', 'Automated Tracking',eventNameData[0],eventNameData[1]]);
                else
                    if(eventNameData.length == 3)
                        _paq.push(['trackEvent', eventNameData[0],eventNameData[1],eventNameData[2]]);
                    else
                        if(eventNameData.length == 4)
                            if(typeof eventNameData == "number")
                                _paq.push(['trackEvent', eventNameData[0],eventNameData[1],eventNameData[2],eventNameData[3]]);
                            else{
                                switch(eventNameData[3][0]){
                                    case "byTagPositionAndInnerTextBetweenBeginningAndAnd":
                                        extractTextBetweenBeginningAndEnd(extractByTagTypeAndNumber(eventNameData[3][1],eventNameData[3][2]).innerText,eventNameData[3][3],eventNameData[3][4]);
                                        break;
                                }
                            }
            } 
        } catch {
            _paq.push(['trackEvent', 'Automated Tracking',category, name]);
        }
    }
    else
        _paq.push(['trackEvent', 'Automated Tracking',category, name]);
}