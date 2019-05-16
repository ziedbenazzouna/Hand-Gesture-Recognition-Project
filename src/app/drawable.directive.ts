import {
    Directive,
    HostListener,
    HostBinding,
    ElementRef,
    Output,
    EventEmitter,
    OnInit
  } from '@angular/core';
  
  @Directive({
    selector: '[drawable]'
  })
  export class DrawableDirective implements OnInit {
    pos = { x: 0, y: 0 };
    ctx: CanvasRenderingContext2D;
    canvas: HTMLCanvasElement;
  
    @Output() newImage = new EventEmitter();
  
    constructor(private el: ElementRef) {}
  
    ngOnInit() {
      this.canvas = this.el.nativeElement as HTMLCanvasElement;
      this.ctx = this.canvas.getContext('2d');
    }
  
    @HostListener('mouseup', ['$event'])
  onUp(e) {
    this.newImage.emit(this.getImgData());
  }
  
    getImgData(): ImageData {
        console.log("getImgData");
      const scaled = this.ctx.drawImage(this.canvas, 0, 0, 140, 140);
      return this.ctx.getImageData(0, 0, 140, 140);
    }
  }