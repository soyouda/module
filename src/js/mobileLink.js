/**
 * 클릭시 attribute의 일부를 텍스트를 수정합니다. PlatformBranch.filter 내용에 따라 모바일 || pc 분기 등으로 사용할 수 있습니다.
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
    "changeAttribute" : function (id, attribute, searchWord, changeWord) {
        if ( navigator.platform ) {
            if ( this.filter.indexOf( navigator.platform.toLowerCase() ) < 0 ) {
                //mobile
                return this.setAttribute(id, attribute, searchWord, changeWord);
            }
        }
    }
};

var goToMobile = function(){
    return  PlatformBranch.changeAttribute('goToEventPage', 'href', '/shop/', '/m2/');
};