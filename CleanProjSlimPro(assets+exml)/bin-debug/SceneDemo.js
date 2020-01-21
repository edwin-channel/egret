var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var SceneDemo = (function (_super) {
    __extends(SceneDemo, _super);
    function SceneDemo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SceneDemo.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        //this.skinName = skins.SceneDemoSkin;
        this.myBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { return console.log('touched!'); }, this);
    };
    return SceneDemo;
}(eui.Component));
__reflect(SceneDemo.prototype, "SceneDemo");
//# sourceMappingURL=SceneDemo.js.map