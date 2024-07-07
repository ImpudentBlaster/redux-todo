// const initialState = {todoArr:[] , count:0 , value:""};
// const CounterReducer = (state = initialState , action)=>{
//     console.log(action.type)
// switch(action.type){
//     // case 'ADD':{
//     //     return {...state , count:state.count+1}
//     // }
//     // case 'SUB':{
//     //     return {...state , count:state.count-1}
//     // }
//     case 'CHANGE' :{
//         return{...state , value:action.payload}
//     }
//     case 'SUBMIT':{
//         const temp = state.value.trim();
//         if(temp !== ""){
//        return {...state , todoArr:[...state.todoArr ,{id:state.todoArr.length , todoItem:state.value}] , value:''}}
//     }
//     default :return state;
// }
// }
// export default CounterReducer


