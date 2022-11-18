export const setIsLogged = (state) =>{
    return (dispatch)=>{
        dispatch({
            type:'SIGN_IN',
            payload:state
        })
    }
}