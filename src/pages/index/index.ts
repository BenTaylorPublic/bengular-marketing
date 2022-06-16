class IndexView {
    private static isMobile: boolean = false;

    public static initialize(): void {
        this.detectMobiles();
        this.setKeyFeatureHeight();
    }

    private static detectMobiles(): void {
        const toMatch = [
            /Android/i,
            /iPhone/i,
        ];

        if (toMatch.some((toMatchItem) => {
            return navigator.userAgent.match(toMatchItem);
        })) {
            //Conditional script here
            this.isMobile = true;
            document.body.classList.add("mobile");
        }
    }

    private static setKeyFeatureHeight(): void {
        if (!this.isMobile) {
            return;
        }
        const keyFeatures: HTMLElement[] = Array.from(<HTMLElement[]><any>document.getElementsByClassName("keyFeature"));
        for (const keyFeature of keyFeatures) {
            keyFeature.style.height = window.innerHeight + "px";
        }
    }
}

IndexView.initialize();