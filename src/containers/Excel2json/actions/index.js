import axios from 'axios'

export const getStars = () => {
  return async(dispatch, getState) => {
    const result = await axios({
      method: 'get',
      url: '/a.json',
      baseURL: '',
      params: {
        limit: 100
      }
    })
    dispatch({type: 'STAR', value: result.data})

  }

}
export const addNumber = (value) => ({type: 'ADD', value})
export const deleteNumber = (value) => ({type: 'DELETE', value})
