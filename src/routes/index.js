import { RegisterModel } from "../utils/common";
// import { authenticated, checkPrivilege } from '../utils/auth';

const RootRouter = [
  {
    path: "/",
    getChildRoutes(location, callback) {
      require.ensure(
        [],
        require => {
          callback(null, [
            require("./example")
            // require('others'),
          ]);
        },
        "children"
      );
    },
    getIndexRoute(location, callback) {
      require.ensure(
        [],
        require => {
          callback(null, { component: require("../pages/Index") });
        },
        "IndexPage"
      );
    },
    getComponent(location, callback) {
      // RegisterModel(require('../models/app'));
      callback(null, require("../layouts/IndexLayout"));
    }
    // onEnter: authenticated,
    // onChange: checkPrivilege
  }
  // require('others')
];

export default RootRouter;
