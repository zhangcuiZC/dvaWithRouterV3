import ExampleServices from "../../services/example";

const { getExampleList } = ExampleServices;

export default {
  namespace: "example",
  state: {},
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    }
  },
  effects: {
    *getExampleList({ payload }, { call, put }) {
      const { data } = yield call(getExampleList, { ...payload });
      if (data.Status === 0) {
        // do sth
      } else {
        // err
      }
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {}
  }
};
