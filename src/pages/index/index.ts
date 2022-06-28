class IndexView {

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
            document.body.classList.add("mobile");
        }
    }
}

IndexView.initialize();