import { API_URL, PERSONAJES } from './settings'

const fromApiResponseToCharacters = apiResponse => {
  return apiResponse
}
 
const fromApiResponseToCharactersID = personaje => {
 
  let episodesNumbers = []

  personaje.episode.map(episode => {
    return episodesNumbers.push(episode.split('episode/')[1])
  })

  episodesNumbers = [...new Set(episodesNumbers)]
  return { personaje, episodesNumbers }
}

export function getCharacters ({ searchText = '' } = {}) {
  let url = `${API_URL}${PERSONAJES}`
  if (searchText.length > 0) {
    url = `${url}/?name=${searchText}`
  }

  return fetch(url)
    .then(res => res.json())
    .then(fromApiResponseToCharacters)
}
export function getCharactersByID ({ charactersIDs = [] } = {}) {
  let url = `${API_URL}${PERSONAJES}/${charactersIDs}`
   return fetch(url)
    .then(res => res.json())
    .then(fromApiResponseToCharacters)
}
export function getCharacterByID ({ id }) {
  let url = `${API_URL}${PERSONAJES}/${id}`
   return fetch(url)
    .then(res => res.json())
    .then(fromApiResponseToCharactersID)
}
