import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DrawableDirective } from './drawable.directive';
import * as tf from '@tensorflow/tfjs';
import { image } from '@tensorflow/tfjs';



@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  model : tf.Model;
  predictions : any;
  predictedNumber: string;

 /*  private _minutes: number = 0;
  private _secondes: number = 0;
  private _milliseconds: number = 0;
  private _totalSecondes: number = 0;
  private _timer; */

     timeBegan = null
     timeStopped = null
     stoppedDuration = 0
     started = null;

  image : any;
 


  imagesList = [];
  imagesList1 = [];
  array1=[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  array2=[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  array3=[0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]
  array4=[0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]
  array5=[0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]
  array6=[0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0]
  array7=[0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0]
  array8=[0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0]
  array9=[0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0]
  array10=[0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0]
  array11=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]

  array111=[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  array12=[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  array13=[0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]
  array14=[0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]
  array15=[0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]
  array16=[0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0]
  array17=[0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0]
  array18=[0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0]
  array19=[0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0]
  array20=[0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0]
  array21=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]


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

     showfirst10=true;
     showfirst11=true;
     showfirst12=true;
     showfirst13=true;
     showfirst14=true;
     showfirst15=true;
     showfirst16=true;
     showfirst17=true;
     showfirst18=true;
     showfirst19=true;


     showfirst20=false;
     showfirst21=false;
     showfirst22=false;
     showfirst23=false;
     showfirst24=false;
     showfirst25=false;
     showfirst26=false;
     showfirst27=false;
     showfirst28=false;
     showfirst29=false;
     showfirst30=false;

     showfirst31=false;
     showfirst32=false;
     showfirst33=false;
     showfirst34=false;
     showfirst35=false;
     showfirst36=false;
     showfirst37=false;
     showfirst38=false;
     showfirst39=false;
     showfirst40=false;
     showfirst41=false;


     showleft=false;
     showright=false;
     showleft1=false;
     showright1=false;


     show=true;
     score1=0;
     score2=0;

   
     
     start2() {
      if (this.timeBegan === null) {
          this.timeBegan = new Date();
      }
      console.log(this.timeBegan);
      if (this.timeStopped !== null) {
          this.stoppedDuration += (<any>new Date() - this.timeStopped);
      }
      console.log(this.stoppedDuration);
  
      this.started = setInterval(this.clockRunning, 10);	

      console.log(this.started);
  }


   stop() {
    this.timeStopped = new Date();
    clearInterval(this.started);
}


  clockRunning(){
    
    
    let currentTime = new Date()
    /* , timeElapsed = new Date(<any>currentTime - this.timeBegan - this.stoppedDuration) */
        , timeElapsed = new Date(<any>currentTime )
        
        , min = timeElapsed.getUTCMinutes() 
        , sec = timeElapsed.getUTCSeconds() 
        , ms = timeElapsed.getUTCMilliseconds();
        console.log(currentTime);
       
        console.log(timeElapsed);
    document.getElementById("display-area").innerHTML = 
      
        (min > 9 ? min : "0" + min) + ":" + 
        (sec > 9 ? sec : "0" + sec) + "." + 
        (ms > 99 ? ms : ms > 9 ? "0" + ms : "00" + ms);
};
    



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
    /* this.showfirst5=true;
    this.showfirst6=false; */
    if (!this.toggle1 || !this.toggle2 || !this.toggle3 || !this.toggle4 || !this.toggle5)
    {
    this.toggle8 = false;
  }
    
  }

  choosePlayer2(job) {
    this.toggle7 = !this.toggle7;
    this.toggle6 = true;
    
    /* this.showfirst5=true;
    this.showfirst6=true; */
    if (!this.toggle1 || !this.toggle2 || !this.toggle3 || !this.toggle4 || !this.toggle5)
    {
    this.toggle8 = false;
  }
    
  }

  start(imageData: ImageData)
  {
    console.log("start:",imageData)

    this.start2();
    
    this.showfirst10=false;
    this.showfirst11=false;
    this.showfirst12=false;
    this.showfirst13=false;
    this.showfirst14=false;
    this.showfirst15=false;
    this.showfirst16=false;
    this.showfirst17=false;
    this.showfirst18=false;
    this.showfirst19=false;

    if (this.toggle7==true )
    {
    this.showfirst5=true;
    this.showfirst6=false; 
  }
  else if ( this.toggle6==true)
  {
    this.showfirst5=true;
    this.showfirst6=true; 
  }

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

  for ( let i = 0; i <3; i++) {
    setTimeout(()=>{
    const url = 'assets/images/' + (10+i)+ '.png';
    this.imagesList1[i] = {
      url: url,
      show: false
  }
},(i+1)*2000);

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

   /*  this._timer = setInterval(() => {
      this._minutes = Math.floor(++this._totalSecondes / 60);
      this._secondes = (this._totalSecondes - this._minutes * 60) ;
       this._milliseconds = this._secondes *1000;
      
    }, 1000);
    this._timer = setInterval(() => {
      
       this._milliseconds ;
      
    }, 1); */
       
    this.predict(imageData)
    this.predict2(imageData)
    }



    
    /* stop() {
      clearInterval(this._timer);
    } */

    @ViewChild(DrawableDirective) canvas;
    
    @ViewChild("video")
    public video: ElementRef;

    

    public captures: Array<any>;

    public constructor() {
        this.captures = [];
    }

    public ngOnInit() { 
      console.log("init")
        this.loadModel();    
    }

   async loadModel() {
    console.log("1")
    this.model = await tf.loadModel('./assets/model.json');     
     console.log("2")
    }

    

    public async predict(imageData: ImageData) {
      
     
        console.log(imageData)
        console.log("debut")

        const pred = await tf.tidy(()=>{
          
        let img = tf.fromPixels(imageData,3);
        console.log(img);
        img = tf.reverse(img, -1)
        console.log("reverse",img)
        img = img.reshape([1,140,140,3]); 
        console.log("reshape")
        img = tf.cast(img, 'float32');


        console.log("cast")
        console.log(img);
        const output = this.model.predict(img) as any;
        console.log(output)
        // Save predictions on the component 
        this.predictions = Array.from(output.dataSync());
        console.log(this.predictions)
    
        while (this.show)
        {
         if (this.arraysEqual(this.array1,this.predictions))
        {      
         
          this.showright=false;
          this.showleft=true;
          this.showfirst20=true;
          this.show=false;
          
        }
        
        else if (this.arraysEqual(this.array2,this.predictions))
        {
         
          this.showright=false;
          this.showleft=true;
          this.showfirst21=true;
          this.show=false;
        }
        else  if (this.arraysEqual(this.array3,this.predictions))
        {
          this.showright=false;
          this.showleft=true;      
          this.showfirst22=true;
          this.show=false;
        }
        else if (this.arraysEqual(this.array4,this.predictions))
        {
          
          this.showright=false;
          this.showleft=true;
         
          this.showfirst23=true;
          
          this.show=false;
        }
        else if (this.arraysEqual(this.array5,this.predictions))
        {
          this.showright=false;
          this.showleft=true;
          this.showfirst24=true;
          this.show=false;
        }
        else if (this.arraysEqual(this.array6,this.predictions))
        {
         
          this.showright=false;
          this.showleft=true;
          this.showfirst25=true;
          this.show=false;
        }
        else if (this.arraysEqual(this.array7,this.predictions))
        {
          
          this.showright=false;
          this.showleft=true;
          this.showfirst26=true;
          this.show=false;
        }
        else if (this.arraysEqual(this.array8,this.predictions))
        {
          this.showright=false;
          this.showleft=true;
          this.showfirst27=true;
          this.show=false;
        }
        else if (this.arraysEqual(this.array9,this.predictions))
        {
          this.showright=false;
          this.showleft=true;
          this.showfirst28=true;
          this.show=false;
        }
        else if (this.arraysEqual(this.array10,this.predictions))
        {
          this.showright=false;
          this.showleft=true;
          this.showfirst29=true;
          this.show=false;
        }
      
        else if (this.arraysEqual(this.array11,this.predictions))
        {
          this.showright=false;
          this.showleft=true;
          this.showfirst30=true;
          this.show=false;
        }
      }
           this.score1+=1;
      
})
      console.log("fin")
    }
   public async predict2(imageData: ImageData) {
      
     
      console.log(imageData)
        console.log("debut predict2")

        const pred = await tf.tidy(()=>{
          
        let img = tf.fromPixels(imageData,3);
        console.log(img);
        img = tf.reverse(img, -1)
        console.log("reverse",img)
        img = img.reshape([1,140,140,3]); 
        console.log("reshape")
        img = tf.cast(img, 'float32');
        console.log("cast")
        console.log(img);
        const output = this.model.predict(img) as any;
        console.log(output)
        // Save predictions on the component 
        this.predictions = Array.from(output.dataSync());
        console.log(this.predictions)
    
        

   this.show=true;
      while (this.show)
        { 
        if (this.arraysEqual(this.array111,this.predictions))
        {    
          
          this.showright1=true;
          this.showleft1=false;
          this.showfirst31=true;
          this.show=false;
          
        }
        else if (this.arraysEqual(this.array12,this.predictions))
        {
          this.showright1=true;
          this.showleft1=false;
          this.showfirst32=true;
          this.show=false;
        }
        else if (this.arraysEqual(this.array13,this.predictions))
        {
          this.showright1=true;
          this.showleft1=false;
          this.showfirst33=true;
          this.show=false;
        }
        else if (this.arraysEqual(this.array14,this.predictions))
        {
          
          this.showright1=true;
          this.showleft1=false;
          this.showfirst34=true;
          this.show=false;
        }
        else if (this.arraysEqual(this.array15,this.predictions))
        {
          this.showright1=true;
          this.showleft1=false;
          this.showfirst35=true;
          this.show=false;
        }
        else if (this.arraysEqual(this.array16,this.predictions))
        {
          this.showright1=true;
          this.showleft1=false;
          this.showfirst36=true;
          this.show=false;
        }
        else if (this.arraysEqual(this.array17,this.predictions))
        {
          
          this.showright1=true;
          this.showleft1=false;
          this.showfirst37=true;
          this.show=false;
        }
        else if (this.arraysEqual(this.array18,this.predictions))
        {
          this.showright1=true;
          this.showleft1=false;
          this.showfirst38=true;
          this.show=false;
        }
        else if (this.arraysEqual(this.array19,this.predictions))
        {
          this.showright1=true;
          this.showleft1=false;
          this.showfirst39=true;
          this.show=false;
        }
        else if (this.arraysEqual(this.array20,this.predictions))
        {
          this.showright1=true;
          this.showleft1=false;
          this.showfirst40=true;
          this.show=false;
        }
      
        else if (this.arraysEqual(this.array21,this.predictions))
        {
          this.showright1=true;
          this.showleft1=false;
          this.showfirst41=true;
          this.show=false;
        }

      }
      this.score2+=1;
      
})
      console.log("fin")
    }
    

    public ngAfterViewInit() {
        if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
                this.video.nativeElement.srcObject = stream;
                this.video.nativeElement.play();
            });
        }
    }

    public arraysEqual(a, b) {
      if (a === b) return true;
      if (a == null || b == null) return false;
      if (a.length != b.length) return false;
    
      // If you don't care about the order of the elements inside
      // the array, you should sort both arrays here.
      // Please note that calling sort on an array will modify that array.
      // you might want to clone your array first.
    
      for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
      
      }
      return true;
    }
    
   
}
