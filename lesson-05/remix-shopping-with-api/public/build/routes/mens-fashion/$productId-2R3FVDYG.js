import {
  require_db
} from "/build/_shared/chunk-A7NH5ADR.js";
import {
  Breadcrumb,
  Button
} from "/build/_shared/chunk-RBANOEL7.js";
import {
  PageHeader
} from "/build/_shared/chunk-OMAJUUDF.js";
import {
  useLoaderData
} from "/build/_shared/chunk-TYBDNJMF.js";
import {
  React,
  __toESM,
  init_react
} from "/build/_shared/chunk-325D37MS.js";

// browser-route-module:C:\Users\sandr\Desktop\awp-spring-2022\lesson-05\remix-shopping-with-api\app\routes\mens-fashion\$productId.jsx?browser
init_react();

// app/routes/mens-fashion/$productId.jsx
init_react();
var import_db = __toESM(require_db());
function Post() {
  const product = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Breadcrumb, {
    links: [{ to: "/mens-fashion", title: "Mens Fashion" }]
  }), /* @__PURE__ */ React.createElement(PageHeader, {
    title: product.title
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ React.createElement("img", {
    src: product.image,
    alt: "Product image",
    className: "w-3/12"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "pl-4"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "font-extrabold"
  }, product.description), /* @__PURE__ */ React.createElement("p", {
    className: "font-medium text-blue-800"
  }, product.price, " DKK"))), /* @__PURE__ */ React.createElement("form", {
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
//# sourceMappingURL=/build/routes/mens-fashion/$productId-2R3FVDYG.js.map
