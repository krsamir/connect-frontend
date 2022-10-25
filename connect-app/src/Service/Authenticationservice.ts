import axios from "axios";
import { IData } from "../Models/Models";

export const loginApi = (data: IData) => axios.post("/auth/login", data);
