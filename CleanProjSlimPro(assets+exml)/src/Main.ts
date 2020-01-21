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
        //await RES.loadGroup("preload", 0, loadingView); //有資源時請取消註解
        this.stage.removeChild(loadingView);
    }

    private async runGame() {
        await this.loadResource();
        //----- 程式進入點 -----

        // 歡迎來到 EDWIN CHANNEL
        // [github] https://github.com/edwin-channel/egret
        // [youtube] https://www.youtube.com/channel/UC22aGo0GmUgt2_WeDwZpahQ
        // [gmail] edwin.channel.tw@gmail.com
        // 此專案為開源歡迎分享, 請先編譯看專案畫面, 程式碼 22~28 行可刪除
    }

}
