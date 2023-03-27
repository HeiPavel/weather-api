import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectQuote, loadQuote } from "../../features/quote/quoteSlice";
import { Loading } from "../loading/Loading";
import { Error } from "../error/Error";

export const Quote = () => {
    const dispatch = useDispatch();
    const {quote, author, isLoading, isError} = useSelector(selectQuote);

    useEffect(() => {
        dispatch(loadQuote());
    }, [dispatch]);

    const loadedQuote = () => {
        return (
            <div className="quote-container">
                <p id="quote">"{quote}"</p>
                <p id="author">{author}</p>
            </div>
        );
    }

    return (
        <footer>
            <div className="blur">
            {isLoading ? <Loading /> : isError ? <Error /> : loadedQuote()}
            </div>
        </footer>
    );
}