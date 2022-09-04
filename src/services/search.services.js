const axios = require('axios')


async function getUsers(token, created, username, location, page, order) {
    if (!page) {
        page = 1;
    }
    let response = {
        status: 200,
        data: undefined,
        error: undefined
    };
    if (created) {
        console.log(localStorage.getItem('token'))

        await axios.get(`https://api.github.com/search/users?q=${username}+in:login+created:${created}+location:${location}&sort=joined&per_page=20&page=${page}&order=${order}`, {
            headers: { 'Authorization': "Bearer " + localStorage.getItem('token') }
        }).then((res) => {
            response.status = res.status
            response.data = res.data
        }).catch(error => {
            response.error = error
        })
    } else {
        console.log(localStorage.getItem('token'))
        await axios.get(`https://api.github.com/search/users?q=${username}+in:login+location:${location}&sort=joined&per_page=20&page=${page}&order=${order}`, {
            headers: { 'Authorization': "Bearer " + localStorage.getItem('token') }


        }).then((res) => {
            console.log(res)
            response.status = res.status
            response.data = res.data
        }).catch(error => {
            response.error = error

        })
    }
    console.log('res' , response)
    return response;
}

export { getUsers }

//console.log('running ')
// async function test(){
//
//    for(let i=0; i<1; i++){
//         console.log(i);
//         let res = await getUsers({year:'2022' , month : '05'} , 'ei' , 'france' , 1,'desc')
//         console.log(res.status);
//     }
 //} 

