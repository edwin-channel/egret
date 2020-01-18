class Main extends eui.UILayer {

    protected createChildren(): void {
        super.createChildren();
        egret.lifecycle.onPause = () => egret.ticker.pause();
        egret.lifecycle.onResume = () => egret.ticker.resume();
        egret.registerImplementation("eui.IAssetAdapter", new AssetAdapter());
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        this.runGame();
    }

    private async loadResource() {
        const loadingView:LoadingUI = this.stage.addChild(new LoadingUI()) as LoadingUI;
        await RES.loadConfig("resource/default.res.json", "resource/");
        await new Promise(resolve => new eui.Theme("resource/default.thm.json", this.stage).once(eui.UIEvent.COMPLETE, resolve, this));
        await RES.loadGroup("preload", 0, loadingView);
        this.stage.removeChild(loadingView);
    }

    private async runGame() {
        await this.loadResource();
        //----- 程式進入點 -----

        // 歡迎來到 EDWIN CHANNEL
        // [github] https://github.com/edwin-channel/egret
        // [youtube] https://www.youtube.com/channel/UC22aGo0GmUgt2_WeDwZpahQ
        // 此專案為開源歡迎分享, 請先編譯看專案畫面, 程式碼 22~41 行可刪除

        // 建立背景 (可刪)
        let bg = new eui.Rect();
        bg.fillColor = 0x333333;
        bg.percentWidth = 100;
        bg.percentHeight = 100;
        this.addChild(bg);

        // 建立按鈕 (可刪)
        let btn = new eui.Button();
        btn.label = "hello";
        btn.horizontalCenter = 0;
        btn.verticalCenter = 0;
        this.addChild(btn);
    }

}
