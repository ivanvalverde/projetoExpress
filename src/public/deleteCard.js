let deleteButtons = document.querySelectorAll(".delete");

deleteButtons.forEach((btn)=>{

    btn.addEventListener('click', (event)=>{
        let elementoClicado = event.target;
        
        if (elementoClicado.classList.contains("delete")){
            let tarefasId = elementoClicado.parentNode.childNodes[1].innerText;
            fetch(`http://localhost:3000/${tarefasId}`, 
                {method: 'DELETE'})
                .then(() => {elementoClicado.parentNode.parentNode.remove();})
                .catch((err) => console.log(err));
        }
        
    });

});