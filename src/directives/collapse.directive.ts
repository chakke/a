import { Directive, ElementRef, Renderer, Input } from '@angular/core';
@Directive({ selector: '[collapse]' })
export class CollapseDirective {
    @Input() collapse: any;
    //Time transistion
    time = ".4s";
    //Button handle click function
    button: HTMLElement;
    //icon of button
    icon: HTMLElement;
    //class added when element is collapsed
    classCollapsed = "collapsed";
    //class of icon to switch
    iconClassToggle = ["fa-angle-up", "fa-angle-down"];
    //element height 
    collapsedHeight = "50px";
    //element
    element: any;
    constructor(el: ElementRef, renderer: Renderer) {
        this.element = el.nativeElement;
    }
    ngAfterViewInit() {
        if (this.collapse.time) this.time = this.collapse.time;
        if (this.collapse.button) this.button = this.collapse.button;
        if (this.collapse.icon) this.icon = this.collapse.icon;
        if (this.collapse.classCollapsed) this.classCollapsed = this.collapse.classToggle;
        if (this.collapse.buttonClassToggle) this.iconClassToggle = this.collapse.buttonClassToggle;
        if (this.collapse.collapsedHeight) this.collapsedHeight = this.collapse.collapsedHeight;

        this.element.style.transition = "height " + this.time;
        this.element.style.height = this.element.offsetHeight + "px";
        this.element.style.overflow = "hidden"; 

        let cloneElm = this.element.cloneNode(true);
        cloneElm.style.height = "auto";
        cloneElm.style.opacity = 0;
        cloneElm.style.position = "absolute";
        cloneElm.style.top = "0";
        cloneElm.style.left = "0";
        this.element.appendChild(cloneElm);
        let height = cloneElm.offsetHeight;
        this.element.removeChild(cloneElm);

        if (this.button) {
            this.button.addEventListener('click', () => {
                //Change icon class
                if (this.icon) {
                    for (let i = 0; i < this.iconClassToggle.length; i++) {
                        this.icon.classList.toggle(this.iconClassToggle[i]);
                    }
                }

                //Change element height
                this.element.classList.toggle(this.classCollapsed);
                if (this.element.classList.contains(this.classCollapsed)) {
                    this.element.style.height = this.collapsedHeight;
                } else {
                    this.element.style.height = height + "px";
                }

            })
        }

    }

}