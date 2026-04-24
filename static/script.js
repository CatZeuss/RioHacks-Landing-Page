document.addEventListener('DOMContentLoaded', () => {

    // Obtener todos los elementos con un evento onclick
    const elementsWithOnClick = Array.from(document.querySelectorAll('*')).filter(element => {
        return element.hasAttribute('onclick');
    });

    // Añadir la clase 'interactive' a esos elementos
    elementsWithOnClick.forEach(element => {
        element.classList.add('interactive');
    });

    // Crear el elemento del cursor personalizado
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);

    // Mover el cursor personalizado
    document.addEventListener('mousemove', (e) => {
        cursor.style.top = `${e.clientY}px`;
        cursor.style.left = `${e.clientX}px`;
    });

    // Detectar cuando el cursor pasa por encima de un elemento .interactive
    document.addEventListener('mouseover', (e) => {
        if (e.target.classList.contains('interactive')) {
            cursor.classList.add('pointer'); // Aplicar la clase 'pointer' al cursor
        }
    });

    // Detectar cuando el cursor sale de un elemento .interactive
    document.addEventListener('mouseout', (e) => {
        if (e.target.classList.contains('interactive')) {
            cursor.classList.remove('pointer'); // Eliminar la clase 'pointer' del cursor
        }
    });

    // Detectar clics en los elementos .interactive
    document.querySelectorAll('.interactive').forEach((el) => {
        el.addEventListener('click', () => {
            cursor.classList.add('pointer'); // Cambiar el cursor a 'pointer' al hacer clic
            setTimeout(() => {
                cursor.classList.remove('pointer'); // Restaurar el cursor a vacío después de un tiempo
            }, 300); // Cambia el tiempo según lo que necesites
        });
    });

    

    

});


