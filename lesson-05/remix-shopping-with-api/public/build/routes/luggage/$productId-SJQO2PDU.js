import {
  require_db
} from "/build/_shared/chunk-2ODWNJGC.js";
import {
  Breadcrumb,
  Button
} from "/build/_shared/chunk-TER27RKF.js";
import {
  PageHeader
} from "/build/_shared/chunk-5E2QZYEB.js";
import {
  useLoaderData
} from "/build/_shared/chunk-EBNT4Q6V.js";
import {
  React,
  __toESM,
  init_react
} from "/build/_shared/chunk-P2FTGPOX.js";

// browser-route-module:C:\Users\sandr\Desktop\awp-spring-2022\lesson-05\remix-shopping-with-api\app\routes\luggage\$productId.jsx?browser
init_react();

// app/routes/luggage/$productId.jsx
init_react();
var import_db = __toESM(require_db());
function Post() {
  const product = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Breadcrumb, {
    links: [{ to: "/luggage", title: "Luggage" }]
  }), /* @__PURE__ */ React.createElement(PageHeader, {
    title: product.title
  }), /* @__PURE__ */ React.createElement("p", null, product.description), /* @__PURE__ */ React.createElement("form", {
    method: "post",
    className: "mt-5 pt-2 border-t border-gray-200"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "_method",
    value: "delete"
  }), /* @__PURE__ */ React.createElement(Button, {
    type: "submit",
    destructive: true
  }, "Delete")));
}
export {
  Post as default
};
//# sourceMappingURL=/build/routes/luggage/$productId-SJQO2PDU.js.map
