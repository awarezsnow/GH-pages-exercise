const qs=function(selector){
    return document.querySelector(selector);
}

const title=qs('.title');

const em=qs('.em');
const strong=qs('.strong');
const title2=qs('.title2');

title.addEventListener('click',function(){
    title.style.color='red';
    title.style.textDecoration='underline';
});

em.addEventListener('click',function(){    
    em.textContent='Hello World';
});

em.addEventListener('mouseover',function(){    
    em.style.color='blue';
    em.style.textDecoration='underline';
});

strong.addEventListener('mousedown',function(){
    strong.style.color='pink';
})

title2.addEventListener('click',function(){
    alert('🤣🤣🤣🤣🤣');
})