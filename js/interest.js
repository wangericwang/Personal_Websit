var icon = document.querySelector('.icon');
var menu = document.querySelector('.menu');
var menu_inner = document.querySelector('.menu-inner');
var nav = document.querySelector('.nav');
var all_icon =document.querySelector('.all-icon');
var all_icon_lis = all_icon.querySelectorAll('li');
var a = menu_inner.querySelectorAll('a');
var body = document.querySelector('body');
var light = document.querySelector('.light_3');
var string = document.querySelector('.string');
var dog = document.querySelector('.dog');
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
            menu.style.cursor = 'pointer';
            body.style.backgroundColor = 'transparent';
            menu_inner.style.display = 'block';
            all_icon.style.display = 'block';
            light.style.display = 'none';
            string.style.display = 'none';
            dog.style.display = 'none';
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
            body.style.backgroundColor = '#0E2337';
            menu.style.width = 0;
            menu.style.height = 0;
            menu.style.top = '2.5rem';
            menu.style.left = '2.5rem';
            menu_inner.style.width = '20%';
            menu_inner.style.display = 'none';
            nav.style.display = 'block';
            if(window.innerWidth > 749) {
                light.style.display = 'block';
                string.style.display = 'block';
                dog.style.display = 'block';
            }
            flag = true;
        }
    })
    if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
        new WOW().init();
    };
    var flag_2 = true;
    var flag_3 = true;
    var flag_4 = true;
    function flagchange() {
        if(!flag_3) {
            flag_2 = true;
        }
    }
    string.addEventListener('click',function() {
        if(!flag_4) {
            flagchange();
        }
        if(flag_2) {
            this.style.top = '-15rem';  // string 上升
            this.addEventListener('transitionend', function() {
                if(flag_2) {
                    light.click();
                }
            })
        }
        else {
            this.style.top = '0rem';  // string 下降
            flag_3 = false;
            flag_4 = false;
            return 0;
        }
    })
    light.addEventListener('click', function() {
        if(flag_2) {
            this.style.top = '-3rem'; // light 下降
            flag_2 = false;
        } else {
            this.style.top = '-20rem'; // light 上升
            this.addEventListener('transitionend', function() {
                if(!flag_2) {
                    string.click();
                    flag_4 = true;
                }
            })
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
    for(var i = 0; i < all_icon_lis.length; i++) {
        all_icon_lis[i].addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#0e2337';
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
    nav_lis[0].addEventListener('click', function() {
        icon.click();
    })
    window.addEventListener('resize', function() {
        if(window.innerWidth < 750 || !flag) {
            dog.style.display = 'none';
            string.style.display = 'none';
            light.style.display = 'none';
        }
        else {
            dog.style.display = 'block';
            string.style.display = 'block';
            light.style.display = 'block';
        }
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
