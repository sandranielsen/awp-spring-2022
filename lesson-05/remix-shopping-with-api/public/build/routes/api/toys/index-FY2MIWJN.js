import {
  require_db_server
} from "/build/_shared/chunk-PJIP5UTI.js";
import {
  __toESM,
  init_react
} from "/build/_shared/chunk-P2FTGPOX.js";

// browser-route-module:C:\Users\sandr\Desktop\awp-spring-2022\lesson-05\remix-shopping-with-api\app\routes\api\toys\index.js?browser
init_react();

// app/routes/api/toys/index.js
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
  }
}
export {
  action,
  loader
};
//# sourceMappingURL=/build/routes/api/toys/index-FY2MIWJN.js.map
