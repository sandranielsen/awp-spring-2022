import {
  Button
} from "/build/_shared/chunk-CQRF2VFD.js";
import {
  PageHeader
} from "/build/_shared/chunk-OMAJUUDF.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-EDAYWJZC.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-325D37MS.js";

// browser-route-module:C:\Users\sandr\Desktop\awp-spring-2022\lesson-05\remix-shopping-with-api\app\routes\mens-fashion\index.jsx?browser
init_react();

// app/routes/mens-fashion/index.jsx
init_react();
function MensFashionItems() {
  const products = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(PageHeader, {
    title: "Men's fashion",
    subtitle: "Curated by Sarah and Emil"
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
  }, /* @__PURE__ */ React.createElement("img", {
    src: product.image
  }), /* @__PURE__ */ React.createElement("h3", {
    className: "font-bold"
  }, product.title), /* @__PURE__ */ React.createElement("h3", {
    className: "font-extralight"
  }, product.description), /* @__PURE__ */ React.createElement("h3", {
    className: "font-normal text-blue-800"
  }, product.price))))));
}
export {
  MensFashionItems as default
};
//# sourceMappingURL=/build/routes/mens-fashion/index-4TXXIA45.js.map
