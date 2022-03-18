import {
  require_db_server
} from "/build/_shared/chunk-FWJGU6LC.js";
import {
  __toESM,
  init_react
} from "/build/_shared/chunk-P2FTGPOX.js";

// browser-route-module:C:\Users\sandr\Desktop\awp-spring-2022\lesson-05\remix-shopping-with-api\app\routes\api\luggage\$productId.js?browser
init_react();

// app/routes/api/luggage/$productId.js
init_react();
var import_db_server = __toESM(require_db_server());
async function loader({ params }) {
  const product = import_db_server.default.data.products?.find((p) => p.id === params.productId);
  return product;
}
export {
  loader
};
//# sourceMappingURL=/build/routes/api/luggage/$productId-LHNWIWLT.js.map
