let nmEnterView = function(){
    $('[data-animation]').each(function(){
        let offset = this.getAttribute('data-animation-offset') || 0.1;
        let once = this.getAttribute('data-animation-once') || true;
        let delay = this.getAttribute('data-animation-delay') || 0;
        enterView({
            selector: [this],
            enter: function enter(el) {
                setTimeout(function(){
                    let animationClass = el.getAttribute("data-animation");
                    el.classList.add('animated');
                    el.classList.add(animationClass); //change this class to change animation
                }, delay);

            },
            exit: function exit(el) {
                let animationClass = el.getAttribute("data-animation");
                el.classList.remove('animated');
                el.classList.remove(animationClass); //change this class to change animation
            },
            offset: parseFloat(offset),
            once: once
        });
    })
}
$(document).ready(function(){
    let test = new nmEnterView();
})