import {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPhoto, loadPhoto } from "../../features/photo/photoSlice";

export const Background = () => {
    const dispatch = useDispatch();
    const photo = useSelector(selectPhoto);

    useEffect(() => {
        console.log('hello1');
        dispatch(loadPhoto());
    }, [dispatch]);

    useEffect(() => {
        console.log('hello2');
        const body = document.body;
        body.style.backgroundImage = `url(${photo.url})`;
    }, [photo.url]);
}