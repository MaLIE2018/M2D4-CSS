let names = []

const getNames = (event) => {
    event.preventDefault()
    let input = document.getElementById("namesInput")
    let tmpNames = []
    tmpNames = input.value.split(",")
    addtoList(tmpNames)
    names = names.concat(tmpNames)
    input.innerText = ""
    console.log(names);
}

const addtoList = (tmpNames) => {
    let ul = document.getElementById("nameList")
    console.log('list:', ul)
    for (const name of tmpNames) {
        let li = `<li>${name}</li>`
        ul.innerHTML += li
    }
}



const createTeamCard = (event) => {
    event.preventDefault()
    let teamRow = document.getElementById("teamRow")
    console.log('teamRow:', teamRow.innerHTML)
    let numOfTeam = document.getElementById("numOfTeams").value
    console.log('numOfTeam:', numOfTeam)
    for (let i = 0; i < numOfTeam; i++) {
        let card = `<div class="col mt-3"><div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Team ${i+1}</h5>
                <ul class="mb-1">
                    <li>Lisa</li>
                    <li>Test</li>
                </ul>
            </div>
        </div></div>`
        teamRow.innerHTML += teamRow.innerHTML + card
        card = ""
    }
}

const assignMate = () => {
    let teamRow = document.getElementById("teamRow")
    let ul = document.getElementById("nameList")

    console.log('teamRow:', teamRow)
    if (teamRow.innerHTML.length == 0) {
        alert("Please set number of Teams")
    } else {





    }
}

window.onload = () => {
    let addNameButton = document.getElementById("button-addNames")
    let createTeamsButton = document.getElementById("button-createTeam")
    let assignMateButton = document.getElementById("button-assignMate")

    assignMateButton.addEventListener("click", (event) => {
        assignMate(event)
    })

    createTeamsButton.addEventListener("click", (event) => {
        createTeamCard(event)
    })
    addNameButton.addEventListener("click", (event) => {
        getNames(event)
    })

}