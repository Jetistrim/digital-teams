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

formCriar.onsubmit = () => {
    event.preventDefault();
    teams.push({
        name: nome.value,
        capacity: capacidade.value,
        members: []
    })

    adicionarCards()

    function changeBoxIcon(icon){
        if (icon.getAttribute('name') === 'show'){
            icon.setAttribute('name', 'hide');
        } else {
            icon.setAttribute('name', 'show');
        };
    };

    ShowHide.onclick[changeBoxIcon()]

    const icon = document.getElementById('ShowHide');
    icon.addEventListener('click', function() {
        changeBoxIcon(this);
    });

    overlay.classList.remove('show');
    formCriar.classList.remove('show');
};


function adicionarCards(){
    listTeams.innerHTML = ' ';
    for (let i = 0; i < teams.length; i++){
        listTeams.innerHTML += `
                        <li>
                            <h4> ${teams[i].name} <box-icon name='show' id='ShowHide'></box-icon></h4>
                            <h1>0 <span>/ ${teams[i].capacity}</span></h1>
                            <div class="actions">
                                <button>adicionar</button>
                                <button><box-icon name='trash'></box-icon></button>
                            </div>
                        </li>
                        `;
    }
}