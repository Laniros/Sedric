import React , { useState, useEffect } from "react";
import {useSelector} from "react-redux";

const Search = () => {
    const [data, setData] = useState({
        calls: [],
        topic: "",
        search: "",
        results: [],
        searched: false
    });

    const callData = useSelector((state) => state.calls.calls);

    const loadCategories = () => {
        setData({...data, calls: callData});
    };

    useEffect(() => {
        loadCategories();
    }, []);

    const searchData = (callTopic) => {

        for (let i = 0; i < callData.length; i++) {

            if (callData[i].payload.object.topic === callTopic){
                console.log(callData[i].payload.object.topic);
                return callData[i]
            }
        }
    };

    const searchSubmit = e => {
        searchData(e);
    };

    const handleChange = name => event => {
        setData({...data, [name]: event.target.value, searched: false});
    };

    return(



    <form onSubmit={searchSubmit((e)=>e.target.value)}>
        <label>
            Name:
            <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
    </form>

    )


};

export default Search;
