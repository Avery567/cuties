const baseUrl = "http://localhost:3000/characters"

fetch(baseUrl)
 .then (r => r.json())
 .then (flatacuties =>
    flatacuties.forEach (character => {
        const nameContainer = document.getElementById('character-bar') 
        const newName = document.createElement('span')
        newName.addEventListener('click', () => characterClick(character))
        newName.textContent = character.name
        // console.log(newName)
        nameContainer.append(newName)
     } )
 )
 

const characterClick = (theCharacter) => {
    const detailElement = document.getElementById('detailed-info')
    const characterImage = detailElement.querySelector('img')
    // console.log(characterImage)
    characterImage.src = theCharacter.image
    const characterVote = detailElement.querySelector('h4')
    // console.log(characterVote)
    characterVote.textContent = `Total Vote: ${theCharacter.votes}`
    const characterName = detailElement.querySelector('p')
    characterName.textContent = theCharacter.name
}

const voteForm = document.getElementById('votes-form')
// console.log(voteForm)
voteForm.addEventListener('submit', e => {
    e.preventDefault()
    const detailElement = document.getElementById('detailed-info')
    const voteContainer = detailElement.querySelector('h4')
    console.log(voteContainer)
    fullText = voteContainer.innerText
    // console.log(fullText)
    currentVote = fullText.split(' ')
    console.log(currentVote)
    const userVote = e.target.votes.value
    // console.log(userVote)
    newVote = parseInt(currentVote[2]) + parseInt(userVote)
    // console.log(newVote)
    // console.log(currentVote[2])
    currentVote[2] = newVote

    voteContainer.innerText = currentVote.join(' ')
    // const newVote = parseInt(currentVote) + parseInt(userVote)
    // currentVote.textContent = `Total Vote: ${newVote}`
    // voteContainer.append(newVote)
})




