
const nav2 = document.querySelector('.secondary-nav')
const screenSize = window.matchMedia('(min-width: 1024px)');

function clickFunction() {
    var para = document.getElementById('toggle-icon');
    para.classList.toggle('rotate-icon');
    if(nav2.style.display!='flex' ){
        nav2.style.display='flex'
    }else{
        nav2.style.display='none'
    }
}

function phone(screenSize) {
    if (screenSize.matches) {
        if(nav2.style.display=='flex'){
            clickFunction();
        }
    }
    else{
    }
}
phone(screenSize);
screenSize.addListener(phone);