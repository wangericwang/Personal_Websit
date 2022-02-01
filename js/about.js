var icon = document.querySelector('.icon');
var menu = document.querySelector('.menu');
var menu_inner = document.querySelector('.menu-inner');
var nav = document.querySelector('.nav');
var all_icon =document.querySelector('.all-icon');
var all_icon_lis = all_icon.querySelectorAll('li');
var a = menu_inner.querySelectorAll('a');
var body = document.querySelector('body');
var flag = true;
var temp;
window.addEventListener('load', function() {
    icon.addEventListener('click', function() {
        if (flag) {
            menu.style.left = 0 + 'px';
            if(window.innerWidth < 1500) {
                menu.style.width = '100%';
                nav.style.display = 'none';
            } else {
                menu.style.width = '30%';
            }
            menu.style.cursor = 'pointer';
            body.style.backgroundColor = 'transparent';
            all_icon.style.display = 'block';
            menu_inner.style.display = 'block';
            for(var i = 0; i < all_icon_lis.length; i++) {
                all_icon_lis[i].children[0].children[0].style.color = '#636370';
            }
            flag = false;
            return false;
        } else {
            clearInterval(temp);
            if(window.innerWidth < 1500) {
                menu.style.left = '-100%';
            } else {
                menu.style.left = '-30%';
            }
            all_icon.style.display = 'none';
            body.style.backgroundColor = '#fff';
            nav.style.display = 'block';
            flag = true;
        }
    })
    if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
        new WOW().init();
    };
    menu.addEventListener('click',function(e) {
        if(!flag) {
            icon.click();
        }
        e.stopPropagation();
    })
    var a_length = menu_inner.querySelectorAll('a');
    for(var i = 0; i < a_length.length; i++) {
        a_length[i].addEventListener('mouseenter', function() {
            this.style.fontSize = 1.1 + 'rem';
        })
        a_length[i].addEventListener('mouseleave', function() {
            this.style.fontSize = 1 + 'rem';
        })
    }
    for(var i = 0; i < all_icon_lis.length; i++) {
        all_icon_lis[i].addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#322b38';
            this.children[0].children[0].style.color = '#fff'; 
        })
        all_icon_lis[i].addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
            this.children[0].children[0].style.color = '#0e2337';
        })
    }
    var nav_lis = nav.querySelectorAll('li');
    for(var i = 0; i < nav_lis.length; i++) {
        nav_lis[i].addEventListener('touchstart', function() {
            this.children[0].style.transform = 'rotateX(90deg)';
        })
        nav_lis[i].addEventListener('touchend', function() {
            this.children[0].style.transform = 'rotateX(0deg)';
        })
    }
    nav_lis[3].addEventListener('click', function() {
        icon.click();
    })
    window.addEventListener('resize', function() {
        if(window.innerWidth < 1500 && !flag) {
           menu.style.width = '100%';
           nav.style.display = 'none';
        }
        else {
            menu.style.width = '30%';
            nav.style.display = 'block';
        }
        if(window.innerWidth < 1500) {
            nav.className = 'nav';
        }
    })
    all_icon.addEventListener('click', function(e) {
        e.stopPropagation();
    })
    menu_inner.addEventListener('click', function(e) {
        e.stopPropagation();
    })
    function anime(obj, target, callback){
        clearInterval(temp);
        obj.timer = setInterval(function() {
            var step = (target - obj.offsetWidth) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (obj.offsetWidth >= target) {
                if (callback){
                    callback();
                }
                return 0 ;
            }
            obj.style.width = obj.offsetWidth + step + 'px';
            obj.style.left = '50%';
            obj.style.marginLeft = - (obj.offsetWidth / 2) + 'px';
            obj.style.marginTop = - (obj.offsetHeight / 2) + 'px';
            temp += this;
        }, 30);
    }
})
