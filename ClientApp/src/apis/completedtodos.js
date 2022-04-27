import axios from "axios";

let todoDataUrl = "";
if (process.env.NODE_ENV === "production"){
    todoDataUrl = process.env.REACT_APP_BACKEND_ENDPOINT_COMPLETED;
} else {
    todoDataUrl = process.env.REACT_APP_BACKEND_ENDPOINT_COMPLETED_LOCAL;
}

// get
export const getAllTodosData = async() => {
    const response = await axios.get(todoDataUrl);
    return response.data;
};
