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

let teams = []
let teamsArr = []

function toggleShow(addORrem) {
    const action = addORrem ? 'add' : 'remove';
    overlay.classList[action]('show');
    formCriar.classList[action]('show');
}

criarBtn.onclick = () => {
    toggleShow(true);
}

const closeActions = () => toggleShow(false);
closeForm.onclick = closeActions;
overlay.onclick = closeActions;

formCriar.onsubmit = () => { // Ao enviar, ocorre isso
    event.preventDefault();
    teams.push({ // insere na array 'teams' as informações
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
    for (let i = 0; i < teams.length; i++){
        if (!teamsAdded[teams[i].name]){
            let cardHTML = `
            <li>
                <h4> ${teams[i].name} <box-icon name='show' id='ShowHide${i}' onclick="changeBoxIcon(${i})"></box-icon></h4>
                <h1>0 <span>/ ${teams[i].capacity}</span></h1>
                <div class="actions">
                    <button>adicionar</button>
                    <button><box-icon name='trash'></box-icon></button>
                </div>
            </li>
            `;
            teamsArr.push(cardHTML);
            teamsAdded[teams[i].name] = true
            listTeams.innerHTML += cardHTML
            console.log(teamsAdded);
        }
        // CRIAR TELA "NOME DE TEAM JÁ UTILIZADO"
        // FAZER O DELETE DA li
        // FAZER O "hide" DAS INFORMAÇÕES
    }
}

function changeBoxIcon(b){ //função para mudar o icone do olho
    let icon = document.getElementById('ShowHide'+b)
    if (icon.getAttribute('name') === 'show'){ 
        icon.setAttribute('name', 'hide');
    } else {
        icon.setAttribute('name', 'show');
    };
};