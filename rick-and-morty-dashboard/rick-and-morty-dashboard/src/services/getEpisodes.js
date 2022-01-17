import { API_URL, EPISODIOS } from './settings'

const fromApiResponseToEpisodes = apiResponse => {
  const { results = [], info = [] } = apiResponse
  if (Array.isArray(results)) {
    return results
  }
  return []
}
const fromApiResponseToEpisodesIDs = apiResponse => {
  return apiResponse
}
const fromApiResponseToEpisodesID = (episode) => {
 
  let characterNumbers = []

  episode.characters.map(chaaracter => {
    return characterNumbers.push(chaaracter.split('character/')[1])
  })

  characterNumbers = [...new Set(characterNumbers)]
  return { episode, characterNumbers }
}
export function getEpisodes ({ searchText = '' } = {}) {
  let url = `${API_URL}${EPISODIOS}`
  if (searchText.length > 0) {
    url = `${url}/?name=${searchText}`
  }
  return fetch(url)
    .then(res => res.json())
    .then(fromApiResponseToEpisodes)
}

export function getEpisodesByID ({ EpisodesIDs = [] } = {}) {
  let url = `${API_URL}${EPISODIOS}/${EpisodesIDs}`
  return fetch(url)
    .then(res => res.json())
    .then(fromApiResponseToEpisodesIDs)
}

export function getEpisodeByID ({ id = '' } = {}) {
  let url = `${API_URL}${EPISODIOS}/${id}`
  return fetch(url)
    .then(res => res.json())
    .then(fromApiResponseToEpisodesID)
}
