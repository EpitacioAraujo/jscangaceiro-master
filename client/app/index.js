var campos = [
    document.querySelector('#data'),
    document.querySelector('#valor'),
    document.querySelector('#quantidade'),
]

console.log(campos)

var tbody = document.querySelector('table tbody')

console.log(tbody)

document.querySelector('.form').addEventListener('submit', (e) => {
    e.preventDefault()

    var tr = document.createElement('tr')

    campos.forEach(campo => {
        // cria td sem informção
        var td = document.createElement('td')

        // atribui o valor do campo à td
        td.textContent = campo.value

        // insere a td na tr
        tr.appendChild(td)
    })

    var tdVolume = document.createElement('td')
    tdVolume.textContent = campos[1].value * campos[2].value
    tr.appendChild(tdVolume)

    tbody.appendChild(tr)

    campos[0].value = ''
    campos[1].value = 1
    campos[2].value = 0

    campos[0].focus()
})