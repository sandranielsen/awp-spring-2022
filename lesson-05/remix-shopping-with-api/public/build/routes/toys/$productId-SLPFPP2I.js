import {
  Button as Button2
} from "/build/_shared/chunk-R4BCAYCI.js";
import {
  require_db
} from "/build/_shared/chunk-IIFDUCKI.js";
import {
  Breadcrumb,
  Button
} from "/build/_shared/chunk-VR3E662Y.js";
import {
  PageHeader
} from "/build/_shared/chunk-5E2QZYEB.js";
import {
  useLoaderData
} from "/build/_shared/chunk-V42DY7NZ.js";
import {
  React,
  __toESM,
  init_react
} from "/build/_shared/chunk-P2FTGPOX.js";

// browser-route-module:C:\Users\sandr\Desktop\awp-spring-2022\lesson-05\remix-shopping-with-api\app\routes\toys\$productId.jsx?browser
init_react();

// app/routes/toys/$productId.jsx
init_react();
var import_db = __toESM(require_db());
function Post() {
  const product = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ React.createElement("img", {
    src: product.image,
    alt: product.imageAlt
  }), /* @__PURE__ */ React.createElement("div", {
    className: "details p-10"
  }, /* @__PURE__ */ React.createElement(Breadcrumb, {
    links: [{ to: "/toys", title: "Toys" }]
  }), /* @__PURE__ */ React.createElement(PageHeader, {
    title: product.title
  }), /* @__PURE__ */ React.createElement("h3", {
    className: "font-bold text-lg"
  }, product.price, "$"), /* @__PURE__ */ React.createElement("p", {
    className: "font-bold"
  }, "Reviews: ", /* @__PURE__ */ React.createElement("span", {
    className: "font-normal"
  }, product.rating)), /* @__PURE__ */ React.createElement("p", {
    className: "font-bold"
  }, "Category: ", /* @__PURE__ */ React.createElement("span", {
    className: "font-normal"
  }, product.category)), /* @__PURE__ */ React.createElement("p", {
    className: "pb-2 border-b border-gray-200"
  }, product.description), /* @__PURE__ */ React.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ React.createElement(Button2, {
    to: "update",
    className: ""
  }, "Update"), /* @__PURE__ */ React.createElement("form", {
    method: "post",
    className: "mt-2"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "_method",
    value: "delete"
  }), /* @__PURE__ */ React.createElement(Button, {
    type: "submit",
    destructive: true
  }, "Delete"))))));
}
export {
  Post as default
};
//# sourceMappingURL=/build/routes/toys/$productId-SLPFPP2I.js.map
