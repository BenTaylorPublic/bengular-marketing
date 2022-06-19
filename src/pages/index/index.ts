class IndexView {
    private static isMobile: boolean = false;

    public static initialize(): void {
        this.detectMobiles();
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
}

IndexView.initialize();