export const incrementExperience = (amount)=>{
    return(dispatch)=>{
        dispatch({
            type:'increment',
            payload:amount
        })
    }
}   

export const decrementExperience = (amount)=>{
    return(dispatch)=>{
        dispatch({
            type:'decrement',
            payload:amount
        })
    }
}