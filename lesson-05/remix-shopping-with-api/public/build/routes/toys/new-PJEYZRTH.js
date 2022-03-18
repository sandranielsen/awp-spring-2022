import {
  require_db
} from "/build/_shared/chunk-IIFDUCKI.js";
import {
  Breadcrumb,
  Button
} from "/build/_shared/chunk-DZOPDQBE.js";
import {
  PageHeader
} from "/build/_shared/chunk-5E2QZYEB.js";
import {
  Form
} from "/build/_shared/chunk-QHBNRT2M.js";
import {
  React,
  __toESM,
  init_react
} from "/build/_shared/chunk-P2FTGPOX.js";

// browser-route-module:C:\Users\sandr\Desktop\awp-spring-2022\lesson-05\remix-shopping-with-api\app\routes\toys\new.jsx?browser
init_react();

// app/routes/toys/new.jsx
init_react();
var import_db = __toESM(require_db());
function NewProduct() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Breadcrumb, {
    links: [{ to: "/toys", title: "Toys" }]
  }), /* @__PURE__ */ React.createElement(PageHeader, {
    title: "New product",
    subtitle: "Make it a good one"
  }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Form, {
    reloadDocument: true,
    method: "post",
    className: "w-64"
  }, /* @__PURE__ */ React.createElement(Label, {
    htmlFor: "title"
  }, "Title"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "title",
    id: "title",
    className: "border p-1 border-gray-200 w-full"
  }), /* @__PURE__ */ React.createElement(Label, {
    htmlFor: "category"
  }, "Category"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "category",
    id: "category",
    className: "border p-1 border-gray-200 w-full"
  }), /* @__PURE__ */ React.createElement(Label, {
    htmlFor: "description"
  }, "Description"), /* @__PURE__ */ React.createElement("textarea", {
    name: "description",
    id: "description",
    className: "border p-1 border-gray-200 w-full"
  }), /* @__PURE__ */ React.createElement(Label, {
    htmlFor: "image"
  }, "Image"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "image",
    id: "image",
    className: "border p-1 border-gray-200 w-full"
  }), /* @__PURE__ */ React.createElement(Label, {
    htmlFor: "rating"
  }, "Rating"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "rating",
    id: "rating",
    className: "border p-1 border-gray-200 w-full"
  }), /* @__PURE__ */ React.createElement(Label, {
    htmlFor: "price"
  }, "Price"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "price",
    title: "price",
    className: "border p-1 border-gray-200 w-full"
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "_method",
    value: "post"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "mt-3"
  }, /* @__PURE__ */ React.createElement(Button, {
    type: "submit"
  }, "Add product")))));
}
function Label({ children, ...rest }) {
  return /* @__PURE__ */ React.createElement("label", {
    className: "block font-semibold mt-3 mb-1",
    ...rest
  }, children);
}
export {
  NewProduct as default
};
//# sourceMappingURL=/build/routes/toys/new-PJEYZRTH.js.map
