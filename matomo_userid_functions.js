/*
This script use the segment ID4 in matomo_global_functions.js
You need to add this segment before this script in order for it to work.
*/

var matomoUserId = null;
const extractUserId = () => {
    switch(leanapmUseridData[0]){
        case "fromPage":
                matomoUserId = extractByIdAndInnerHTMLBeginningAndEnd(leanapmUseridData[1],leanapmUseridData[2],leanapmUseridData[3]);
                console.log(matomoUserId);
        case "fromXHR":
            var extractUserIdFromXHR = true;
    }

    if(matomoUserId!=null){
        _paq.push(['setUserId', matomoUserId]);
    }
}


