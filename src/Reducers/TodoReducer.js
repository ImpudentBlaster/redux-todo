const initialState = {
  todoList: [],
  taskVal: "",
  desVal: "",
  
};
const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TASK": {
      return { ...state, taskVal: action.payload };
    }

    case "DESCRIPTION": {
      return { ...state, desVal: action.payload };
    }

    case "SUBMIT": {
      if (state.taskVal.trim() !== "" && state.desVal.trim() !== "") {
        return {
          ...state,
          todoList: [
            ...state.todoList,
            {
              id: state.todoList.length,
              task: state.taskVal,
              description: state.desVal,
              isSelected:false
            },
          ],
          taskVal: "",
          desVal: "",
        };
      } else alert("Input Required");
    }
    case 'CROSS':{
      const temp = state.todoList.filter(item => item.id!==action.payload).map((item ,index)=> ({...item,id:index}))
      
      return {
        ...state , todoList:temp
      }
    }

    case 'TICK':{
    
      // let temp = state.todoList[action.payload]
      // return{
      //   ...state , todoList:[...state.todoList , {...temp , isSelected:!temp['isSelected']}]
      // }
      let temp= {...state.todoList[action.payload]};
      temp.isSelected = !temp.isSelected;
      return{
        ...state , todoList:state.todoList.map((item )=> item.id===action.payload ? temp : item)
      }
      
    }

    default:
      return state;
  }
};
export default TodoReducer;
