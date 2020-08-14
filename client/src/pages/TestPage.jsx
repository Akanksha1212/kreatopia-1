import React, { useState } from 'react';
import { Button, FormControl, FormHelperText, Input, InputLabel } from '@material-ui/core';
import { increment, decrement } from '../slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';

export default (props) => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const [form, setForm] = useState({
    number: 0,
  });

  function plus() {
    let num = Number(form.number)
    dispatch(increment(num))
  }

  function minus() {
    let num = Number(form.number)
    dispatch(decrement(num))
  }

  function formChange(e) {
    e.persist()
    setForm((prevState) => {
      return { ...prevState, [e.target.name] : e.target.value }
    })
    console.log('Form:', form)
  };

  return (
    <div>
      <div>
      {user.number}
      </div>
      <FormControl onChange={formChange}>
        <InputLabel>Redux Toolkit Test</InputLabel>
        <Input type="text" name="number" />
        <FormHelperText>Insert a number here</FormHelperText>
      </FormControl>
      <div>
        <Button onClick={plus} variant="outlined" >
          Increase!
        </Button>
        <Button onClick={minus} variant="outlined" >
          Decrease!
        </Button>
      </div>
    </div>
  );
};
