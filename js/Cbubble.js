import { Algorithm } from "./Calgo.js";

export class Bubble extends Algorithm {
  constructor(ctx) {
    super();

    console.log("HERE");
    this.name = "BubbleSort";
    this.values = [5, 4, 7, 3, 8, 9];
      this.ctx = ctx;
      this.ySpeed = 0.0005;
      this.xSpeed = 0.0001;
  }
  disp() {
    console.log("This is bubble");
  }
  bblSort() {}
  MakeCells() {
    var firstX = (window.innerWidth * 1) / 10;
    var firstY = (window.innerHeight * 1.3) / 3;
    var step = 140;
    for (var i = 0; i < this.values.length; i++) {
      this.MakeCell(firstX + step, firstY, 100, 100, this.values[i], "#964EC2");
      firstX += step;
    }
  }

  DrawCells() {
    for (var i = 0; i < this.cells.length; i++) {
      this.cells[i].DrawCell(this.ctx);
    }
  }

  swap(j, k, ctx) {
    //your code to be executed after 1 second

    if (Math.abs(this.cells[j].ogY - this.cells[j].y) <= 1000) {
      this.cells[j].y--;
      return true;
    } else {
      return false;
    }

    return true;
  }

  StartAlg() {
    //set the mood
    this.MakeCells();
    setTimeout(this.drawScene, 500);
  }
  DrawScene() {
    this.MakeCells();

    this.DrawCells();
  }

  Animate() {
    this.DrawCells();

    this.drawScene();
    console.log(this.values);
    for (var i = 0; i < this.cells.length; i++) {
      // Last i elements are already in place
      for (var j = 0; j < this.cells.length - i - 1; j++) {
        // Checking if the item at present iteration
        // is greater than the next iteration
        if (this.cells[j].value > this.cells[j + 1].value) {
          // If the condition is true then swap them
          while (this.swap(j, j + 1, this.ctx)) {
            this.drawScene();
            console.log("d");
          }
          var temp = this.cells[j].value;
          this.cells[j].value = this.cells[j + 1].value;
          this.cells[j + 1].value = temp;
        }
      }
    }
  }
    RunAlgorithm()
    {
        for (var i = 0; i < this.cells.length; i++)
        {
            this.cells[0].y -= this.ySpeed;    
        }
    }
}
