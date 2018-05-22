/**
 * 링크 클릭 시 모바일 || pc 분기 입니다.
 * PlatformBranch.platformTest(id, attribute, searchWord, changeWord)
 **/
var PlatformBranch = {
    "filter" : "win16|win32|win64|mac|macintel",
    "setAttribute" : function (id, attribute, searchWord, changeWord){
        var getId = document.getElementById(id);
        var getAttribute = getId.getAttribute(attribute);
        var changeUrl = function(){
            return getAttribute.replace(searchWord,changeWord);
        };

        return getId.setAttribute(attribute, changeUrl());
    },
    "platformTest" : function (id, attribute, searchWord, changeWord) {
        if ( navigator.platform ) {
            if ( this.filter.indexOf( navigator.platform.toLowerCase() ) < 0 ) {
                //mobile
                return this.setAttribute(id, attribute, searchWord, changeWord);
            }
        }
    }
};

var goToMobile = function(){
    return  PlatformBranch.platformTest('goToEventPage', 'href', '/shop/', '/m2/');
};