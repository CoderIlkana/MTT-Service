// ------------open menu------------------

const secTwo = document.querySelector('.secTwo');
let isShowMenu = false;
const getMenu = e => {
  if (isShowMenu) {
    secTwo.attributes[0].value = "show"
    document.querySelector('body').style.overflow = 'hidden'; 
  }else {
     secTwo.attributes[0].value = "hide";
    document.querySelector('body').style.overflow = 'visible';
  }
}
getMenu()

const showMenu = (x)=>{
  x.classList.toggle("change");
  isShowMenu = !isShowMenu;
  getMenu()

}
