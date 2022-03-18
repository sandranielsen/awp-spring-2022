import {
  Link
} from "/build/_shared/chunk-BRSIWHMT.js";
import {
  React,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-P2FTGPOX.js";

// app/components/Button.jsx
init_react();
function Button({ type, destructive = false, children }) {
  let className = `${destructive ? "bg-red-500" : "bg-blue-500"} text-white font-bold py-2 px-4 rounded my-3 inline-block`;
  return /* @__PURE__ */ React.createElement("button", {
    className,
    type
  }, children);
}

// app/components/Breadcrumb.jsx
init_react();
var import_react = __toESM(require_react());
function Breadcrumb({ links = [] }) {
  const breadcrumbs = [{ to: "/", title: "Home" }, ...links];
  return /* @__PURE__ */ import_react.default.createElement("nav", {
    className: "mb-4 text-sm font-semibold"
  }, breadcrumbs.map((link, i) => /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, {
    key: i
  }, i !== 0 && /* @__PURE__ */ import_react.default.createElement("span", {
    className: "inline-block mx-2 text-gray-400"
  }, "/"), /* @__PURE__ */ import_react.default.createElement(Link, {
    to: link.to,
    className: "text-blue-700 hover:underline"
  }, link.title))));
}

export {
  Button,
  Breadcrumb
};
//# sourceMappingURL=/build/_shared/chunk-5DBJYSFJ.js.map
