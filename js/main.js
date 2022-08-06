
import { Bubble } from "./Cbubble.js";
import { Quick } from "./Cquick.js";

const menu = document.getElementById('menu')
const button = document.getElementById('startBtn')

const screen = document.getElementById('canvas');
screen.width = window.innerWidth * 9.8 /10;
screen.height = window.innerHeight * 9.4/10;
const ctx = screen.getContext('2d')

var SelectedIndex = -1;

button.onclick = function () {
    var e = document.getElementById("menu").value;
    console.log(e);
    SelectedIndex = e;
    Visualize();

};
 
 
var algorithms = [];

function AddAlgosToCombo()
{
    for (var i = 0; i < algorithms.length; i++)
    {
        var orange = document.createElement('option');
        orange.text = algorithms[i].name;
        orange.value = i;
        menu.add(orange)
    }
}
function SetAlgorithms()
{
    var alg = new Bubble(ctx);
    algorithms.push(alg)
  


    alg = new Quick();
    algorithms.push(alg);
 
    //Creates an array of Algorithms

 
}

  function clear() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  }
function Visualize()
{
    for (var i = 0; i < algorithms.length; i++)
    {
        if (i == SelectedIndex) {
          // algorithm is running
          console.log("vusya");
          clear();
          algorithms[i].RunAlgorithm(); // changes stuff

          algorithms[i].DrawScene(); // draws stuff
        }    
    }

    requestAnimationFrame(Visualize);

}


 

SetAlgorithms();
AddAlgosToCombo();
requestAnimationFrame(Visualize);








