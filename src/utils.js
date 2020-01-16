import React from 'react'
import ReactDOM from 'react-dom'
import { ErrorContainer, GifContainer } from './Container'

const apiUrlBase = 'http://api.giphy.com/v1/gifs/'
const apiKey = 'qj0LTbpFCXOjNLc3lqTab5Kf4QXMMyhr'

// return the gifs in trending
export const searchTrending = () => {
    const apiUrl = `${apiUrlBase}trending?api_key=${apiKey}`

    callApi(apiUrl).then((data) => {
        const gifs = data['data']
        const renderGifs = gifs.map((gif) => (
            GifContainer(gif['embed_url'])
        ))
        ReactDOM.render(renderGifs, document.getElementById('gallery'))
    }).catch((err) => {
        console.log(err)
    })
}

// search for gifs
export const customSearch = (query) => {
    const apiUrl = `${apiUrlBase}search?q=${query}&api_key=${apiKey}`
    callApi(apiUrl).then((data) => {
        const gifs = data['data']
        const renderGifs = gifs.map((gif) => (
            GifContainer(gif['embed_url'])
        ))
        ReactDOM.render(renderGifs, document.getElementById('gallery'))
    }).catch((err) => {
        console.log(err)
    })
}

// return a random gif
export const randomSearch = () => {
    const apiUrl = `${apiUrlBase}random?api_key=${apiKey}`
    callApi(apiUrl).then((data) => {
        const gif = data['data']
        ReactDOM.render(GifContainer(gif['embed_url']), document.getElementById('gallery'))
    }).catch((err) => {
        console.log(err)
    })
}

// call the API
const callApi = async (url)  => {
    const response = await fetch(url)
    if (response.status === 200) {
        const data = await response.json()
        return data
    } else {
        ReactDOM.render(<ErrorContainer err='Error: Something went wrong!' />, document.getElementById('content'))
        throw new Error('Error: Something went wrong!')
    }
}
