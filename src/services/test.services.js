const axios = require('axios')


async function testUsers(created, username, location, page, order) {
    if (!page) {
        page = 1;
    }
    let response = {
        status: 200,
        data: undefined,
        error: undefined
    };
    if (created) {
        await axios.get(`https://api.github.com/search/users?q=${username}+in:login+created:${created}+location:${location}&sort=joined&per_page=20&page=${page}&order=${order}`, {
            
        }).then((res) => {
            response.status = res.status
            response.data = res.data
        }).catch(error => {
            response.error = error
        })
    } else {
        await axios.get(`https://api.github.com/search/users?q=${username}+in:login+location:${location}&sort=joined&per_page=20&page=${page}&order=${order}`, {

        }).then((res) => {
            console.log(res)
            response.status = res.status
            response.data = res.data
        }).catch(error => {
            response.error = error

        })
    }

    return response;
}

export { testUsers }

//console.log('running ')
// async function test(){
//
//    for(let i=0; i<1; i++){
//         console.log(i);
//         let res = await getUsers({year:'2022' , month : '05'} , 'ei' , 'france' , 1,'desc')
//         console.log(res.status);
//     }
 //} 

