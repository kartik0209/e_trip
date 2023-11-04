import axiox from "react-axios"

export const loginuser=(user)=> async dispatch =>{
    dispatch({type:"USER_LOGIN_REQUEST"})
    try{
        const response= await axiox.Post("/signin",user)
        console.log(response);
        dispatch({type:"USER_LOGIN_SUCCESS",payload:response.data})
        localStorage.setItem("currentuser",JSON.stringify(response.data))
    }catch(error){
        dispatch({type:"USER_LOGIN_FAIL",payload:error})

    }
}