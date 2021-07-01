// import axios from 'axios'

// function setHeaders() {
//   let token = localStorage.getItem('token')
//   let config = token
//     ? {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     : {}
//   return config
// }


// export async function checkLogin() {
//     try {
//       let { data } = await axios.get('/api/users/me', setHeaders())
//       // if data has an id and user the user is logged on
//       return data
//     } catch (err) {
//       console.log('checkLogin(): User is not logged on.\n', err)
//       return err
//     }
//   }
// export default {setHeaders, checkLogin}