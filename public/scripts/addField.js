//procurar botão
document.querySelector('#add-time')
    //ao clicar...
    .addEventListener('click', cloneField)

//executar uma ação
function cloneField() {
    //duplicar campo
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //limpar campos clonados
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo, limpar
    fields.forEach(function (field) {
        //pega o field e limpa  
        field.value = ''
    })

    //colocar na pagina : onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
