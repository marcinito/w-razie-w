import goldenCoinImg from './goldenCoin.png'
const coin=new Image(100,100)
coin.src=goldenCoinImg
let moveCoin=0
setInterval(()=>{
if(moveCoin==4){
    moveCoin=0
}
moveCoin++

},300)

export class goldenCoin{
    constructor(posX,posY,size,isDrop,direction){

        this.posX=posX+10
        this.posY=posY+10
        this.size=size-20
        this.image=coin
        this.layOnMap=true
        this.name="goldenCoin"
           //When this item is drop from backpack on map
           this.isDrop=isDrop
           this.direction=direction
           this.speedX=1
           this.strenghtGravity=1
        
       
        
    }
    draw(can){
        // can.ctx.strokeRect(this.posX,this.posY,this.size,this.size)
        if(moveCoin===1){
            
            can.ctx.drawImage(this.image,0,0,167,158,this.posX,this.posY,this.size,this.size)
        }
        if(moveCoin===2){
            can.ctx.drawImage(this.image,167,0,148,158,this.posX,this.posY,this.size,this.size)
        }
        if(moveCoin===3){
            can.ctx.drawImage(this.image,318,0,107,158,this.posX,this.posY,this.size,this.size)
           
        }
        if(moveCoin===4){
          
            can.ctx.drawImage(this.image,425,0,75,158,this.posX,this.posY,this.size,this.size)
        }
        if(this.isDrop===true){

            if(this.direction==="left"){
                    
                    this.posX-=this.speedX
            }
            if(this.direction==="right"){
                    this.posX+=this.speedX
            }
                
                
            }
           
       
      
    }
}