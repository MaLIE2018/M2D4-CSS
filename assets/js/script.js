let names = []

const getNames = (event) => {
    event.preventDefault()
    let input = document.getElementById("namesInput")
    let tmpNames = []
    tmpNames = input.value.split(",")
    addtoList(tmpNames)
    names = names.concat(tmpNames)
    input.innerHTML = ""
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
    let numOfTeam = document.getElementById("numOfTeams").value
    for (let i = 0; i < numOfTeam; i++) {
        let card = `<div class="col mt-3"><div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Team ${i+1}</h5>
                <ul class="mb-1">
                </ul>
                <button type="button" class="btn btn-danger" onclick="removeLast(event)">Remove</button>
            </div>
        </div></div>`
        teamRow.innerHTML += teamRow.innerHTML + card
        card = ""
    }
}

const removeLast = (event) => {
    let card = event.currentTarget.parentElement
    let list = card.querySelector("ul")

    list.removeChild(list.lastChild)

}

const assignMate = () => {
    let teamRow = document.getElementById("teamRow")
    let ul = document.getElementById("nameList")
    let randomName = Math.floor(Math.random() * ul.children.length)
    let randomTeam = Math.floor(Math.random() * teamRow.children.length)


    if (teamRow.innerHTML.length == 0) {
        alert("Please set number of Teams")
    } else {
        let team = teamRow.children.item(randomTeam)
        let teamUl = team.querySelector("ul")

        let name = ul.children.item(randomName)

        let newPlayer = document.createElement("li")
        newPlayer.innerText = names[randomName]
        names.splice(names.indexOf(name.innerText), 1)

        teamUl.appendChild(newPlayer)
        ul.removeChild(name)
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