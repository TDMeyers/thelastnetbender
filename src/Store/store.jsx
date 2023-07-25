import { configureStore, middleware } from "@reduxjs/toolkit";
import reducer from "./Posts";
import api from "./Middleware/api";

export default function store(){
    return configureStore({
        reducer,
        middleware: [...middleware(), api],
    });
}