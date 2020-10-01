import React from "react";
import {
    compose,
    createEventHandler,
    setObservableConfig,
    withProps, withHandlers
} from "recompose";
import { from } from "rxjs";
import { debounceTime, map } from "rxjs/operators";

setObservableConfig({
    fromESObservable: from
});

const enhance = withHandlers(() => {
    const { handler, stream } = createEventHandler();
    stream
        .pipe(map(event => event.target.value), debounceTime(1000))
        .subscribe(value => console.log(value));
    return {
        handleChange: props => handler
    };
});
export const Search = enhance(({ handleChange }) => (
    <div className="App">
        <input
            onChange={handleChange}
            type="search"
            placeholder="Search..." />
    </div>
));