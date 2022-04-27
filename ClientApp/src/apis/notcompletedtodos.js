import axios from "axios";

let todoDataUrl = "";
if (process.env.NODE_ENV === "production"){
    todoDataUrl = process.env.REACT_APP_BACKEND_ENDPOINT_NOTCOMPLETED;
} else {
    todoDataUrl = process.env.REACT_APP_BACKEND_ENDPOINT_NOTCOMPLETED_LOCAL;
}

// get
export const getAllTodosData = async() => {
    const response = await axios.get(todoDataUrl);
    return response.data;
};
