import axios from "axios";

let todoDataUrl = "";
if (process.env.NODE_ENV === "production"){
    todoDataUrl = process.env.REACT_APP_BACKEND_ENDPOINT;
} else {
    todoDataUrl = process.env.REACT_APP_BACKEND_ENDPOINT_LOCAL;
}


// get
export const getAllTodosData = async() => {
    const response = await axios.get(todoDataUrl);
    return response.data;
};
// const getAll = () => {
//     axios.get('https://localhost:7019/api/todo')
//     .then((response) => {
//         if(response.status === 200)
//         {
//         setPosts(response.data);
//         }
//     }).catch(()=>{
//         alert("エラー");
//     })
// }

// post
export const addTodoData = async(todo) => {
    const response = await axios.post(todoDataUrl, todo);
    return response.data;
}

// delete
export const deleteTodoData = async(id) => {
    await axios.delete(`${todoDataUrl}/${id}`);
    return id;
};

// update
export const updateTodoData = async (id, todo) => {
    const response = await axios.put(`${todoDataUrl}/${id}`, todo);
    return response.data;
};