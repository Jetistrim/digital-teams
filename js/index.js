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
<<<<<<< HEAD
    overlay.classList.add('show');
    formCriar.classList.add('show');
=======
    // console.log('clicou');
    toggleShow(true);
>>>>>>> e718b6b7213a3af9c7a2be120acfc1710ccc13cf
}

const closeActions = () => toggleShow(false);
closeForm.onclick = closeActions;
overlay.onclick = closeActions;

formCriar.onsubmit = () => {
    event.preventDefault();

    listTeams.innerHTML = ' ';
    listTeams.innerHTML = `
                    <li>
<<<<<<< HEAD
                        <h4>${nome.value}<box-icon name='show' id='ShowHide'></box-icon></h4>
                        <h1>0 <span>/ ${capacidade.value}</span></h1>
=======
                        <h4>`+nome.value+`<box-icon name='show' id='ShowHide'></box-icon></h4>
                        <h1>0 <span>/ 0</span></h1>
>>>>>>> e718b6b7213a3af9c7a2be120acfc1710ccc13cf
                        <div class="actions">
                            <button>adicionar</button>
                            <button><box-icon name='trash'></box-icon></button>
                        </div>
                    </li>
                    `;

<<<<<<< HEAD
    // ShowHide.

=======
>>>>>>> e718b6b7213a3af9c7a2be120acfc1710ccc13cf
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