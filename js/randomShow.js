// 调用方法：
// var randPos = new randomPosition(div, 100, 800);
//
// eg.
// var randPos = new randomPosition(".div", 100, 800);

class randomPosition {
    constructor(div, top, bottom, right, left) {
        this.current = 0;
        this.bottom = bottom;
        this.top = top;
        this.right = right || bottom;
        this.left = left || top;
        this.index = 0;
        this.codeWindows = document.querySelectorAll(div);
    }

    _getRandomPosition() {
        var x = Math.floor(Math.random()*(this.right-this.left+1)+this.left);
        var y = Math.floor(Math.random()*(this.bottom-this.top+1)+this.top);
        var z = this.index;
        this.index += 10;
        return {left: x, top: y, zindex: z};
    }

    // 盒子出现
    appear() {
        if (this.current === 0) {
            $(this.codeWindows[this.current]).css({
                left: "500px",
                top: "300px",
                zIndex: 2,
                width: "1100px"
            })
            $(this.codeWindows[this.current]).fadeIn();
            this.current++;
        } else if (this.current < this.codeWindows.length) {
            let X = this._getRandomPosition();
            $(this.codeWindows[this.current]).css({
                left: X.left + "px",
                top: X.top + "px",
                zIndex: X.zindex
            })
            $(this.codeWindows[this.current]).fadeIn();
            this.current++;
        } else {
            console.log("no more box to appear");
        }
    }

    // 盒子消失
    disappear() {
        if (this.current >= 0) {
            $(this.codeWindows[this.current - 1]).fadeOut();
            this.current--;
        } else {
            console.log("no more box to disappear");
        }

    }
}
