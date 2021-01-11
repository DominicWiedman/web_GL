//  class Network {
//      async post ( method, body){
//          console.log(body)
//
//          let response =  await fetch(`http://localhost:3000/api/${method}`, {
//              method: 'POST',
//              headers: {
//                  'Content-Type': 'application/json'
//              },
//              body: JSON.stringify(body)
//          })
//          if (response.ok){
//              let json = await response.json()
//              console.log(` все ок ${json} `)
//          }else {
//              console.log("KILL YOURSELF: " + response.status)
//          }
//      }
// }
// const network = new Network();
// export default network;

const Network = async (url, method, body) => {

    return  fetch(`http://localhost:3001/api/${url}`, {
             method: method || 'GET',
             headers: {
                 'Content-Type': 'application/json'
             },
             body: body ? JSON.stringify(body) : null
         }).then((res)=> res.json())
}
export default  Network