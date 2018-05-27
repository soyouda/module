var supportPageOffset = window.pageXOffset !== undefined;
var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
var positionScrollTop = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;

var selectBtn = (function () {
// 1. 클릭 on off 토글
    var status = false;
    var popAreaId = 'layerPopup';

    document.querySelector('.section-layer-popup button').addEventListener('click', function () {
        if(status === false){
            console.log('on');
            status = true;
            layerToggle('block');
            bodyFix('hidden');
        } else {
            console.log('off');
            status = false;
            layerToggle('none');
            bodyFix('inherit');
        }

    });
// 2. 배경 on off
    function layerToggle(toggle) {
        document.getElementById(popAreaId).style.display = toggle;
    }

// 3. 배경 body고정
    function bodyFix(overflow) {
//            document.body.style.top = 100+'px';
        document.body.style.overflow = overflow;
        console.log(positionScrollTop);
        //document.body.style.position = 'fixed';
    }
})();