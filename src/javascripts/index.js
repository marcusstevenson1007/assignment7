// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

// JavaScript
//TODO
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function render(){
    let c =document.querySelector('canvas')
    if(c.getContext){
        let ctx = c.getContext('2d')
        //black square
        ctx.clearRect(0, 0, 1000, 600)
        ctx.fillStyle = document.getElementById('c').value

        //red circle
        ctx.fillStyle = "red"
        ctx.beginPath()
        ctx.arc(document.getElementById('x').value, 150, 75, 0, 2 * Math.PI)
        ctx.fill()

          //blue circle
          ctx.fillStyle = "blue"
          ctx.beginPath()
          ctx.arc(document.getElementById('y').value, 300, 75, 0, 2 * Math.PI)
          ctx.fill()

           //orange circle
           ctx.fillStyle = "orange"
           ctx.beginPath()
           ctx.arc(document.getElementById('z').value, 450, 75, 0, 2 * Math.PI)
           ctx.fill()
    }
}

document.body.onload = render;
document.getElementById('x').onchange = render;
document.getElementById('y').onchange = render;
document.getElementById('z').onchange = render;
