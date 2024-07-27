document.getElementById('colorButton').addEventListener('click', function() {
    var currentColor = document.body.style.backgroundColor;

    // Cambiar el color de fondo basado en el color actual
    if (currentColor === 'rgb(22, 21, 21)') {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'white'; // Cambia el color del texto para que sea visible sobre fondo negro
    }
});
