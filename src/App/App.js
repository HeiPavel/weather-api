import React from "react";
import { Weather } from "../components/weather/Weather";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPhoto, loadPhoto } from "../features/photo/photoSlice";

function App() {
  const dispatch = useDispatch();
  const photo = useSelector(selectPhoto);
  console.log(photo);

  useEffect(() => {
    dispatch(loadPhoto());
  }, [dispatch]);

  useEffect(() => {
    const body = document.body;
    body.style.backgroundImage = `url(${photo.url})`;
  }, [photo.url]);

  return (
    <Weather />
  );
}

export default App;
