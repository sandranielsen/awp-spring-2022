import {
  require_db_server
} from "/build/_shared/chunk-PJIP5UTI.js";
import {
  json
} from "/build/_shared/chunk-EBNT4Q6V.js";
import {
  __toESM,
  init_react
} from "/build/_shared/chunk-P2FTGPOX.js";

// browser-route-module:C:\Users\sandr\Desktop\awp-spring-2022\lesson-05\remix-shopping-with-api\app\routes\api\toys\$productId.js?browser
init_react();

// app/routes/api/toys/$productId.js
init_react();
var import_db_server = __toESM(require_db_server());
async function loader({ params }) {
  const product = import_db_server.default.data.products?.find((p) => p.id === params.productId);
  return product;
}
async function action({ request, params }) {
  switch (request.method) {
    case "PUT": {
      const body = await request.json();
      import_db_server.default.data.products = import_db_server.default.data.products.map((p) => {
        if (p.id == params.productId) {
          return body;
        } else {
          return p;
        }
      });
      import_db_server.default.write();
      return json(body, {
        status: 202
      });
    }
    case "DELETE": {
      import_db_server.default.data.products = import_db_server.default.data.products.filter((p) => p.id !== params.productId);
      import_db_server.default.write();
      return new Response(null, { status: 204 });
    }
  }
}
export {
  action,
  loader
};
//# sourceMappingURL=/build/routes/api/toys/$productId-NEX7ZMFR.js.map
