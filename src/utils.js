import React from 'react'
import ReactDOM from 'react-dom'
import { Container, ErrorContainer } from './Container'

const apiUrl = 'http://api.giphy.com/v1/gifs/'
const apiKey = 'qj0LTbpFCXOjNLc3lqTab5Kf4QXMMyhr'

export const searchTrending = () => {
    const gifUrl = apiUrl + 'trending?api_key=' + apiKey
    ReactDOM.render(<Container />, document.getElementById('content'))
    console.log(gifUrl)
}

const callApi = async (url)  => {
    const response = await fetch(url)
    if (response.status === 200) {
        const data = await response.json()
        return data
    } else {
        ReactDOM.render(<ErrorContainer error='Error: Something went wrong!' />, document.getElementById('content'))
        throw new Error('Error: Something went wrong!')
    }
}
