import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import {increment} from './testReducer'
export default function Sandbox(){
    const dispatch = useDispatch();
const data = useSelector(state => state.test.data)

return (
<>
<h1> Testing in progress: </h1>
<h3>the data is: {data}</h3>
<Button onClick={()=>dispatch(increment(30))}>+</Button>
</>

)

}