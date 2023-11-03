var img = document.querySelector("#text2");
var love = document.querySelector("#text2 i");
var like = document.querySelector("#like-react");
var likeCount = document.querySelector("#likes h3");
var save = document.querySelector("#i1");
var comment = document.querySelector("#comment-card");
var card2 = document.querySelector("#card2");
var arrow = document.querySelector("#arrow");

var count = 300;
var flag = 0;
var flag1 = 0;

img.addEventListener("dblclick",function(){
    love.style.transform = "translate(-50%,-50%) scale(1)";
    if(flag === 0){
    like.innerHTML =`<i class="ri-heart-3-fill"></i>`;
    like.style.color = "red";
    flag = 1;
    likeCount.innerHTML = ++count + " likes";
    }
    setTimeout(function(){
        love.style.transform = "translate(-50%,-50%) scale(0)";
    },1000)
});

like.addEventListener("click",function(){
    if(flag === 0){
        like.innerHTML =`<i class="ri-heart-3-fill"></i>`;
        like.style.color = "red";
        flag = 1;
        likeCount.innerHTML = ++count +" likes";
    }
    else{
        like.innerHTML =`<i class="ri-heart-3-line"></i>`;
        like.style.color = "black";
        flag=0;
        likeCount.innerHTML = --count + " likes";
    }
});

save.addEventListener("click",function(){
    if(flag1 === 0){
        save.innerHTML =`<i class="ri-bookmark-fill"></i>`;
        flag1 = 1;
    }
    else{
        save.innerHTML =`<i class="ri-bookmark-line"></i>`;
        flag1 = 0;
    }
})

comment.addEventListener("click",function(){
    card2.style.display = "flex";
})
arrow.addEventListener("click",function(){
    card2.style.display = "none";
})