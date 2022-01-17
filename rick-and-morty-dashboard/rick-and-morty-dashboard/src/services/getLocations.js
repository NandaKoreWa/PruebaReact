import { API_URL, LOCALIZACIONES } from './settings'

const fromApiResponseToLocations = apiResponse => {
  return apiResponse.results
}

const fromApiResponseToLocation = apiResponse => {
  return apiResponse
}
const fromApiResponseToLocationsID = location => {
  let characterNumbers = []

  location.residents.map(character => {
    return characterNumbers.push(character.split('character/')[1])
  })

  characterNumbers = [...new Set(characterNumbers)]
  return { location, characterNumbers }
}
export function getLocations ({ searchText = '' } = {}) {
  let url = `${API_URL}${LOCALIZACIONES}`
  if (searchText.length > 0) {
    url = `${url}/?name=${searchText}`
  }
  return fetch(url)
    .then(res => res.json())
    .then(fromApiResponseToLocations)
}
export function getLocationById ({ id = '' } = {}) {
  let url = `${API_URL}${LOCALIZACIONES}/${id}`

  return fetch(url)
    .then(res => res.json())
    .then(fromApiResponseToLocationsID)
}
