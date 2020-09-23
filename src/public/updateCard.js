let editButtons = document.querySelectorAll(".edit");
let updateButtons = document.querySelectorAll(".save");

editButtons.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        let form = document.querySelector("#formHttp");
        let card = btn.parentNode;
        let idDatabase = card.childNodes[1].innerText;
        let titulo = document.querySelector(`#titulo${idDatabase}`);
        let status = document.querySelector(`#status${idDatabase}`);
        let descricao = document.querySelector(`#descricao${idDatabase}`);
        let botaoEditar = document.querySelector("#adicionarTarefa");

        botaoEditar.innerText = "Editar Tarefa";
        form[1].value = idDatabase;
        form[2].value = titulo.innerText;
        form[3].value = status.innerText;
        form[4].value = descricao.innerText;
        form.action = `/update/${idDatabase}`;
    });
});