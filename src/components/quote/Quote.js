import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectQuote, loadQuote } from "../../features/quote/quoteSlice";

export const Quote = () => {
    const dispatch = useDispatch();
    const {quote, author} = useSelector(selectQuote);

    useEffect(() => {
        dispatch(loadQuote());
    }, [dispatch]);

    return (
        <footer>
            <div className="quote-container blur">
                <p id="quote">"{quote}"</p>
                <p id="author">{author}</p>
            </div>
        </footer>
    );
}