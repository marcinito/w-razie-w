import { random } from '../../Functions/shorthandFunction/random'
import { can, menu } from '../../main'
import chmuraImg from '../../stylesImage/chmury.png'
// import bgc2level from '../../stylesImage/smok2.png'
import bgc2level from '../../stylesImage/2lvl.png'
import bgc1level from '../../stylesImage/1lvl.png'
import bgc4level from '../../stylesImage/4lvl.png'
import bgc5level from '../../stylesImage/lastLevel.png'

export class Cloud{
    constructor(posX=can.C_W+Math.floor(Math.random()*300),posY){
        this.size=Math.floor(Math.random()*60+70)
        this.posX=posX
        this.posY=Math.floor(Math.random()*can.C_H/100)
      
        this.speed=random([0.5,0.9,1,1.25,1.5])
        this.outfit=Math.floor(Math.random()*5)
    }
    draw(can){
        
        if(this.outfit===1)can.ctx.drawImage(chmura,15,0,108,144,this.posX,this.posY,this.size,this.size)
        if(this.outfit===2)can.ctx.drawImage(chmura,431,154,149,92,this.posX,this.posY+100,this.size,this.size)
        if(this.outfit===3)can.ctx.drawImage(chmura,8,283,135,85,this.posX,this.posY+200,this.size,this.size)
        if(this.outfit===4) can.ctx.drawImage(chmura,440,18,135,109,this.posX-200,this.posY+100,this.size,this.size)
        if(this.outfit===5)can.ctx.drawImage(chmura,133,12,140,95,this.posX-300,this.posY+100,this.size,this.size)
        this.posX-=this.speed
    }
}

const chmura=new Image(100,100)
chmura.src=chmuraImg
export class background{
    constructor(){
       
      this.arrayCloud=[new Cloud(500),new Cloud(800)]
    }
    makebackground(can){
        //FIRST LEVEL
       
        if(menu.level===1){
//   can.canvas.style.backgroundColor="skyblue"
can.canvas.style.backgroundImage=`url(${bgc1level})`
can.canvas.style.backgroundSize=`cover`
can.canvas.style.backgroundRepeat=`no-repeat`
        if(this.arrayCloud.length<7){
          
                this.arrayCloud.push(new Cloud())
        
        }
        this.arrayCloud.forEach((cloud,index,arr)=>{
            cloud.draw(can)
            if(cloud.posX+cloud.size<0)arr.splice(index,1)
        })
    }
    //SECOND LEVEL
    if(menu.level===2){
        can.canvas.style.backgroundImage=`url(${bgc2level})`
        can.canvas.style.backgroundSize=`cover`
        can.canvas.style.backgroundRepeat=`no-repeat`
        if(this.arrayCloud.length<5){
            this.arrayCloud.push(new Cloud())
        }
        this.arrayCloud.forEach((cloud,index,arr)=>{
            cloud.draw(can)
            if(cloud.posX+cloud.size<0)arr.splice(index,1)
            
        })
       
    }
    if(menu.level===3){
        can.canvas.style.backgroundImage=`url(${bgc2level})`
        can.canvas.style.backgroundSize=`cover`
        can.canvas.style.backgroundRepeat=`no-repeat`
        if(this.arrayCloud.length<8){
            this.arrayCloud.push(new Cloud())
        }
        this.arrayCloud.forEach((cloud,index,arr)=>{
            cloud.draw(can)
            if(cloud.posX+cloud.size<0)arr.splice(index,1)
        })
       
    }
    if(menu.level===4){
        can.canvas.style.backgroundImage=`url(${bgc4level})`
        can.canvas.style.backgroundSize=`cover`
        can.canvas.style.backgroundRepeat=`no-repeat`
        if(this.arrayCloud.length<7){
            this.arrayCloud.push(new Cloud())
        }
        this.arrayCloud.forEach((cloud,index,arr)=>{
            cloud.draw(can)
            if(cloud.posX<-this.size)arr.splice(index,1)
        })
       
    }
    if(menu.level>4){
        can.canvas.style.backgroundImage=`url(${bgc5level})`
        can.canvas.style.backgroundSize=`cover`
        can.canvas.style.backgroundRepeat=`no-repeat`
        if(this.arrayCloud.length<3){
            this.arrayCloud.push(new Cloud())
        }
        this.arrayCloud.forEach((cloud,index,arr)=>{
            cloud.draw(can)
            if(cloud.posX<-this.size)arr.splice(index,1)
        })
       
    }
    }
}