export const LOGIN='LOGIN';
export const LOGIN_TC='LOGIN_TC';
export const LOGIN='LOGIN_TB';
export function login(newUser){
    return{
        type:LOGIN,
        newUser
    }
}
export function login_tc(intenActivity){
    return{
        type:LOGIN_TC,
        intenActivity
    }
}
export function login_tb(error){
    return{
        LOGIN_TB,
        error
    }
}