const numberOfArticles =document.getElementsByTagName("h2").length
const goBackButton= document.querySelectorAll(".go-back-up");
const goBackTarget = document.querySelector("#h1");
const articleLinkBtn = document.querySelectorAll(".scroll-to-post")

function smoothScrolltoTop(){
    goBackTarget.scrollIntoView({behavior: "smooth", block: "start"});
    }

for (let article of articleLinkBtn) {
    article.addEventListener('click', function smoothScrolltoArticle(){
        let targetArticle = document.querySelector(`#article-${article.id}`)
        targetArticle.scrollIntoView({behavior: "smooth", block: "start"});
        })
    }

function addEventListenerList(list, event, fn) {
    for (var i = 0, len = list.length; i < len; i++) {
        list[i].addEventListener(event, fn, false);
    }
}

addEventListenerList(goBackButton, "click", smoothScrolltoTop);