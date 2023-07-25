import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { loadcharacters } from "../Store/Posts";


const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.list);

    useEffect(() => {
        dispatch(loadcharacters());
    }, [dispatch]);
}