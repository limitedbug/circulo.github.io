let circle = document.getElementById("circle");

    function magia(boton){
        if (circle.style.display === 'none') {
            circle.style.display = 'block';
            boton.textContent = 'Desaparecer';
        } else {
            circle.style.display = 'none';
            boton.textContent = 'Aparecer';
        }
    }
    function agrandaraltura(){
        const actualheight = parseFloat(getComputedStyle(circle).height);
        circle.style.height = `${actualheight + 20}px`;
    }
    function disminuiraltura(){
        const actualheight = parseFloat(getComputedStyle(circle).height);
        circle.style.height = `${actualheight - 20}px`;
    }
    function agrandaranchura(){
        const actualwidth = parseFloat(getComputedStyle(circle).width);
        circle.style.width = `${actualwidth + 20}px`;
    }
    function disminuiranchura (){
        const actualwidth = parseFloat(getComputedStyle(circle).width);
        circle.style.width = `${actualwidth - 20}px`;
    }
    function cambiarcolor(nuevocolor) {
        circle.style.backgroundColor = nuevocolor;
    }