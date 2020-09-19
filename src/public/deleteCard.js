let deleteButtons = document.querySelectorAll(".delete");

deleteButtons.forEach((btn)=>{

    btn.addEventListener('click', (event)=>{
        let elementoClicado = event.target;
        
        if (elementoClicado.classList.contains("delete")){
            console.log(elementoClicado)
            let tarefasId = elementoClicado.parentNode.childNodes[1].innerText;
            console.log(tarefasId)
            fetch(`http://localhost:3000/${tarefasId}`, 
                {method: 'DELETE'})
                .then((res) => res)
                .catch((err) => console.log(err))
        }
        
    });

});