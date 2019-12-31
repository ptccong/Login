const urlGetUser='http://5e032d0763d08b0014a28d2b.mockapi.io/test7/user';
function* getUserFromApi(){
    const response= yield fetch(urlGetUser,{
        method:'GET',
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json'
        },
        body:'',
    });
    const user = yield response.status ===200 ?JSON.parse(response._bodyInit):[]
    return user;
}
function* insertUserFromApi(newUser){
    const response= yield fetch(urlGetUser,{
        method:'POST',
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            user:newUser.user,
            password:newUser.password
        }),
    });
  
}
export const Api={
    getUserFromApi,
    insertUserFromApi
}
