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
  Form,
  useActionData
} from "/build/_shared/chunk-V42DY7NZ.js";
import {
  React,
  __toESM,
  init_react
} from "/build/_shared/chunk-P2FTGPOX.js";

// browser-route-module:C:\Users\sandr\Desktop\awp-spring-2022\lesson-05\remix-shopping-with-api\app\routes\toys\$productId.update.jsx?browser
init_react();

// app/routes/toys/$productId.update.jsx
init_react();
var import_db = __toESM(require_db());
function UpdateProduct() {
  const actionData = useActionData();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Breadcrumb, {
    links: [{ to: "/toys", title: "Toys" }]
  }), /* @__PURE__ */ React.createElement(PageHeader, {
    title: "New product",
    subtitle: "Make it a good one"
  }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Form, {
    method: "post",
    className: "w-64"
  }, /* @__PURE__ */ React.createElement(Label, {
    htmlFor: "title"
  }, "Title"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "title",
    id: "title",
    className: "border p-1 border-gray-200 w-full",
    defaultValue: actionData?.values.title
  }), actionData?.errors.title ? /* @__PURE__ */ React.createElement("p", {
    style: { color: "red" }
  }, "Title is missing") : null, /* @__PURE__ */ React.createElement(Label, {
    htmlFor: "category"
  }, "Category"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "category",
    id: "category",
    className: "border p-1 border-gray-200 w-full",
    defaultValue: actionData?.values.category
  }), actionData?.errors.category ? /* @__PURE__ */ React.createElement("p", {
    style: { color: "red" }
  }, "Category is missing") : null, /* @__PURE__ */ React.createElement(Label, {
    htmlFor: "description"
  }, "Description"), /* @__PURE__ */ React.createElement("textarea", {
    name: "description",
    id: "description",
    className: "border p-1 border-gray-200 w-full",
    defaultValue: actionData?.values.description
  }), actionData?.errors.description ? /* @__PURE__ */ React.createElement("p", {
    style: { color: "red" }
  }, "Description is missing") : null, /* @__PURE__ */ React.createElement(Label, {
    htmlFor: "image"
  }, "Image"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "image",
    id: "image",
    className: "border p-1 border-gray-200 w-full",
    defaultValue: actionData?.values.image
  }), actionData?.errors.image ? /* @__PURE__ */ React.createElement("p", {
    style: { color: "red" }
  }, "Image is missing") : null, /* @__PURE__ */ React.createElement(Label, {
    htmlFor: "rating"
  }, "Rating"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "rating",
    id: "rating",
    className: "border p-1 border-gray-200 w-full",
    defaultValue: actionData?.values.rating
  }), actionData?.errors.rating ? /* @__PURE__ */ React.createElement("p", {
    style: { color: "red" }
  }, "Rating is missing") : null, /* @__PURE__ */ React.createElement(Label, {
    htmlFor: "price"
  }, "Price"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "price",
    title: "price",
    className: "border p-1 border-gray-200 w-full",
    defaultValue: actionData?.values.price
  }), actionData?.errors.price ? /* @__PURE__ */ React.createElement("p", {
    style: { color: "red" }
  }, "Price is missing") : null, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "_method",
    value: "put"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "mt-3"
  }, /* @__PURE__ */ React.createElement(Button, {
    type: "submit"
  }, "Update product")))));
}
function Label({ children, ...rest }) {
  return /* @__PURE__ */ React.createElement("label", {
    className: "block font-semibold mt-3 mb-1",
    ...rest
  }, children);
}
export {
  UpdateProduct as default
};
//# sourceMappingURL=/build/routes/toys/$productId.update-NP52MEEE.js.map
