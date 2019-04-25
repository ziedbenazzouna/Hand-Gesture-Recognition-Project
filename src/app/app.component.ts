import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {


     toggle1 = true;
     toggle2 = true;
     toggle3 = true;
     toggle4 = true;
     toggle5 = true;
     toggle6 = true;
     toggle7 = true;

     showfirst=false;
     showfirst1=false;
     showfirst2=false;
     showfirst3=false;
     showfirst4=false;
     showfirst5=false;
     showfirst6=false;
     

    



chooseEmoNumber1(job) {
    this.toggle1 = !this.toggle1;
    this.toggle2 = true;
    this.toggle3 = true;
    this.toggle4 = true;
    this.toggle5 = true;
    this.showfirst=true;
    this.showfirst1=false;
    this.showfirst2=false;
    this.showfirst3=false;
    this.showfirst4=false;
  
}
chooseEmoNumber2(job) {
    this.toggle2 = !this.toggle2;
    this.toggle1 = true;
    this.toggle3 = true;
    this.toggle4 = true;
    this.toggle5 = true;
    this.showfirst=true;
    this.showfirst1=true;
    this.showfirst2=false;
    this.showfirst3=false;
    this.showfirst4=false;
    
  }
  chooseEmoNumber3(job) {
    this.toggle3 = !this.toggle3;
    this.toggle1 = true;
    this.toggle2 = true;
    this.toggle4 = true;
    this.toggle5 = true;
    this.showfirst=true;
    this.showfirst1=true;
    this.showfirst2=true;
    this.showfirst3=false;
    this.showfirst4=false;
    
  }
  chooseEmoNumber4(job) {
    this.toggle4 = !this.toggle4;
    this.toggle1 = true;
    this.toggle3 = true;
    this.toggle2 = true;
    this.toggle5 = true;
    this.showfirst=true;
    this.showfirst1=true;
    this.showfirst2=true;
    this.showfirst3=true;
    this.showfirst4=false;
    
  }
  chooseEmoNumber5(job) {
    this.toggle5 = !this.toggle5;
    this.toggle1 = true;
    this.toggle3 = true;
    this.toggle4 = true;
    this.toggle2 = true;
    this.showfirst=true;
    this.showfirst1=true;
    this.showfirst2=true;
    this.showfirst3=true;
    this.showfirst4=true;
    
  }

  choosePlayer1(job) {
    this.toggle6 = !this.toggle6;
    this.toggle7 = true;
    this.showfirst5=true;
    this.showfirst6=false;
    
  }

  choosePlayer2(job) {
    this.toggle7 = !this.toggle7;
    this.toggle6 = true;
    
    this.showfirst5=true;
    this.showfirst6=true;
    
  }

  
    
    @ViewChild("video")
    public video: ElementRef;

    @ViewChild("canvas")
    public canvas: ElementRef;

    public captures: Array<any>;

    public constructor() {
        this.captures = [];
    }

    public ngOnInit() { 
        
    }

    

    public ngAfterViewInit() {
        if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
                this.video.nativeElement.srcObject = stream;
                this.video.nativeElement.play();
            });
        }
    }

    public capture() {
        var context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 640, 480);
        this.captures.push(this.canvas.nativeElement.toDataURL("image/png"));
    }

}
