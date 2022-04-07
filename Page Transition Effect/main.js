window.addEventListener("load", Barba.Pjax.start());

const FadeTransition = Barba.BaseTransition.extend({
    start: function () {
        Promise.all([this.newContainerLoading, this.fadeOut()]).then(
            this.fadeIn.bind(this)
        );
    },

    fadeOut: function () {},

    fadeIn: function () {
        const _this = this;

        this.newContainer.classList.add("slide-in");
        this.newContainer.addEventListener("animationend", function () {
            _this.newContainer.classList.remove("slide-in");
            _this.done();
        });
    },
});

Barba.Pjax.getTransition = function () {
    return FadeTransition;
};
