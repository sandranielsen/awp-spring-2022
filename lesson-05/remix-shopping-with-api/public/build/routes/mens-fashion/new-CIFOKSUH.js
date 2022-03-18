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
import "/build/_shared/chunk-TYBDNJMF.js";
import {
  React,
  __toESM,
  init_react
} from "/build/_shared/chunk-325D37MS.js";

// browser-route-module:C:\Users\sandr\Desktop\awp-spring-2022\lesson-05\remix-shopping-with-api\app\routes\mens-fashion\new.jsx?browser
init_react();

// app/routes/mens-fashion/new.jsx
init_react();
var import_db = __toESM(require_db());
function NewProduct() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Breadcrumb, {
    links: [{ to: "/mens-fashion", title: "Men's fashion" }]
  }), /* @__PURE__ */ React.createElement(PageHeader, {
    title: "New product",
    subtitle: "Make it a good one"
  }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("form", {
    method: "post",
    className: "w-64"
  }, /* @__PURE__ */ React.createElement(Label, {
    htmlFor: "title"
  }, "Brand"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "title",
    id: "title",
    className: "border p-1 border-gray-200 w-full"
  }), /* @__PURE__ */ React.createElement(Label, {
    htmlFor: "title"
  }, "Price"), /* @__PURE__ */ React.createElement("input", {
    type: "number",
    name: "price",
    id: "price",
    className: "border p-1 border-gray-200 w-full"
  }), /* @__PURE__ */ React.createElement(Label, {
    htmlFor: "title"
  }, "Image url"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "image",
    id: "image",
    className: "border p-1 border-gray-200 w-full"
  }), /* @__PURE__ */ React.createElement(Label, {
    htmlFor: "description"
  }, "Description"), /* @__PURE__ */ React.createElement("textarea", {
    name: "description",
    id: "description",
    className: "border p-1 border-gray-200 w-full"
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
//# sourceMappingURL=/build/routes/mens-fashion/new-CIFOKSUH.js.map
