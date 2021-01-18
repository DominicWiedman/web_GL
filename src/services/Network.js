

const Network = async (url, method, body) => {
    const token = localStorage.getItem('token')

    return  fetch(`http://localhost:3001/api/${url}?access_token=${token}`, {
             method: method || 'GET',
             headers: {
                 'Content-Type': 'application/json'
             },
             body: body ? JSON.stringify(body) : null
         }).then((res)=> res.json())
}
export default  Network