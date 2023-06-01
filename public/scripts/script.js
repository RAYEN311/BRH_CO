let desk_view_1 = document.getElementById('desk_intro')
let mob_view_1 = document.getElementById('mob_intro')
let window_rep_width = 800 ; 
if(window.screen.width < window_rep_width){
        desk_view_1.style.display = "none"
        mob_view_1.style.csstext = "display:block ;height: 100%; width: 100%;"
    }
    else if (window.screen.width > window_rep_width){
        desk_view_1.style.display = "display:block ;height: 100%; width: 100%;"
        mob_view_1.style.display = "none"
    }
console.log("your screen width is " + window.screen.width + "px")


// pass oasis : huk8a9b4r7
