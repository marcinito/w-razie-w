import { monsterOnFirstLevel } from "../LEVEL/FIRST LEVEL/monsterOnFirstLevel"
import { firstLevelArrangementWall } from "../LEVEL/FIRST LEVEL/firstLevelArrangementWall"
import { secondLevelArrangementWall } from "../LEVEL/secondLevel/secondLevelArrangementWall"
import { monsterInSecondLevel } from "../LEVEL/secondLevel/monsterInSecondLevel"
export class menuObject{
    constructor(){
        this.playGame="menu"
        this.active="firstLevel"
        this.click=0
        this.level=0
        this.numberOfMonster=0
        this.navigation="home"
    }
}