// criarBtn.onclick = () => {
//     console.log ('clicou');
//     overlay.classList.add('show');
//     formCriar.classList.add('show');
// }

// closeForm.onclick = () => {
//     overlay.classList.remove('show');
//     formCriar.classList.remove('show');
// }

// overlay.onclick = () => {
//     overlay.classList.remove('show');
//     formCriar.classList.remove('show');
// }

let meusTeams = []
let teamsArr = []

function mostrarEsconderFormCriar(addORrem) {
    const action = addORrem ? 'add' : 'remove';
    overlay.classList[action]('show');
    formCriar.classList[action]('show');
}

function mostrarEsconderFormParticipantes(addORremParticipante){
    const actionParticipante = addORremParticipante ? 'add' : 'remove';
    formParticipante.classList[actionParticipante]('show');
    closeFormParticipante.classList[actionParticipante]('show')
}



criarBtn.onclick = () => {
    mostrarEsconderFormCriar(true);
}

const closeActionsParticipantes = () => {
    closeFormParticipante.onclick = closeActionsParticipantes;
    overlay.onclick = closeActionsParticipantes;
}

const closeActions = () => mostrarEsconderFormCriar(false);
closeForm.onclick = closeActions;
overlay.onclick = closeActions;


//------------------------------------------------------------------------------

formCriar.onsubmit = () => { // Ao enviar, ocorre isso
    event.preventDefault();
    meusTeams.push({ // insere na array 'meusTeams' as informações
        name: nome.value,
        capacity: capacidade.value,
        members: []
    })

    adicionarCards() // aciona a function

    overlay.classList.remove('show');
    formCriar.classList.remove('show');
};


function adicionarCards(){
    let teamsAdded = {}
    listTeams.innerHTML = ' ';
    for (let i = 0; i < meusTeams.length; i++){
        if (!teamsAdded[meusTeams[i].name]){
            let cardHTML = `
            <li id='card${i}'>
                <h4> ${meusTeams[i].name} <box-icon name='show' id='ShowHide${i}' onclick="changeBoxIcon(${i})"></box-icon></h4>
                <h1>0 <span>/ ${meusTeams[i].capacity}</span></h1>
                <div class="actions">
                    <button onclick="mostrarFormParticipante(${i})">adicionar</button>
                    <button onclick='adios(${i})'><box-icon name='trash'></box-icon></button>
                </div>
            </li>
            `;
            teamsArr.push(cardHTML);
            teamsAdded[meusTeams[i].name] = true
            listTeams.innerHTML += cardHTML;
            console.log(teamsAdded);
        }
        // CRIAR TELA "NOME DE TEAM JÁ UTILIZADO"
        // FAZER O "hide" DAS INFORMAÇÕES
    }
}

function adios(indice) {
    let ULfilho = document.getElementById(`card${indice}`);
    ULfilho.parentNode.removeChild(ULfilho);
    meusTeams.splice(indice, 1);
    teamsArr.splice(indice, 1);
}

function changeBoxIcon(b){ //função para mudar o icone do olho
    let icon = document.getElementById('ShowHide'+b)
    if (icon.getAttribute('name') === 'show'){ 
        icon.setAttribute('name', 'hide');
    } else {
        icon.setAttribute('name', 'show');
    };
};


function mostrarFormParticipante(indice){
    overlay.classList.add("show")
    formParticipante.classList.add("show")
    teamID.value = indice
}

formParticipante.onsubmit = () => {
    event.preventDefault();
    teams[Number(teamID.value)].members.push(nomeParticipante.value);
    alert("Participante inserido com sucesso!");
    formParticipante.reset();
}

// listar participantes
// contabilizador e capacidade máxima atingida