// 1. 클릭 on off 토글
var layerPopup = {
    "status" : true,
    "addClass" : function() {
        document.querySelector('button').addEventListener('click', function (cssClass) {
            return this.addClass(cssClass);
        })
    },
    "statusToggle" : function () {
        if(status){
            this.addClass();
            this.status = false;
        } else {
            this.status = true;
        }
    }
};

// 2. 배경 on off

// 3. body 포지션 고정