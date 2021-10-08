import { createSlice } from "@reduxjs/toolkit";
import Api from "./apiRequests";

export const slice = createSlice({
  name: "main",
  initialState: {
    tableList: [],
    selected: null,
    rules: [],
    loading: false,
  },
  reducers: {
    setTableList: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.tableList = action.payload;
    },
    setSelectedValue: (state, action) => {
      state.selected = action.payload;
    },
    setRules: (state, action) => {
      state.rules = action.payload;
      state.loading = false;
    },
    updateLoader: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setSelectedValue, setTableList, setRules, updateLoader } = slice.actions;

// Async code can then be executed and other actions can be dispatched
export const getTableList = () => async (dispatch) => {
  const tableList = await Api.getTableList();

  dispatch(setTableList(tableList.data.dbList));
};
export const getRulesByItem = (selected) => async (dispatch) => {
  dispatch(updateLoader(true));
  const res = await Api.getRules(selected);

  const rules = [];
  for (const [key, value] of Object.entries(res.data)) {
    rules.push({ id: key, ...value });
  }

  dispatch(setRules(rules));
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectList = (state) => state.main.tableList;
export const selected = (state) => state.main.selected;
export const rulesSelector = (state) => state.main.rules;
export const isLoading = (state) => state.main.loading;

export default slice.reducer;
