import {
  Link,
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  useCatch
} from "/build/_shared/chunk-5YUOYWTM.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-325D37MS.js";

// browser-route-module:C:\Users\sandr\Desktop\awp-spring-2022\lesson-05\remix-shopping-with-api\app\root.jsx?browser
init_react();

// app/root.jsx
init_react();

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-7YNFN7S4.css";

// app/root.jsx
var links = () => [
  {
    rel: "stylesheet",
    href: tailwind_default
  }
];
var meta = () => ({
  description: "A collection of great recipes",
  keywords: "cooking, food, recipes"
});
function App() {
  return /* @__PURE__ */ React.createElement(Document, {
    title: "Remixed Recipes"
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(Outlet, null)));
}
function Document({ children, title }) {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), /* @__PURE__ */ React.createElement(Meta, null), /* @__PURE__ */ React.createElement(Links, null), /* @__PURE__ */ React.createElement("title", null, title)), /* @__PURE__ */ React.createElement("body", {
    className: "bg-slate-100 text-gray-800"
  }, children, true ? /* @__PURE__ */ React.createElement(LiveReload, null) : null, /* @__PURE__ */ React.createElement(Scripts, null)));
}
function Layout({ children }) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("header", {
    className: "container mx-auto"
  }, /* @__PURE__ */ React.createElement("nav", {
    className: "text-left"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "/",
    className: "group transition-colors mt-5 mb-6 block"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "block font-extrabold text-4xl text-amber-500 group-hover:text-orange-400 "
  }, "Kablamazon"), /* @__PURE__ */ React.createElement("span", {
    className: "block font-semibold italic text-gray-400 group-hover:text-orange-400 "
  }, "Shop for anything")))), /* @__PURE__ */ React.createElement("div", {
    className: "container mx-auto flex flex-row"
  }, /* @__PURE__ */ React.createElement("nav", {
    className: "bg-gray-50 border border-gray-200 rounded mr-6 shadow-inner"
  }, /* @__PURE__ */ React.createElement(MenuLink, {
    to: "/luggage"
  }, "Luggage"), /* @__PURE__ */ React.createElement(MenuLink, {
    to: "/books"
  }, "Books"), /* @__PURE__ */ React.createElement(MenuLink, {
    to: "/electronics"
  }, "Electronics"), /* @__PURE__ */ React.createElement(MenuLink, {
    to: "/computers"
  }, "Computers"), /* @__PURE__ */ React.createElement(MenuLink, {
    to: "/toys"
  }, "Toys"), /* @__PURE__ */ React.createElement(MenuLink, {
    to: "/music"
  }, "Music"), /* @__PURE__ */ React.createElement(MenuLink, {
    to: "/musical-instruments"
  }, "Musical instruments"), /* @__PURE__ */ React.createElement(MenuLink, {
    to: "/movies"
  }, "Movies"), /* @__PURE__ */ React.createElement(MenuLink, {
    to: "/sports"
  }, "Sports equipment"), /* @__PURE__ */ React.createElement(MenuLink, {
    to: "/video-games"
  }, "Video games"), /* @__PURE__ */ React.createElement(MenuLink, {
    to: "/home-and-kitchen"
  }, "Home and kitchen"), /* @__PURE__ */ React.createElement(MenuLink, {
    to: "/crafts"
  }, "Arts and crafts"), /* @__PURE__ */ React.createElement(MenuLink, {
    to: "/beauty"
  }, "Beauty and personal care"), /* @__PURE__ */ React.createElement(MenuLink, {
    to: "/womens-fashion"
  }, "Women's fashion"), /* @__PURE__ */ React.createElement(MenuLink, {
    to: "/mens-fashion"
  }, "Men's fashion"), /* @__PURE__ */ React.createElement(MenuLink, {
    to: "/kids-fashion"
  }, "Kid's fashion"), /* @__PURE__ */ React.createElement(MenuLink, {
    to: "/pet-supplies"
  }, "Pet supplies")), /* @__PURE__ */ React.createElement("main", {
    className: "flex-grow"
  }, children)));
}
function MenuLink({ to, children }) {
  return /* @__PURE__ */ React.createElement(NavLink, {
    to,
    className: ({ isActive }) => `block hover:bg-gray-200 transition-all text-lg font-bold px-4 py-1 ${isActive ? "bg-gray-200" : ""}`
  }, children);
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("div", {
    className: "bg-red-100 text-red-700 border border-red-200 p-4 rounded"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-2xl mb-3 font-bold"
  }, "Error"), /* @__PURE__ */ React.createElement("p", null, error.message))));
}
function CatchBoundary() {
  const caught = useCatch();
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("div", {
    className: "bg-red-100 text-red-700 border border-red-200 p-4 rounded"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-2xl mb-3 font-bold"
  }, "Whoops"), /* @__PURE__ */ React.createElement("p", null, caught.status, " ", caught.statusText))));
}
export {
  CatchBoundary,
  ErrorBoundary,
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-7VJPJHHX.js.map
