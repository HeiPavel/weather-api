import {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPhoto, loadPhoto } from "../../features/photo/photoSlice";

export const Background = () => {
    const dispatch = useDispatch();
    const photo = useSelector(selectPhoto);

    useEffect(() => {
        dispatch(loadPhoto());
    }, [dispatch]);

    useEffect(() => {
        const body = document.body;
        body.style.backgroundImage = `url(${photo.url})`;
    }, [photo.url]);
}