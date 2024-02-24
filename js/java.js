var imgUlrSlidr = ['image/hody2.png' ,'image/hody1.png' ,  'image/hody3.png']
var count = 1;
var simg = document.getElementById("s-img-r");
var bimg = document.getElementById("blurs");
function arrowR(){
    count++
    if(count==imgUlrSlidr.length){
        count=0;
    }
    simg.style="background: url("+imgUlrSlidr[count]+"); background-position:center;background-repeat: no-repeat;background-size: cover;text-align: center;width: 50%;height: 95%;margin-top: 13px;border: 1px solid white;border-radius: 15px;box-shadow:0px 0px 17.4px -5px #ffffff ;transition: .3s;"
    bimg.style="background:url("+imgUlrSlidr[count]+");background-repeat: no-repeat;background-size:cover;background-position: center;position: absolute;top: -10px;bottom: -10px;right: -10px;left: -10px;filter: blur(5px); transition: .3s;"
}

function arrowL(){
    count--
    if(count==-1){
        count=imgUlrSlidr.length-1;
    }
    simg.style="background: url("+imgUlrSlidr[count]+"); background-position:center;background-repeat: no-repeat;background-size: cover;text-align: center;width: 50%;height: 95%;margin-top: 13px;border: 1px solid white;border-radius: 15px;box-shadow:0px 0px 17.4px -5px #ffffff ;transition: .3s;"
    bimg.style="background:url("+imgUlrSlidr[count]+");background-repeat: no-repeat;background-size:cover;background-position: center;position: absolute;top: -10px;bottom: -10px;right: -10px;left: -10px;filter: blur(5px); transition: .3s;"

}
console.log("salam")








