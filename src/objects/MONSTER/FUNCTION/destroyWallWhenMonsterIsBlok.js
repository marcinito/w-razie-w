export const destroWallWhenMonsterIsBlok=(creature,title)=>{
      //new funtion

      title.isVulnerable.forEach((el,i,arr)=>{
        if(el===creature._ID){
            title.isHitBy="monster"
            title.hp-=creature.hitInWallStrenght
            
         
        }

       })

      let check= title.isVulnerable.includes(creature._ID)
              
      if(check===false){
          title.isVulnerable.push(creature._ID)
     
          setTimeout(()=>{
              title.isVulnerable.forEach((el,i,arr)=>{
                      if(el===creature._ID){
                          arr.splice(i,1)
                      
                          
                      }
              })
       
          },4000)
      }
 
     
}