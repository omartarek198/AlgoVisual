import { Cell } from "./Ccell.js";


export class Algorithm  
{
    constructor()
    {
        this.name = "";
        this.cells = [];
        
    }
     disp() {
        console.log("This is base function")
    }
    MakeCell(x,y,w,h,val,c)
    {   
        var cell = new Cell();
        cell.x = x;
        cell.y = y;
        cell.w = w;
        cell.h = h;
        cell.value = val;
        cell.color = c;
        cell.ogX = x;
        cell.ogY = y;
        this.cells.push(cell);

    }
}

