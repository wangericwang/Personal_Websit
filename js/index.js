var icon = document.querySelector('.icon');
var menu = document.querySelector('.menu');
var menu_inner = document.querySelector('.menu-inner');
var nav = document.querySelector('.nav');
var form = document.querySelector('form');
var all_icon =document.querySelector('.all-icon');
var all_icon_lis = all_icon.querySelectorAll('li');
var a = menu_inner.querySelectorAll('a');
var myname = document.querySelector('.myname');
var carousel = document.querySelector('.carousel');
var body = document.querySelector('body');
var flag = true;
var temp;
window.addEventListener('load', function() {
    icon.addEventListener('click', function() {
        if (flag) {
            this.style.transform = 'rotate(180deg)';
            this.innerHTML = '';
            menu.style.width = '100%';
            menu.style.height = '100%';
            menu.style.top = 0 + 'px';
            menu.style.left = 0 + 'px';
            menu.style.backgroundColor = '#ebebeb';
            menu_inner.style.display = 'block';
            myname.style.display = 'none';
            body.style.color = 'transparent';
            all_icon.style.display = 'block';
            carousel.style.display = 'none';
            menu_inner.style.marginLeft = - (menu_inner.offsetWidth / 2) + 'px';
            menu_inner.style.marginTop = - (menu_inner.offsetHeight / 2) + 'px';
            for(var i = 0; i < a.length; i++) {
                a[i].children[0].style.borderRadius = (a[i].children[0].offsetHeight / 2) + 'px';
            }
            for(var i = 0; i < all_icon_lis.length; i++) {
                all_icon_lis[i].children[0].children[0].style.color = '#636370';
            }
            anime(menu_inner, menu_inner.offsetWidth * 1.5)
            nav.style.display = 'none';
            flag = false;
            return false;
        } else {
            clearInterval(temp);
            this.style.transform = 'rotate(-180deg)' ;
            this.innerHTML = '';
            all_icon.style.display = 'none';
            menu.style.width = 0;
            menu.style.height = 0;
            menu.style.top = '2.5rem';
            menu.style.left = '2.5rem';
            menu_inner.style.width = '20%';
            menu_inner.style.display = 'none';
            nav.style.display = 'block';
            if(window.innerWidth > 749) {
                myname.style.display = 'block';
            }
            carousel.style.display = 'block';
            flag = true;
        }
     })
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
    window.addEventListener('resize', function() {
        if(window.innerWidth < 750 || !flag) {
            myname.style.display = 'none';
        }
        else {
            myname.style.display = 'block';
        }
    })
    for(var i = 0; i < all_icon_lis.length; i++) {
        all_icon_lis[i].addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#636370';
            this.children[0].children[0].style.color = '#fff'; 
        })
        all_icon_lis[i].addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
            this.children[0].children[0].style.color = '#636370';
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


