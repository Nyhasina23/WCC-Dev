const axios = require('axios')


async function getUsers(createdObj ,username , location , page , order){
    let created = '';
    if(createdObj.year){
        created = createdObj.year
        if(createdObj.month){
            created = created+'-'+createdObj.month
            if(createdObj.day){
                created = created+'-'+createdObj.day
            }
        }
    }

    if(!page) {
        page = 1 ;
    }
    let response = {
        status : 200 , 
        data : undefined
    };
    if(createdObj.year){
        await axios.get(`https://api.github.com/search/users?q=${username}+in:login+created:${created}+location:${location}&sort=joined&per_page=20&page=${page}&order=${order}` , {
            headers : {
                'Authorization' : 'Bearer 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'
            }
        }).then((res) => {
    
            response.status = res.status
            response.data = res.data
        }).catch(error => {
            response.status = error.response.status
        })
    }else{
        await axios.get(`https://api.github.com/search/users?q=${username}+in:login+location:${location}&sort=joined&per_page=20&page=${page}&order=${order}` , {
        headers : {
            'Authorization' : 'Bearer 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'
        }
    }).then((res) => {

        response.status = res.status
        response.data = res.data
    }).catch(error => {
        response.status = error.response.status
    })
    }
    
    return response;
}

export {getUsers}
// console.log('running ')
// async function test(){

//     for(let i=0; i<31; i++){
//         console.log(i);
//         let res = await getUsers({year:'2022' , month : '05'} , 'ei' , 'france' , 1)
//         console.log(res.status);
//     }
// } 

// test()
