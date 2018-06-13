import { RegisterModel } from "../../utils/common";

export default {
  path: "example",
  // getChildRoutes(location, callback) {
  // 	require.ensure([], (require) => {
  // 		callback(null, [
  // 			{
  // 				path: 'item1',
  // 				getComponent(location, callback) {
  // 					callback(null, require('../../components/Pages/Example/Item1'));
  // 				},
  // 			},
  // 			{
  // 				path: 'item2',
  // 				getComponent(location, callback) {
  // 					callback(null, require('../../components/Pages/Example/Item2'));
  // 				},
  // 			},
  // 		]);
  // 	}, 'example');
  // },
  getComponent(location, callback) {
    RegisterModel(require("../../models/example"));
    callback(null, require("../../pages/Example"));
  }
};
