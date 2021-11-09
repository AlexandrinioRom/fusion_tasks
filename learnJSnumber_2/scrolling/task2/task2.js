window.onscroll = () => {
    arrowTop.hidden = (scrollY < document.documentElement.clientHeight);
};

arrowTop.addEventListener('click', ()=> window.scrollTo(scrollY, 0));