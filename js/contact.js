var icon = document.querySelector('.icon');
var menu = document.querySelector('.menu');
var menu_inner = document.querySelector('.menu-inner');
var nav = document.querySelector('.nav');
var form = document.querySelector('form');
var all_icon =document.querySelector('.all-icon');
var all_icon_lis = all_icon.querySelectorAll('li');
var a = menu_inner.querySelectorAll('a');
var contact = document.querySelector('.contact');
var body = document.querySelector('body');
var sender_content_textarea = document.querySelector('.sender-content-textarea');
var talk = document.querySelector('.talk');
var flag = true;
var temp;
window.addEventListener('load', function () {
    icon.addEventListener('click', function() {
        if (flag) {
            this.style.transform = 'rotate(180deg)';
            this.innerHTML = '';
            menu.style.width = '100%';
            menu.style.height = '100%';
            menu.style.top = 0 + 'px';
            menu.style.left = 0 + 'px';
            menu.style.cursor = 'pointer';
            contact.style.display = 'none';
            body.style.backgroundColor = 'transparent';
            menu_inner.style.display = 'block';
            all_icon.style.display = 'block';
            talk.style.display = 'none';
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
            body.style.backgroundColor = '#fdcc34';
            menu.style.width = 0;
            menu.style.height = 0;
            menu.style.top = '2.5rem';
            menu.style.left = '2.5rem';
            menu_inner.style.width = '20%';
            menu_inner.style.display = 'none';
            if(window.innerWidth > 749) {
                contact.style.display = 'block';
            }
            if(window.innerWidth > 1000) {
                talk.style.display = 'none';
            }
            nav.style.display = 'block';
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
    for(var i = 0; i < all_icon_lis.length; i++) {
        all_icon_lis[i].addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#322b38';
            this.children[0].children[0].style.color = '#fff'; 
        })
        all_icon_lis[i].addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
            this.children[0].children[0].style.color = '#000';
        })
    }
    sender_content_textarea.children[1].children[0].addEventListener('mouseenter', function() {
        this.parentNode.style.backgroundColor = '#fdcc34';
        this.style.color = '#322b38';
    })
    sender_content_textarea.children[1].children[0].addEventListener('mouseleave', function() {

        this.parentNode.style.backgroundColor = '#322b38';
        this.style.color = '#fff';
    })
    var textarea_lis = document.querySelectorAll('textarea');
    for(var i = 0; i < textarea_lis.length; i++) {
        textarea_lis[i].addEventListener('focus', function() {
            this.classList.add('textarea_border');
        });
        textarea_lis[i].addEventListener('blur', function() {
            this.classList.remove('textarea_border');
            this.style.borderColor = 'transparent';
        })
    }
    window.addEventListener('resize', function() {
        if(window.innerWidth < 750 || !flag) {
            contact.style.display = 'none';
        }
        else {
            contact.style.display = 'block';
        }
        if(window.innerWidth < 1000 || !flag) {
            talk.style.display = 'none';
        }
        else {
            talk.style.display = 'block';
        }
    })
    var nav_lis = nav.querySelectorAll('li');
    for(var i = 0; i < nav_lis.length; i++) {
        nav_lis[i].addEventListener('touchstart', function() {
            this.children[0].style.transform = 'rotateX(90deg)';
        })
        nav_lis[i].addEventListener('touchend', function() {
            this.children[0].style.transform = 'rotateX(0deg)';
        })
    }
    nav_lis[2].addEventListener('click', function() {
        icon.click();
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



