import {
  React,
  init_react
} from "/build/_shared/chunk-325D37MS.js";

// app/components/PageHeader.jsx
init_react();
function PageHeader({ title, subtitle, children }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-between mb-5"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", {
    className: "text-2xl font-bold"
  }, title), subtitle && /* @__PURE__ */ React.createElement("h2", {
    className: "font-semibold text-gray-400"
  }, subtitle)), children);
}

export {
  PageHeader
};
//# sourceMappingURL=/build/_shared/chunk-OMAJUUDF.js.map
