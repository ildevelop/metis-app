import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { getTableList, selectList, setSelectedValue, selected, getRulesByItem } from "../reducers/mainReducer";

const Form = () => {
  const list = useSelector(selectList);
  const selectedValue = useSelector(selected);

  const dispatch = useDispatch();
  const loading = list.length === 0;

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (!list.length) {
      dispatch(getTableList());
    }
  }, [list, dispatch]);

  return (
    <>
      <Flex>
        <Autocomplete
          value={selectedValue}
          onChange={(event, newValue) => dispatch(setSelectedValue(newValue))}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          id="controllable-states-demo"
          options={list}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextInput
              {...params}
              label="Select Table"
              variant="standard"
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment>{loading ? <CircularProgress color="inherit" size={20} /> : params.InputProps.endAdornment}</React.Fragment>
                ),
              }}
            />
          )}
        />

        <Button variant="contained" disabled={!selectedValue} onClick={() => dispatch(getRulesByItem(selectedValue))} endIcon={<SendIcon />}>
          Check
        </Button>
      </Flex>
    </>
  );
};

const Flex = styled.div`
  display: flex;
  font-size: 1em;
  margin: 1em;
  flex-wrap: wrap;
`;
const TextInput = styled(TextField)`
  color: #fff;
`;

export default Form;
