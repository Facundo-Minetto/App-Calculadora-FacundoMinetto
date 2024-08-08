const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn"); // guarda en un array los elementos que tengan esa clase

botones.forEach(boton => { //for each recorre ese array con el parametro "boton" que es cada elemento individual del array
    boton.addEventListener("click", () => { // añadimos un addeventlistener al clickear en cada boton
        const botonApretado = boton.textContent; // textContent es el contenido textual de un nodo, sin ningun marcado HTML. y en este caso estamos tomando el boton que apreto el usuario.

        if(boton.id === "c"){
            pantalla.textContent = "0";
            return;
        }
        if(boton.id === "borrar"){
            if(pantalla.textContent.length === 1 || pantalla.textContent === "Error!"){
                pantalla.textContent = "0";
            }else{
                pantalla.textContent = pantalla.textContent.slice(0, -1); // slice es una funcion de js que te resta en base a lo que vos le indiques ( en este caso se para en la posicion en que está, y le resta 1 )
            }
            return;
        }

        if(boton.id === "igual"){
            try {
                pantalla.textContent = eval(pantalla.textContent); // función que evalúa en este caso lo que está en pantalla ( sea +, -, *, / )
            } catch (error) {
                pantalla.textContent = "Error!"
            }
            return;

        }

        if(pantalla.textContent === '0' || pantalla.textContent === "Error!"){
            pantalla.textContent = botonApretado;
        }
        else{
            pantalla.textContent += botonApretado;
        }
    })
})