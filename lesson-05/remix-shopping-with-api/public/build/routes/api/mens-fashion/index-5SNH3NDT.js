import {
  require_db_server
} from "/build/_shared/chunk-SMTFZM6A.js";
import {
  __toESM,
  init_react
} from "/build/_shared/chunk-325D37MS.js";

// browser-route-module:C:\Users\sandr\Desktop\awp-spring-2022\lesson-05\remix-shopping-with-api\app\routes\api\mens-fashion\index.js?browser
init_react();

// app/routes/api/mens-fashion/index.js
init_react();
var import_db_server = __toESM(require_db_server());
async function loader() {
  return import_db_server.default.data.products ?? [];
}
async function action({ request, params }) {
  switch (request.method) {
    case "POST": {
      const body = await request.json();
      import_db_server.default.data.products?.push(body);
      import_db_server.default.write();
      return json(body, {
        status: 201
      });
    }
    case "PUT": {
    }
    case "PATCH": {
    }
  }
}
export {
  action,
  loader
};
//# sourceMappingURL=/build/routes/api/mens-fashion/index-5SNH3NDT.js.map
