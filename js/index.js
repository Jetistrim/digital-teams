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



function toggleShow(addORrem) {
    const action = addORrem ? 'add' : 'remove';
    overlay.classList[action]('show');
    formCriar.classList[action]('show');
}

criarBtn.onclick = () => {
    // console.log('clicou');
    toggleShow(true);
}

const closeActions = () => toggleShow(false);
closeForm.onclick = closeActions;
overlay.onclick = closeActions;

formCriar.onsubmit = () => {
    event.preventDefault();

    listTeams.innerHTML = ' ';
    listTeams.innerHTML = `
                    <li>
                        <h4>`+nome.value+`<box-icon name='show' id='ShowHide'></box-icon></h4>
                        <h1>0 <span>/ 0</span></h1>
                        <div class="actions">
                            <button>adicionar</button>
                            <button><box-icon name='trash'></box-icon></button>
                        </div>
                    </li>
                    `;

    overlay.classList.remove('show');
    formCriar.classList.remove('show');
}



    document.getElementById('ShowHide')
    ShowHide.addEventListener('click', function() {
    var SH = document.getElementById('ShowHide');
    var EYE = SH.getAttribute('name');

    if (EYE === 'show'){
        SH.setAttribute('name', 'hide');
    }
    else {
        SH.setAttribute('name', 'show');
    }
});