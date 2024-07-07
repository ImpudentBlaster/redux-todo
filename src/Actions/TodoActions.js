const handleTask=(e)=>{
    return({type:'TASK' , payload:e})
}
const handleDescription =(e)=>{
    return({type:'DESCRIPTION' , payload:e})
}
const handleClick = () =>{
    return {type:'SUBMIT'}
}
const handleTick=(id)=>{
    return {type:'TICK' , payload:id}
}
const handleCross=(id)=>{
    return{type:'CROSS' , payload:id}
}
export {handleTask , handleDescription,  handleClick , handleCross , handleTick}