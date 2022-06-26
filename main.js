// MENU RESPONSIVO PARA MOBILE
class MenuMobile {
    constructor(openMenu, menu, menuLinks) {
        this.openMenu = document.querySelector(openMenu)
        this.menu = document.querySelector(menu)
        this.menuLinks = document.querySelectorAll(menuLinks)
        this.activeClass = 'active'

        this.handleClick = this.handleClick.bind(this)
    }

    animateLinks() {
        this.menuLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = '')
                : (link.style.animation = `menuLinkFade 0.5s ease forwards ${
                      index / 7 + 0.3
                  }s`)
        })
    }

    handleClick() {
        this.menu.classList.toggle(this.activeClass)
        this.animateLinks()
    }

    addClickEvent() {
        this.openMenu.addEventListener('click', this.handleClick)
    }

    init() {
        if (this.openMenu) {
            this.addClickEvent()
        }
        return this
    }
}
const menu = new MenuMobile('.open-menu', '.menu', '.menu li')

menu.init()
