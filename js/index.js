let meusTeams = JSON.parse(localStorage.getItem("lista")) || [];
let teamsArr = []

criarBtn.onclick = () => {
    overlay.classList.add('show');
    formCriar.classList.add('show');
}

closeForm.onclick = () => {
    overlay.classList.remove('show');
    formCriar.classList.remove('show');
}

overlay.onclick = () => {
    overlay.classList.remove('show');
    formCriar.classList.remove('show');
    formParticipante.classList.remove('show')
}

closeFormParticipante.onclick = () => {
    formParticipante.classList.remove('show')
    overlay.classList.remove('show');
}

function voltaAoForm(){
    formTeamRepetido.classList.remove('show')
    formCriar.classList.add('show');
}


//------------------------------------------------------------------------------

formCriar.onsubmit = () => { // Ao enviar, ocorre isso
    event.preventDefault();
    meusTeams.push({ // insere na array 'meusTeams' as informações
        name: nome.value,
        capacity: capacidade.value,
        members: []
    })
    localStorage.setItem("lista", JSON.stringify(meusTeams))
    
    adicionarCards() // aciona a function

    overlay.classList.remove('show');
    formCriar.classList.remove('show');
};

function adicionarCards(){
    let teamsAdded = {};
    listTeams.innerHTML = ' '; // Limpa a lista antes de adicionar novos cards

    if (meusTeams.length > 0) {
        for (let i = 0; i < meusTeams.length; i++){
            if (!teamsAdded[meusTeams[i].name]){
                let cardHTML = `
                <li id='card${i}'>
                    <h4> ${meusTeams[i].name} <box-icon name='show' id='ShowHide${i}' onclick="changeBoxIcon(${i})"></box-icon></h4>
                    <h1>${meusTeams[i].members.length} <span>/ ${meusTeams[i].capacity}</span></h1>
                    <div class="actions">
                        <button onclick="mostrarFormParticipante(${i})">adicionar</button>
                        <button onclick='adios(${i})'><box-icon name='trash'></box-icon></button>
                    </div>
                </li>
                `;
                teamsArr.push(cardHTML);
                teamsAdded[meusTeams[i].name] = true;
                listTeams.innerHTML += cardHTML; // Adiciona cada card de team ao HTML
            } else {
                formCriar.classList.remove('show');
                formTeamRepetido.classList.add('show');
            }
        }
    } else {
        listTeams.innerHTML = '<li class="noTeams">Nenhum team adicionado ainda.</li>';
    }
}

adicionarCards();

function adios(indice) {
    let ULfilho = document.getElementById(`card${indice}`);
    ULfilho.parentNode.removeChild(ULfilho);
    meusTeams.splice(indice, 1);
    localStorage.setItem("lista", JSON.stringify(meusTeams))
    if (meusTeams.length == 0){
        listTeams.innerHTML = '<li class="noTeams">Nenhum team adicionado ainda.</li>';
    }
}

function changeBoxIcon(indice){ //função para mudar o icone do olho
    let icon = document.getElementById('ShowHide'+indice)
    if (icon.getAttribute('name') === 'show'){ 
        icon.setAttribute('name', 'hide');
    } else {
        icon.setAttribute('name', 'show');
    };
    alert(meusTeams[indice].members)
};

function mostrarFormParticipante(indice){
    overlay.classList.add("show")
    formParticipante.classList.add("show")
    teamID.value = indice
}

formParticipante.onsubmit = () => {
    event.preventDefault();
    if(meusTeams[Number(teamID.value)].members.length == meusTeams[Number(teamID.value)].capacity){
        alert('capacidade máxima atingida')
    } else {
        meusTeams[Number(teamID.value)].members.push(nomeParticipante.value);
        localStorage.setItem("lista", JSON.stringify(meusTeams))
        alert("Participante inserido com sucesso!");
        formParticipante.reset();
        adicionarCards();
    }
}

function searchTeam(){
    let lista = document.querySelectorAll('#teams ul li');
    console.log(lista);
    if (pesquisa.value.length >= 3){
        for (let i = 0; i < lista.length; i++){
            if(lista[i].children[0].innerText.toString().toLowerCase().includes(pesquisa.value.toLowerCase())){
                lista[i].classList.remove("none");
            } else {
                lista[i].classList.add("none");
            }
        }
    } else {
        for (let i=0; i < lista.length; i++)
            lista[i].classList.remove('none');
    }
}

