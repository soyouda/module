
/**
 * layer popup on off 입니다.
 **/

/*
//scroll position cross browse
var supportPageOffset = window.pageXOffset !== undefined;
var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
var positionScrollTop = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
*/

var selectBtn = (function () {
    var status = false;
    var popAreaId = 'layerPopup';
    var getQuerySelect = '.section-layer-popup button';

    // 1. 클릭 on off 토글
    document.querySelector(getQuerySelect).addEventListener('click', function () {
        if(status === false){
            status = true;
            console.log('on');
            layerToggle('block');
            bodyFix('hidden');
        } else {
            status = false;
            console.log('off');
            layerToggle('none');
            bodyFix('inherit');
        }
    });
// 2. 배경 on off
    function layerToggle(toggle) {
        document.getElementById(popAreaId).style.display = toggle;
    }

// 3. overflow:hidden toggle
    function bodyFix(overflow) {
        document.body.style.overflow = overflow;
        console.log(positionScrollTop);
    }
})();
