




var f = new Date();
document.write(f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());


let texto = {
    desc: "",
}



var actualizar = ()=> {
    console.log("Se llamo a actualizar");
    texto.desc = document.getElementById("nota").value;
    actualizarFicha();
}



function actualizarFicha(){

    document.getElementById("nota").innerHTML = texto.desc;
    
    }



    var btnCambiar = document.querySelector(".btn-cambiar");
    console.log(btnCambiar);
    btnCambiar.addEventListener("click",()=>{
        document.querySelector(".btn-info").innerHTML;
    });
    




