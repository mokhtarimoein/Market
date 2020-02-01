import BaseURL from './BaseURL'

const GET_URL = (service) => (
    `${BaseURL.sURL}${service}`
)

export const get = async (service) => {

    let response = await fetch(
        GET_URL(service),
        {
            method: 'get',
            headers: {
                'Cache-Control': 'no-cache',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })

    console.log(response)

    if (response.status !== 200)
        throw await response.text()

    try {
        return await response.json()
    } catch (error) {
        return null
    }
}