import { Component, OnInit, HostListener, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-scrolling',
  templateUrl: './scrolling.component.html',
  styleUrls: ['./scrolling.component.css']
})
export class ScrollingComponent implements OnInit {
  @Input() container: any;

  public isTop = true;
  public isHidden: boolean;

  @HostListener('window:scroll', ['$event'])
  handleScroll($event) {
    this.isTop = window.pageYOffset <= window.innerHeight / 3;
    this.isHidden = false;
    // console.log(`scrolled to ${this.isTop ? 'top' : 'bottom'}; \n isHidden: ${this.isHidden}`);
    // console.log(window.pageYOffset, $event);
  }

  constructor() { }

  ngOnInit(): void {
  }

  private scrollToBottom(): void {
    window.scroll({
      top: this.container.scrollHeight,
      left: 0,
      behavior: 'smooth'
    });

    this.isTop = false;
    this.isHidden = false;
    // console.log(`scrolled to bottom`);
  }

  private scrollToTop(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

    this.isTop = true;
    this.isHidden = true;
    // console.log(`scrolled to top; is hidden`);
  }

  public toggleScroll() {
    this.isTop ? this.scrollToBottom() : this.scrollToTop();
  }
}
