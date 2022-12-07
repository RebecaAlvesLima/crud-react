import axios from "axios";
const API_URL = "http://localhost:5176/api/";

const user = JSON.parse(localStorage.getItem('user'));
const getPublicContent = () => {
return axios.get(API_URL + "carometro");
};
const getProfessorBoard = async () => {
return await axios.get(API_URL + "aluno", { headers: { Authorization:
'Bearer ' + user.token } });
};
const UserService = {
getPublicContent,
getProfessorBoard
};