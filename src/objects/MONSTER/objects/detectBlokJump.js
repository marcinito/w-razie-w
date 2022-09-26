export class detectBlokJump{
    constructor(){
        this.posX=0
        this.posY=0
        this.size=20
        this.canJump=true
        this.color="blue"
    }
    draw(can){
        can.ctx.fillStyle=this.color
        can.ctx.fillRect(this.posX,this.posY,this.size,this.size)

    }
    canMonsterJump(title){
this.canJump=true

        if(this.posX+this.size<title.posX || this.posX>title.posX+title.size ||
            this.posY+this.size<title.posY || this.posY>title.posY+title.size){
   
            }
            else{
                this.canJump=false
                

            }

    }
}