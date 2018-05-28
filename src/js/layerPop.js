// 1. 클릭 on off 토글

var layerPopup = {
    "status" : true,
    "cssClass" : 'test',
    "addClass" : function(cssClass) {
        this.addEventListener('click', function () {
            return console.log('test');//return this.addClass(cssClass);
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