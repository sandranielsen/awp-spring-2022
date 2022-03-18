import {
  Button
} from "/build/_shared/chunk-R4BCAYCI.js";
import {
  PageHeader
} from "/build/_shared/chunk-5E2QZYEB.js";
import {
  Form,
  Link,
  useLoaderData
} from "/build/_shared/chunk-V42DY7NZ.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-P2FTGPOX.js";

// browser-route-module:C:\Users\sandr\Desktop\awp-spring-2022\lesson-05\remix-shopping-with-api\app\routes\toys\index.jsx?browser
init_react();

// app/routes/toys/index.jsx
init_react();
function toysItems() {
  const products = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(PageHeader, {
    title: "Toys",
    subtitle: "Curated by Dan"
  }, /* @__PURE__ */ React.createElement(Button, {
    to: "new"
  }, "New product")), /* @__PURE__ */ React.createElement("ul", {
    className: "grid gap-4 grid-cols-3 "
  }, products.map((product) => /* @__PURE__ */ React.createElement("li", {
    key: product.id,
    className: "relative border-gray-200 bg-white after:transition-all after:duration-500 after:content.[*] after:absolute after:h-0.5 after:w-0 after:bg-blue-600 hover:after:w-full after:bottom-0"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: product.id,
    className: "font-semibold"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative card"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "relative block m-auto after:content.[See more] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-blue-600 h-72",
    src: product.image,
    alt: product.imageAlt
  }), /* @__PURE__ */ React.createElement("div", {
    className: "p-5"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-xl my-2 font-medium"
  }, product.title), /* @__PURE__ */ React.createElement("p", {
    className: "price font-bold text-blue-600"
  }, product.price, "$")))), /* @__PURE__ */ React.createElement(Form, {
    style: {
      display: "inline"
    },
    method: "post"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "id",
    value: product.id
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "createdAt",
    value: product.createdAt
  }), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    name: "_action",
    value: "delete"
  }, "Delete"))))));
}
export {
  toysItems as default
};
//# sourceMappingURL=/build/routes/toys/index-6CVGSUOD.js.map
