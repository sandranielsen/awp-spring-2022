import {
  Button
} from "/build/_shared/chunk-HSBXTERK.js";
import {
  PageHeader
} from "/build/_shared/chunk-5E2QZYEB.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-U3I23I6F.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-P2FTGPOX.js";

// browser-route-module:C:\Users\sandr\Desktop\awp-spring-2022\lesson-05\remix-shopping-with-api\app\routes\luggage\index.jsx?browser
init_react();

// app/routes/luggage/index.jsx
init_react();
function LuggageItems() {
  const products = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(PageHeader, {
    title: "Luggage",
    subtitle: "Curated by Dan"
  }, /* @__PURE__ */ React.createElement(Button, {
    to: "new"
  }, "New product")), /* @__PURE__ */ React.createElement("ul", {
    className: "grid gap-4 grid-cols-3"
  }, products.map((product) => /* @__PURE__ */ React.createElement("li", {
    key: product.id,
    className: "rounded border border-gray-200 bg-gray-50 p-5"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: product.id,
    className: "font-semibold"
  }, /* @__PURE__ */ React.createElement("h3", null, product.title))))));
}
export {
  LuggageItems as default
};
//# sourceMappingURL=/build/routes/luggage/index-DFNGO4AK.js.map
