import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  private _minutes: number = 0;
  private _secondes: number = 0;
  private _milliseconds: number = 0;
  private _totalSecondes: number = 0;
  private _timer;
 
  

  imagesList = [];


     toggle1 = true;
     toggle2 = true;
     toggle3 = true;
     toggle4 = true;
     toggle5 = true;
     toggle6 = true;
     toggle7 = true;
     toggle8 = true;

     showfirst=false;
     showfirst1=false;
     showfirst2=false;
     showfirst3=false;
     showfirst4=false;
     showfirst5=false;
     showfirst6=false;
     showfirst7=false;
     showfirst8=false;
     showfirst9=false;
     

    



chooseEmoNumber1(job) {
    this.toggle1 = !this.toggle1;
    this.toggle2 = true;
    this.toggle3 = true;
    this.toggle4 = true;
    this.toggle5 = true;
    if (!this.toggle6 || !this.toggle7)
    {
    this.toggle8 = false;
  }
  
}
chooseEmoNumber2(job) {
    this.toggle2 = !this.toggle2;
    this.toggle1 = true;
    this.toggle3 = true;
    this.toggle4 = true;
    this.toggle5 = true;
    if (!this.toggle6 || !this.toggle7)
    {
    this.toggle8 = false;
  }

  }
  chooseEmoNumber3(job) {
    this.toggle3 = !this.toggle3;
    this.toggle1 = true;
    this.toggle2 = true;
    this.toggle4 = true;
    this.toggle5 = true;
    if (!this.toggle6 || !this.toggle7)
    {
    this.toggle8 = false;
  }
    
  }
  chooseEmoNumber4(job) {
    this.toggle4 = !this.toggle4;
    this.toggle1 = true;
    this.toggle3 = true;
    this.toggle2 = true;
    this.toggle5 = true;
    if (!this.toggle6 || !this.toggle7)
    {
    this.toggle8 = false;
  }
    
  }
  chooseEmoNumber5(job) {
    this.toggle5 = !this.toggle5;
    this.toggle1 = true;
    this.toggle3 = true;
    this.toggle4 = true;
    this.toggle2 = true;
    if (!this.toggle6 || !this.toggle7)
    {
    this.toggle8 = false;
  }
    
  }

  choosePlayer1(job) {
    this.toggle6 = !this.toggle6;
    this.toggle7 = true;
    this.showfirst5=true;
    this.showfirst6=false;
    if (!this.toggle1 || !this.toggle2 || !this.toggle3 || !this.toggle4 || !this.toggle5)
    {
    this.toggle8 = false;
  }
    
  }

  choosePlayer2(job) {
    this.toggle7 = !this.toggle7;
    this.toggle6 = true;
    
    this.showfirst5=true;
    this.showfirst6=true;
    if (!this.toggle1 || !this.toggle2 || !this.toggle3 || !this.toggle4 || !this.toggle5)
    {
    this.toggle8 = false;
  }
    
  }

  start()
  {
    




    this.toggle8 = true;
    this.showfirst7=true;

    if (!this.toggle7)
    {
    this.showfirst8=true;
    this.showfirst9=true;
  }
  else
  {
    this.showfirst8=true;
    this.showfirst9=false;
  }
  
if ( !this.toggle1)
{
 
  for (let i = 0; i < 1; i++) {
    let j = Math.floor(Math.random() * 8) + 1 
    const url = 'assets/images/' + (j)+ '.png';
    this.imagesList[i] = {
      url: url,
      show: false
    }
}
}
if (!this.toggle2)
{
  for (let i = 0; i < 3; i++) {
    let j = Math.floor(Math.random() * 8) + 1 
    const url = 'assets/images/' + (j +1)+ '.png';
    this.imagesList[i] = {
      url: url,
      show: false
  }
}
    
}

if (!this.toggle3)
{
  let i= this.imagesList[Math.floor(Math.random()*DataTransferItemList.length)]
  for ( i = 0; i < 5; i++) {
    let j = Math.floor(Math.random() * 8) + 1 
    const url = 'assets/images/' + (j +1)+ '.png';
    this.imagesList[i] = {
      url: url,
      show: false
  }
}
}
if (!this.toggle4)
{
  let i= this.imagesList[Math.floor(Math.random()*DataTransferItemList.length)]
  for ( i = 0; i <7; i++) {
    let j = Math.floor(Math.random() * 8) + 1 
    const url = 'assets/images/' + (j +1)+ '.png';
    this.imagesList[i] = {
      url: url,
      show: false
  }
}
}
if (!this.toggle5)
{
  let i= this.imagesList[Math.floor(Math.random()*DataTransferItemList.length)]
  for ( i = 0; i < 9; i++) {
    let j = Math.floor(Math.random() * 8) + 1 
    const url = 'assets/images/' + (j +1)+ '.png';
    this.imagesList[i] = {
      url: url,
      show: false
  }
}
}

    this._timer = setInterval(() => {
      this._minutes = Math.floor(++this._totalSecondes / 60);
      this._secondes = (this._totalSecondes - this._minutes * 60) ;
       
      
    }, 1000);
    


    
    }

    stop() {
      clearInterval(this._timer);
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

   /*  public capture() {
        var context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 640, 480);
        this.captures.push(this.canvas.nativeElement.toDataURL("image/png"));
    } */

}
