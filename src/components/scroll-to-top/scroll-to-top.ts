import { Component, Input } from '@angular/core';

@Component({
  selector: 'scroll-to-top',
  templateUrl: 'scroll-to-top.html'
})
export class ScrollToTopComponent {
  @Input()
  query: any;
  scrollElm: any;
  fps = 20;
  animationFrame: any;
  constructor() {
  }
  ngAfterViewInit() {
    if (this.query) {
      this.scrollElm = document.querySelector(this.query);
    }
  }
  backToTop() {
    if (this.scrollElm) {
      this.scrollToTop(this.scrollElm, 0, this.fps);
    }
  }

  scrollToTop(element: HTMLElement, scrollTop, frameRemain: number) {
    let nowScrollTop = element.scrollTop;
    let deltaDistance = nowScrollTop / frameRemain //in px;
    if (this.animationFrame) cancelAnimationFrame(this.animationFrame);
    if (Math.abs(nowScrollTop - scrollTop) <= deltaDistance) {
      element.scrollTop = scrollTop;
      return;
    }
    if (deltaDistance * this.fps < Math.abs(nowScrollTop - scrollTop)) deltaDistance = Math.round(Math.abs(nowScrollTop - scrollTop) / this.fps);
    let signal = Math.abs(nowScrollTop - scrollTop) / (scrollTop - nowScrollTop);//-1 or 1;
    this.animationFrame = requestAnimationFrame(() => {
      element.scrollTop = nowScrollTop + signal * deltaDistance;
      this.scrollToTop(element, scrollTop, frameRemain - 1);
    })
  }

}
