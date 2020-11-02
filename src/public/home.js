let numberOfArticles =document.getElementsByTagName("h2").length

for (let i=0; i<numberOfArticles;i++){
let scrollToArticleLinkId = "scroll-to-post-"+i;
let targetId = "post-"+i;
let goBackButtonClass = "post-btn-"+i;
let target = document.querySelector(`#${targetId}`)
let scrollToArticleLink = document.querySelector(`#${scrollToArticleLinkId}`);
let goBackButton = document.querySelector(`.${goBackButtonClass}`)
let goBackTarget = document.querySelector('#h1')

function smoothScroll(){
    target.scrollIntoView({behavior: "smooth", block: "start"});
    }

function smoothScrolltoTop(){
    goBackTarget.scrollIntoView({behavior: "smooth", block: "start"});
    }

scrollToArticleLink.addEventListener("click", smoothScroll);
goBackButton.addEventListener("click", smoothScrolltoTop);
}