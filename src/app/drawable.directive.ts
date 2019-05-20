import {
    Directive,
    HostListener,
    HostBinding,
    ElementRef,
    Output,
    EventEmitter,
    OnInit
  } from '@angular/core';
import { imag } from '@tensorflow/tfjs';
  
  @Directive({
    selector: '[drawable]'
  })
  export class DrawableDirective implements OnInit {
    pos = { x: 0, y: 0 };
    ctx: CanvasRenderingContext2D;
    ctx2: CanvasRenderingContext2D;
    canvas: HTMLCanvasElement;
    img:HTMLImageElement;

  
    @Output() newImage = new EventEmitter();
  
    constructor(private el: ElementRef) {}
  
    ngOnInit() {
      this.canvas = this.el.nativeElement as HTMLCanvasElement;
      this.ctx = this.canvas.getContext('2d');
      this.ctx2 = this.canvas.getContext('2d');
      
      
    }
    
    @HostListener('mouseup', ['$event'])
  onUp(e) {
    this.newImage.emit(this.getImgData());
  }
  
    getImgData(): ImageData {
    console.log("getImgData");
    console.log(this.canvas);
      this.ctx.drawImage(this.canvas,0,0, 140, 140);
     const frame = this.ctx.getImageData(0, 0, 140, 140);
     let l = frame.data.length / 4;

     for (let i = 0; i < l; i++) {
       let r = frame.data[i * 4 + 0];
       let g = frame.data[i * 4 + 1];
       let b = frame.data[i * 4 + 2];
       if (g > 100 && r > 100 && b < 43)
         frame.data[i * 4 + 3] = 0;
     }
     this.ctx2.putImageData(frame, 0, 0);
     console.log(frame);
     return;
    

    }

    
  }