export const callbackPrompt = {
    message = 'str',
    showPrompt() {
        const showPrompt = prompt(this.message);
        console.log(showPrompt)
    },
    showDeferredPrompt(ms) {
        showTime(this.showPrompt.bing(this), ms)
    }

}