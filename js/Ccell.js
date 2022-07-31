export class Cell{
    constructor()
    {
        this.x = 0;
        this.y = 0;
        this.w = 100;
        this.h = 100;
        this.value = 0;
        this.color = 0;
        this.ogX = 0;
        this.ogY = 0;

    }
    DrawCell(ctx)
    {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.font = '48px serif';
        ctx.fillStyle = 'white';
         ctx.fillText(this.value, (this.x + this.w  *1.1/3 ), (this.y + this.h * 2.01/3 ));
    }
}