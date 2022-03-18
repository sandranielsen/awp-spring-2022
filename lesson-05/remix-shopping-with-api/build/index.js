var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:C:\Users\sandr\Desktop\awp-spring-2022\lesson-05\remix-shopping-with-api\app\root.jsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix2 = __toESM(require_remix());

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-TWFEZZAH.css";

// route:C:\Users\sandr\Desktop\awp-spring-2022\lesson-05\remix-shopping-with-api\app\root.jsx
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
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null)));
}
function Document({ children, title }) {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null), /* @__PURE__ */ React.createElement("title", null, title)), /* @__PURE__ */ React.createElement("body", {
    className: "bg-slate-100 text-gray-800"
  }, children, true ? /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null) : null, /* @__PURE__ */ React.createElement(import_remix2.Scripts, null)));
}
function Layout({ children }) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("header", {
    className: "container mx-auto"
  }, /* @__PURE__ */ React.createElement("nav", {
    className: "text-left"
  }, /* @__PURE__ */ React.createElement(import_remix2.Link, {
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
  return /* @__PURE__ */ React.createElement(import_remix2.NavLink, {
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
  const caught = (0, import_remix2.useCatch)();
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("div", {
    className: "bg-red-100 text-red-700 border border-red-200 p-4 rounded"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-2xl mb-3 font-bold"
  }, "Whoops"), /* @__PURE__ */ React.createElement("p", null, caught.status, " ", caught.statusText))));
}

// route:C:\Users\sandr\Desktop\awp-spring-2022\lesson-05\remix-shopping-with-api\app\routes\api\luggage\$productId.js
var productId_exports = {};
__export(productId_exports, {
  loader: () => loader
});
init_react();

// app/db/luggage/db.server.js
init_react();
var import_path3 = __toESM(require("path"));

// node_modules/lowdb/lib/index.js
init_react();

// node_modules/lowdb/lib/adapters/JSONFile.js
init_react();

// node_modules/lowdb/lib/adapters/TextFile.js
init_react();
var import_fs2 = __toESM(require("fs"), 1);

// node_modules/steno/lib/index.js
init_react();
var import_fs = __toESM(require("fs"), 1);
var import_path = __toESM(require("path"), 1);
var __classPrivateFieldSet = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Writer_instances;
var _Writer_filename;
var _Writer_tempFilename;
var _Writer_locked;
var _Writer_prev;
var _Writer_next;
var _Writer_nextPromise;
var _Writer_nextData;
var _Writer_add;
var _Writer_write;
_Writer_filename = /* @__PURE__ */ new WeakMap(), _Writer_tempFilename = /* @__PURE__ */ new WeakMap(), _Writer_locked = /* @__PURE__ */ new WeakMap(), _Writer_prev = /* @__PURE__ */ new WeakMap(), _Writer_next = /* @__PURE__ */ new WeakMap(), _Writer_nextPromise = /* @__PURE__ */ new WeakMap(), _Writer_nextData = /* @__PURE__ */ new WeakMap(), _Writer_instances = /* @__PURE__ */ new WeakSet(), _Writer_add = function _Writer_add2(data) {
  __classPrivateFieldSet(this, _Writer_nextData, data, "f");
  __classPrivateFieldSet(this, _Writer_nextPromise, __classPrivateFieldGet(this, _Writer_nextPromise, "f") || new Promise((resolve, reject) => {
    __classPrivateFieldSet(this, _Writer_next, [resolve, reject], "f");
  }), "f");
  return new Promise((resolve, reject) => {
    var _a;
    (_a = __classPrivateFieldGet(this, _Writer_nextPromise, "f")) === null || _a === void 0 ? void 0 : _a.then(resolve).catch(reject);
  });
}, _Writer_write = async function _Writer_write2(data) {
  var _a, _b;
  __classPrivateFieldSet(this, _Writer_locked, true, "f");
  try {
    await import_fs.default.promises.writeFile(__classPrivateFieldGet(this, _Writer_tempFilename, "f"), data, "utf-8");
    await import_fs.default.promises.rename(__classPrivateFieldGet(this, _Writer_tempFilename, "f"), __classPrivateFieldGet(this, _Writer_filename, "f"));
    (_a = __classPrivateFieldGet(this, _Writer_prev, "f")) === null || _a === void 0 ? void 0 : _a[0]();
  } catch (err) {
    (_b = __classPrivateFieldGet(this, _Writer_prev, "f")) === null || _b === void 0 ? void 0 : _b[1](err);
    throw err;
  } finally {
    __classPrivateFieldSet(this, _Writer_locked, false, "f");
    __classPrivateFieldSet(this, _Writer_prev, __classPrivateFieldGet(this, _Writer_next, "f"), "f");
    __classPrivateFieldSet(this, _Writer_next, __classPrivateFieldSet(this, _Writer_nextPromise, null, "f"), "f");
    if (__classPrivateFieldGet(this, _Writer_nextData, "f") !== null) {
      const nextData = __classPrivateFieldGet(this, _Writer_nextData, "f");
      __classPrivateFieldSet(this, _Writer_nextData, null, "f");
      await this.write(nextData);
    }
  }
};

// node_modules/lowdb/lib/adapters/TextFile.js
var _TextFile_filename;
var _TextFile_writer;
_TextFile_filename = /* @__PURE__ */ new WeakMap(), _TextFile_writer = /* @__PURE__ */ new WeakMap();

// node_modules/lowdb/lib/adapters/JSONFile.js
var _JSONFile_adapter;
_JSONFile_adapter = /* @__PURE__ */ new WeakMap();

// node_modules/lowdb/lib/adapters/JSONFileSync.js
init_react();

// node_modules/lowdb/lib/adapters/TextFileSync.js
init_react();
var import_fs3 = __toESM(require("fs"), 1);
var import_path2 = __toESM(require("path"), 1);
var __classPrivateFieldSet2 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet2 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _TextFileSync_tempFilename;
var _TextFileSync_filename;
var TextFileSync = class {
  constructor(filename) {
    _TextFileSync_tempFilename.set(this, void 0);
    _TextFileSync_filename.set(this, void 0);
    __classPrivateFieldSet2(this, _TextFileSync_filename, filename, "f");
    __classPrivateFieldSet2(this, _TextFileSync_tempFilename, import_path2.default.join(import_path2.default.dirname(filename), `.${import_path2.default.basename(filename)}.tmp`), "f");
  }
  read() {
    let data;
    try {
      data = import_fs3.default.readFileSync(__classPrivateFieldGet2(this, _TextFileSync_filename, "f"), "utf-8");
    } catch (e) {
      if (e.code === "ENOENT") {
        return null;
      }
      throw e;
    }
    return data;
  }
  write(str) {
    import_fs3.default.writeFileSync(__classPrivateFieldGet2(this, _TextFileSync_tempFilename, "f"), str);
    import_fs3.default.renameSync(__classPrivateFieldGet2(this, _TextFileSync_tempFilename, "f"), __classPrivateFieldGet2(this, _TextFileSync_filename, "f"));
  }
};
_TextFileSync_tempFilename = /* @__PURE__ */ new WeakMap(), _TextFileSync_filename = /* @__PURE__ */ new WeakMap();

// node_modules/lowdb/lib/adapters/JSONFileSync.js
var __classPrivateFieldSet3 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet3 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _JSONFileSync_adapter;
var JSONFileSync = class {
  constructor(filename) {
    _JSONFileSync_adapter.set(this, void 0);
    __classPrivateFieldSet3(this, _JSONFileSync_adapter, new TextFileSync(filename), "f");
  }
  read() {
    const data = __classPrivateFieldGet3(this, _JSONFileSync_adapter, "f").read();
    if (data === null) {
      return null;
    } else {
      return JSON.parse(data);
    }
  }
  write(obj) {
    __classPrivateFieldGet3(this, _JSONFileSync_adapter, "f").write(JSON.stringify(obj, null, 2));
  }
};
_JSONFileSync_adapter = /* @__PURE__ */ new WeakMap();

// node_modules/lowdb/lib/adapters/LocalStorage.js
init_react();
var _LocalStorage_key;
_LocalStorage_key = /* @__PURE__ */ new WeakMap();

// node_modules/lowdb/lib/adapters/Memory.js
init_react();
var _Memory_data;
_Memory_data = /* @__PURE__ */ new WeakMap();

// node_modules/lowdb/lib/adapters/MemorySync.js
init_react();
var _MemorySync_data;
_MemorySync_data = /* @__PURE__ */ new WeakMap();

// node_modules/lowdb/lib/Low.js
init_react();

// node_modules/lowdb/lib/MissingAdapterError.js
init_react();
var MissingAdapterError = class extends Error {
  constructor() {
    super();
    this.message = "Missing Adapter";
  }
};

// node_modules/lowdb/lib/LowSync.js
init_react();
var LowSync = class {
  constructor(adapter3) {
    Object.defineProperty(this, "adapter", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "data", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: null
    });
    if (adapter3) {
      this.adapter = adapter3;
    } else {
      throw new MissingAdapterError();
    }
  }
  read() {
    this.data = this.adapter.read();
  }
  write() {
    if (this.data !== null) {
      this.adapter.write(this.data);
    }
  }
};

// app/db/luggage/db.server.js
var file = import_path3.default.join(__dirname, "../app/db/luggage/db.json");
var adapter = new JSONFileSync(file);
var db = new LowSync(adapter);
db.read();
var db_server_default = db;

// route:C:\Users\sandr\Desktop\awp-spring-2022\lesson-05\remix-shopping-with-api\app\routes\api\luggage\$productId.js
async function loader({ params }) {
  var _a;
  const product = (_a = db_server_default.data.products) == null ? void 0 : _a.find((p) => p.id === params.productId);
  return product;
}

// route:C:\Users\sandr\Desktop\awp-spring-2022\lesson-05\remix-shopping-with-api\app\routes\toys\$productId.update.jsx
var productId_update_exports = {};
__export(productId_update_exports, {
  action: () => action,
  default: () => UpdateProduct
});
init_react();
var import_remix4 = __toESM(require_remix());

// app/components/Button.jsx
init_react();
function Button({ type, destructive = false, children }) {
  let className = `${destructive ? "bg-red-500" : "bg-blue-500"} text-white font-bold py-2 px-4 rounded my-3 inline-block`;
  return /* @__PURE__ */ React.createElement("button", {
    className,
    type
  }, children);
}

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

// app/components/Breadcrumb.jsx
init_react();
var import_react = __toESM(require("react"));
var import_remix3 = __toESM(require_remix());
function Breadcrumb({ links: links2 = [] }) {
  const breadcrumbs = [{ to: "/", title: "Home" }, ...links2];
  return /* @__PURE__ */ import_react.default.createElement("nav", {
    className: "mb-4 text-sm font-semibold"
  }, breadcrumbs.map((link, i) => /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, {
    key: i
  }, i !== 0 && /* @__PURE__ */ import_react.default.createElement("span", {
    className: "inline-block mx-2 text-gray-400"
  }, "/"), /* @__PURE__ */ import_react.default.createElement(import_remix3.Link, {
    to: link.to,
    className: "text-blue-700 hover:underline"
  }, link.title))));
}

// app/db/toys/db.server.js
init_react();
var import_path4 = __toESM(require("path"));
var file2 = import_path4.default.join(__dirname, "../app/db/toys/db.json");
var adapter2 = new JSONFileSync(file2);
var db2 = new LowSync(adapter2);
db2.read();
var db_server_default2 = db2;

// route:C:\Users\sandr\Desktop\awp-spring-2022\lesson-05\remix-shopping-with-api\app\routes\toys\$productId.update.jsx
var action = async ({ request, params }) => {
  await new Promise((res) => setTimeout(res, 1e3));
  const form = await request.formData();
  const title = form.get("title");
  const description = form.get("description");
  const price = form.get("price");
  const image = form.get("image");
  const category = form.get("category");
  const rating = form.get("rating");
  const errors = {};
  if (!title)
    errors.title = true;
  if (!description)
    errors.description = true;
  if (!price)
    errors.price = true;
  if (!image)
    errors.image = true;
  if (!category)
    errors.category = true;
  if (!rating)
    errors.rating = true;
  if (Object.keys(errors).length) {
    const values = Object.fromEntries(form);
    return (0, import_remix4.json)({ errors, values });
  }
  await fetch(`http://localhost:3000/api/toys/${params.productId}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
      description,
      price,
      image,
      category,
      rating,
      id: params.productId
    }),
    headers: {
      "Content-Type": "application/json"
    }
  });
  return (0, import_remix4.redirect)(`/toys/${params.productId}`);
};
function UpdateProduct() {
  const actionData = (0, import_remix4.useActionData)();
  const transition = (0, import_remix4.useTransition)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Breadcrumb, {
    links: [{ to: "/toys", title: "Toys" }]
  }), /* @__PURE__ */ React.createElement(PageHeader, {
    title: "New product",
    subtitle: "Make it a good one"
  }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_remix4.Form, {
    method: "post",
    className: "w-64"
  }, /* @__PURE__ */ React.createElement(Label, {
    htmlFor: "title"
  }, "Title"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "title",
    id: "title",
    className: "border p-1 border-gray-200 w-full",
    defaultValue: actionData == null ? void 0 : actionData.values.title
  }), (actionData == null ? void 0 : actionData.errors.title) ? /* @__PURE__ */ React.createElement("p", {
    style: { color: "red" }
  }, "Title is missing") : null, /* @__PURE__ */ React.createElement(Label, {
    htmlFor: "category"
  }, "Category"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "category",
    id: "category",
    className: "border p-1 border-gray-200 w-full",
    defaultValue: actionData == null ? void 0 : actionData.values.category
  }), (actionData == null ? void 0 : actionData.errors.category) ? /* @__PURE__ */ React.createElement("p", {
    style: { color: "red" }
  }, "Category is missing") : null, /* @__PURE__ */ React.createElement(Label, {
    htmlFor: "description"
  }, "Description"), /* @__PURE__ */ React.createElement("textarea", {
    name: "description",
    id: "description",
    className: "border p-1 border-gray-200 w-full",
    defaultValue: actionData == null ? void 0 : actionData.values.description
  }), (actionData == null ? void 0 : actionData.errors.description) ? /* @__PURE__ */ React.createElement("p", {
    style: { color: "red" }
  }, "Description is missing") : null, /* @__PURE__ */ React.createElement(Label, {
    htmlFor: "image"
  }, "Image"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "image",
    id: "image",
    className: "border p-1 border-gray-200 w-full",
    defaultValue: actionData == null ? void 0 : actionData.values.image
  }), (actionData == null ? void 0 : actionData.errors.image) ? /* @__PURE__ */ React.createElement("p", {
    style: { color: "red" }
  }, "Image is missing") : null, /* @__PURE__ */ React.createElement(Label, {
    htmlFor: "rating"
  }, "Rating"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "rating",
    id: "rating",
    className: "border p-1 border-gray-200 w-full",
    defaultValue: actionData == null ? void 0 : actionData.values.rating
  }), (actionData == null ? void 0 : actionData.errors.rating) ? /* @__PURE__ */ React.createElement("p", {
    style: { color: "red" }
  }, "Rating is missing") : null, /* @__PURE__ */ React.createElement(Label, {
    htmlFor: "price"
  }, "Price"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "price",
    title: "price",
    className: "border p-1 border-gray-200 w-full",
    defaultValue: actionData == null ? void 0 : actionData.values.price
  }), (actionData == null ? void 0 : actionData.errors.price) ? /* @__PURE__ */ React.createElement("p", {
    style: { color: "red" }
  }, "Price is missing") : null, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "_method",
    value: "put"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "mt-3"
  }, /* @__PURE__ */ React.createElement(Button, {
    type: "submit"
  }, transition.state === "submitting" ? "Updating..." : "Update product")))));
}
function Label(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ React.createElement("label", __spreadValues({
    className: "block font-semibold mt-3 mb-1"
  }, rest), children);
}

// route:C:\Users\sandr\Desktop\awp-spring-2022\lesson-05\remix-shopping-with-api\app\routes\api\toys\$productId.js
var productId_exports2 = {};
__export(productId_exports2, {
  action: () => action2,
  loader: () => loader2
});
init_react();
var import_remix5 = __toESM(require_remix());
async function loader2({ params }) {
  var _a;
  const product = (_a = db_server_default2.data.products) == null ? void 0 : _a.find((p) => p.id === params.productId);
  return product;
}
async function action2({ request, params }) {
  switch (request.method) {
    case "PUT": {
      const body = await request.json();
      db_server_default2.data.products = db_server_default2.data.products.map((p) => {
        if (p.id == params.productId) {
          return body;
        } else {
          return p;
        }
      });
      db_server_default2.write();
      return (0, import_remix5.json)(body, {
        status: 202
      });
    }
    case "DELETE": {
      db_server_default2.data.products = db_server_default2.data.products.filter((p) => p.id !== params.productId);
      db_server_default2.write();
      return new Response(null, { status: 204 });
    }
  }
}

// route:C:\Users\sandr\Desktop\awp-spring-2022\lesson-05\remix-shopping-with-api\app\routes\luggage\$productId.jsx
var productId_exports3 = {};
__export(productId_exports3, {
  action: () => action3,
  default: () => Post,
  loader: () => loader3
});
init_react();
var import_remix6 = __toESM(require_remix());
var import_remix7 = __toESM(require_remix());
var loader3 = async function({ params }) {
  const product = await fetch(`http://localhost:3000/api/luggage/${params.productId}`);
  if (!product) {
    throw new Error("Product not found");
  }
  return product;
};
var action3 = async function({ request, params }) {
  const form = await request.formData();
  if (form.get("_method") === "delete") {
    throw new Error("Delete not implemented");
    return (0, import_remix6.redirect)("/luggage");
  }
};
function Post() {
  const product = (0, import_remix7.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Breadcrumb, {
    links: [{ to: "/luggage", title: "Luggage" }]
  }), /* @__PURE__ */ React.createElement(PageHeader, {
    title: product.title
  }), /* @__PURE__ */ React.createElement("p", null, product.description), /* @__PURE__ */ React.createElement("form", {
    method: "post",
    className: "mt-5 pt-2 border-t border-gray-200"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "_method",
    value: "delete"
  }), /* @__PURE__ */ React.createElement(Button, {
    type: "submit",
    destructive: true
  }, "Delete")));
}

// route:C:\Users\sandr\Desktop\awp-spring-2022\lesson-05\remix-shopping-with-api\app\routes\api\luggage\index.js
var luggage_exports = {};
__export(luggage_exports, {
  loader: () => loader4
});
init_react();
async function loader4() {
  return db_server_default.data.products ?? [];
}

// route:C:\Users\sandr\Desktop\awp-spring-2022\lesson-05\remix-shopping-with-api\app\routes\toys\$productId.jsx
var productId_exports4 = {};
__export(productId_exports4, {
  action: () => action4,
  default: () => Post2,
  loader: () => loader5
});
init_react();
var import_remix9 = __toESM(require_remix());
var import_remix10 = __toESM(require_remix());

// app/components/LinkButton.jsx
init_react();
var import_remix8 = __toESM(require_remix());
function Button2({ to, children }) {
  return /* @__PURE__ */ React.createElement(import_remix8.Link, {
    className: "bg-blue-500 text-white font-bold py-2 px-4 mr-2 rounded my-3 inline-block",
    to
  }, children);
}

// route:C:\Users\sandr\Desktop\awp-spring-2022\lesson-05\remix-shopping-with-api\app\routes\toys\$productId.jsx
var loader5 = async function({ params }) {
  const product = await fetch(`http://localhost:3000/api/toys/${params.productId}`);
  if (!product) {
    throw new Error("Product not found");
  }
  return product;
};
var action4 = async function({ request, params }) {
  const form = await request.formData();
  if (form.get("_method") === "delete") {
    await fetch(`http://localhost:3000/api/toys/${params.productId}`, {
      method: "DELETE"
    });
    return (0, import_remix9.redirect)("/toys");
  }
};
function Post2() {
  const product = (0, import_remix10.useLoaderData)();
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

// route:C:\Users\sandr\Desktop\awp-spring-2022\lesson-05\remix-shopping-with-api\app\routes\api\toys\index.js
var toys_exports = {};
__export(toys_exports, {
  action: () => action5,
  loader: () => loader6
});
init_react();
async function loader6() {
  return db_server_default2.data.products ?? [];
}
async function action5({ request, params }) {
  var _a;
  switch (request.method) {
    case "POST": {
      const body = await request.json();
      (_a = db_server_default2.data.products) == null ? void 0 : _a.push(body);
      db_server_default2.write();
      return json(body, {
        status: 201
      });
    }
  }
}

// route:C:\Users\sandr\Desktop\awp-spring-2022\lesson-05\remix-shopping-with-api\app\routes\luggage\index.jsx
var luggage_exports2 = {};
__export(luggage_exports2, {
  default: () => LuggageItems,
  loader: () => loader7
});
init_react();
var import_remix11 = __toESM(require_remix());
async function loader7() {
  return await fetch("http://localhost:3000/api/luggage");
}
function LuggageItems() {
  const products = (0, import_remix11.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(PageHeader, {
    title: "Luggage",
    subtitle: "Curated by Dan"
  }, /* @__PURE__ */ React.createElement(Button2, {
    to: "new"
  }, "New product")), /* @__PURE__ */ React.createElement("ul", {
    className: "grid gap-4 grid-cols-3"
  }, products.map((product) => /* @__PURE__ */ React.createElement("li", {
    key: product.id,
    className: "rounded border border-gray-200 bg-gray-50 p-5"
  }, /* @__PURE__ */ React.createElement(import_remix11.Link, {
    to: product.id,
    className: "font-semibold"
  }, /* @__PURE__ */ React.createElement("h3", null, product.title))))));
}

// route:C:\Users\sandr\Desktop\awp-spring-2022\lesson-05\remix-shopping-with-api\app\routes\luggage\new.jsx
var new_exports = {};
__export(new_exports, {
  action: () => action6,
  default: () => NewProduct
});
init_react();
var import_remix12 = __toESM(require_remix());
var action6 = async ({ request }) => {
  const form = await request.formData();
  const title = form.get("title");
  const description = form.get("description");
  const uuid = new Date().getTime().toString(16);
  throw new Error("POST handler not implemented");
  return (0, import_remix12.redirect)(`/luggage/${uuid}`);
};
function NewProduct() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Breadcrumb, {
    links: [{ to: "/luggage", title: "Luggage" }]
  }), /* @__PURE__ */ React.createElement(PageHeader, {
    title: "New product",
    subtitle: "Make it a good one"
  }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("form", {
    method: "post",
    className: "w-64"
  }, /* @__PURE__ */ React.createElement(Label2, {
    htmlFor: "title"
  }, "Title"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "title",
    id: "title",
    className: "border p-1 border-gray-200 w-full"
  }), /* @__PURE__ */ React.createElement(Label2, {
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
function Label2(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ React.createElement("label", __spreadValues({
    className: "block font-semibold mt-3 mb-1"
  }, rest), children);
}

// route:C:\Users\sandr\Desktop\awp-spring-2022\lesson-05\remix-shopping-with-api\app\routes\toys\index.jsx
var toys_exports2 = {};
__export(toys_exports2, {
  default: () => toysItems,
  loader: () => loader8
});
init_react();
var import_remix13 = __toESM(require_remix());
async function loader8() {
  return await fetch("http://localhost:3000/api/toys");
}
function toysItems() {
  const products = (0, import_remix13.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(PageHeader, {
    title: "Toys",
    subtitle: "Curated by Dan"
  }, /* @__PURE__ */ React.createElement(Button2, {
    to: "new"
  }, "New product")), /* @__PURE__ */ React.createElement("ul", {
    className: "grid gap-4 grid-cols-3 "
  }, products.map((product) => /* @__PURE__ */ React.createElement("li", {
    key: product.id,
    className: "relative border-gray-200 bg-white after:transition-all after:duration-500 after:content.[*] after:absolute after:h-0.5 after:w-0 after:bg-blue-600 hover:after:w-full after:bottom-0"
  }, /* @__PURE__ */ React.createElement(import_remix13.Link, {
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
  }, product.price, "$")))), /* @__PURE__ */ React.createElement(import_remix13.Form, {
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

// route:C:\Users\sandr\Desktop\awp-spring-2022\lesson-05\remix-shopping-with-api\app\routes\toys\new.jsx
var new_exports2 = {};
__export(new_exports2, {
  action: () => action7,
  default: () => NewProduct2
});
init_react();
var import_remix14 = __toESM(require_remix());
var action7 = async ({ request, params }) => {
  await new Promise((res) => setTimeout(res, 1e3));
  const form = await request.formData();
  const title = form.get("title");
  const description = form.get("description");
  const price = form.get("price");
  const image = form.get("image");
  const category = form.get("category");
  const rating = form.get("rating");
  const uuid = new Date().getTime().toString(16);
  const errors = {};
  if (!title)
    errors.title = true;
  if (!description)
    errors.description = true;
  if (!price)
    errors.price = true;
  if (!image)
    errors.image = true;
  if (!category)
    errors.category = true;
  if (!rating)
    errors.rating = true;
  if (Object.keys(errors).length) {
    const values = Object.fromEntries(form);
    return (0, import_remix14.json)({ errors, values });
  }
  if (form.get("_method") === "post") {
    await fetch(`http://localhost:3000/api/toys`, {
      method: "POST",
      body: JSON.stringify({
        title,
        description,
        price,
        image,
        category,
        rating,
        id: uuid
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    return (0, import_remix14.redirect)(`/toys/${uuid}`);
  }
};
function NewProduct2() {
  const actionData = (0, import_remix14.useActionData)();
  const transition = (0, import_remix14.useTransition)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Breadcrumb, {
    links: [{ to: "/toys", title: "Toys" }]
  }), /* @__PURE__ */ React.createElement(PageHeader, {
    title: "New product",
    subtitle: "Make it a good one"
  }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_remix14.Form, {
    method: "post",
    className: "w-64"
  }, /* @__PURE__ */ React.createElement(Label3, {
    htmlFor: "title"
  }, "Title"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "title",
    id: "title",
    className: "border p-1 border-gray-200 w-full",
    defaultValue: actionData == null ? void 0 : actionData.values.title
  }), (actionData == null ? void 0 : actionData.errors.title) ? /* @__PURE__ */ React.createElement("p", {
    style: { color: "red" }
  }, "Title is missing") : null, /* @__PURE__ */ React.createElement(Label3, {
    htmlFor: "category"
  }, "Category"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "category",
    id: "category",
    className: "border p-1 border-gray-200 w-full",
    defaultValue: actionData == null ? void 0 : actionData.values.category
  }), (actionData == null ? void 0 : actionData.errors.category) ? /* @__PURE__ */ React.createElement("p", {
    style: { color: "red" }
  }, "Category is missing") : null, /* @__PURE__ */ React.createElement(Label3, {
    htmlFor: "description"
  }, "Description"), /* @__PURE__ */ React.createElement("textarea", {
    name: "description",
    id: "description",
    className: "border p-1 border-gray-200 w-full",
    defaultValue: actionData == null ? void 0 : actionData.values.description
  }), (actionData == null ? void 0 : actionData.errors.description) ? /* @__PURE__ */ React.createElement("p", {
    style: { color: "red" }
  }, "Description is missing") : null, /* @__PURE__ */ React.createElement(Label3, {
    htmlFor: "image"
  }, "Image"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "image",
    id: "image",
    className: "border p-1 border-gray-200 w-full",
    defaultValue: actionData == null ? void 0 : actionData.values.image
  }), (actionData == null ? void 0 : actionData.errors.image) ? /* @__PURE__ */ React.createElement("p", {
    style: { color: "red" }
  }, "Image is missing") : null, /* @__PURE__ */ React.createElement(Label3, {
    htmlFor: "rating"
  }, "Rating"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "rating",
    id: "rating",
    className: "border p-1 border-gray-200 w-full"
  }), (actionData == null ? void 0 : actionData.errors.rating) ? /* @__PURE__ */ React.createElement("p", {
    style: { color: "red" }
  }, "Rating is missing") : null, /* @__PURE__ */ React.createElement(Label3, {
    htmlFor: "price"
  }, "Price"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "price",
    title: "price",
    className: "border p-1 border-gray-200 w-full",
    defaultValue: actionData == null ? void 0 : actionData.values.price
  }), (actionData == null ? void 0 : actionData.errors.price) ? /* @__PURE__ */ React.createElement("p", {
    style: { color: "red" }
  }, "Price is missing") : null, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "_method",
    value: "post"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "mt-3"
  }, /* @__PURE__ */ React.createElement(Button, {
    type: "submit"
  }, transition.state === "submitting" ? "Adding..." : "Add product")))));
}
function Label3(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ React.createElement("label", __spreadValues({
    className: "block font-semibold mt-3 mb-1"
  }, rest), children);
}

// route:C:\Users\sandr\Desktop\awp-spring-2022\lesson-05\remix-shopping-with-api\app\routes\index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Home
});
init_react();
function Home() {
  return /* @__PURE__ */ React.createElement("section", {
    className: "flex-grow items-center justify-center"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-4xl font-bold text-gray-400"
  }, "The web's premiere destination for shopping absolutely", " ", /* @__PURE__ */ React.createElement("i", {
    className: "italic"
  }, "anything"), "."));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "ae5558f6", "entry": { "module": "/build/entry.client-RVD7BJYC.js", "imports": ["/build/_shared/chunk-V42DY7NZ.js", "/build/_shared/chunk-P2FTGPOX.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-QIT72FIG.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/api/luggage/$productId": { "id": "routes/api/luggage/$productId", "parentId": "root", "path": "api/luggage/:productId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/api/luggage/$productId-LHNWIWLT.js", "imports": ["/build/_shared/chunk-FWJGU6LC.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/api/luggage/index": { "id": "routes/api/luggage/index", "parentId": "root", "path": "api/luggage", "index": true, "caseSensitive": void 0, "module": "/build/routes/api/luggage/index-TWEEPI7N.js", "imports": ["/build/_shared/chunk-FWJGU6LC.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/api/toys/$productId": { "id": "routes/api/toys/$productId", "parentId": "root", "path": "api/toys/:productId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/api/toys/$productId-JFK4EPNM.js", "imports": ["/build/_shared/chunk-PJIP5UTI.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/api/toys/index": { "id": "routes/api/toys/index", "parentId": "root", "path": "api/toys", "index": true, "caseSensitive": void 0, "module": "/build/routes/api/toys/index-FY2MIWJN.js", "imports": ["/build/_shared/chunk-PJIP5UTI.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-E7K2JYFP.js", "imports": ["/build/_shared/chunk-R4BCAYCI.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/luggage/$productId": { "id": "routes/luggage/$productId", "parentId": "root", "path": "luggage/:productId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/luggage/$productId-OVHD3BM5.js", "imports": ["/build/_shared/chunk-2ODWNJGC.js", "/build/_shared/chunk-VR3E662Y.js", "/build/_shared/chunk-5E2QZYEB.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/luggage/index": { "id": "routes/luggage/index", "parentId": "root", "path": "luggage", "index": true, "caseSensitive": void 0, "module": "/build/routes/luggage/index-U33T4JJC.js", "imports": ["/build/_shared/chunk-R4BCAYCI.js", "/build/_shared/chunk-5E2QZYEB.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/luggage/new": { "id": "routes/luggage/new", "parentId": "root", "path": "luggage/new", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/luggage/new-4M3V3KET.js", "imports": ["/build/_shared/chunk-2ODWNJGC.js", "/build/_shared/chunk-VR3E662Y.js", "/build/_shared/chunk-5E2QZYEB.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/toys/$productId": { "id": "routes/toys/$productId", "parentId": "root", "path": "toys/:productId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/toys/$productId-SLPFPP2I.js", "imports": ["/build/_shared/chunk-R4BCAYCI.js", "/build/_shared/chunk-IIFDUCKI.js", "/build/_shared/chunk-VR3E662Y.js", "/build/_shared/chunk-5E2QZYEB.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/toys/$productId.update": { "id": "routes/toys/$productId.update", "parentId": "root", "path": "toys/:productId/update", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/toys/$productId.update-KNRIGIIE.js", "imports": ["/build/_shared/chunk-IIFDUCKI.js", "/build/_shared/chunk-VR3E662Y.js", "/build/_shared/chunk-5E2QZYEB.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/toys/index": { "id": "routes/toys/index", "parentId": "root", "path": "toys", "index": true, "caseSensitive": void 0, "module": "/build/routes/toys/index-6CVGSUOD.js", "imports": ["/build/_shared/chunk-R4BCAYCI.js", "/build/_shared/chunk-5E2QZYEB.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/toys/new": { "id": "routes/toys/new", "parentId": "root", "path": "toys/new", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/toys/new-WSBIQAX3.js", "imports": ["/build/_shared/chunk-IIFDUCKI.js", "/build/_shared/chunk-VR3E662Y.js", "/build/_shared/chunk-5E2QZYEB.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-AE5558F6.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/api/luggage/$productId": {
    id: "routes/api/luggage/$productId",
    parentId: "root",
    path: "api/luggage/:productId",
    index: void 0,
    caseSensitive: void 0,
    module: productId_exports
  },
  "routes/toys/$productId.update": {
    id: "routes/toys/$productId.update",
    parentId: "root",
    path: "toys/:productId/update",
    index: void 0,
    caseSensitive: void 0,
    module: productId_update_exports
  },
  "routes/api/toys/$productId": {
    id: "routes/api/toys/$productId",
    parentId: "root",
    path: "api/toys/:productId",
    index: void 0,
    caseSensitive: void 0,
    module: productId_exports2
  },
  "routes/luggage/$productId": {
    id: "routes/luggage/$productId",
    parentId: "root",
    path: "luggage/:productId",
    index: void 0,
    caseSensitive: void 0,
    module: productId_exports3
  },
  "routes/api/luggage/index": {
    id: "routes/api/luggage/index",
    parentId: "root",
    path: "api/luggage",
    index: true,
    caseSensitive: void 0,
    module: luggage_exports
  },
  "routes/toys/$productId": {
    id: "routes/toys/$productId",
    parentId: "root",
    path: "toys/:productId",
    index: void 0,
    caseSensitive: void 0,
    module: productId_exports4
  },
  "routes/api/toys/index": {
    id: "routes/api/toys/index",
    parentId: "root",
    path: "api/toys",
    index: true,
    caseSensitive: void 0,
    module: toys_exports
  },
  "routes/luggage/index": {
    id: "routes/luggage/index",
    parentId: "root",
    path: "luggage",
    index: true,
    caseSensitive: void 0,
    module: luggage_exports2
  },
  "routes/luggage/new": {
    id: "routes/luggage/new",
    parentId: "root",
    path: "luggage/new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
  },
  "routes/toys/index": {
    id: "routes/toys/index",
    parentId: "root",
    path: "toys",
    index: true,
    caseSensitive: void 0,
    module: toys_exports2
  },
  "routes/toys/new": {
    id: "routes/toys/new",
    parentId: "root",
    path: "toys/new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports2
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIuanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xcc2FuZHJcXERlc2t0b3BcXGF3cC1zcHJpbmctMjAyMlxcbGVzc29uLTA1XFxyZW1peC1zaG9wcGluZy13aXRoLWFwaVxcYXBwXFxyb290LmpzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXHNhbmRyXFxEZXNrdG9wXFxhd3Atc3ByaW5nLTIwMjJcXGxlc3Nvbi0wNVxccmVtaXgtc2hvcHBpbmctd2l0aC1hcGlcXGFwcFxccm91dGVzXFxhcGlcXGx1Z2dhZ2VcXCRwcm9kdWN0SWQuanMiLCAiLi4vYXBwL2RiL2x1Z2dhZ2UvZGIuc2VydmVyLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9sb3dkYi9saWIvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvd2RiL2xpYi9hZGFwdGVycy9KU09ORmlsZS5qcyIsICIuLi9ub2RlX21vZHVsZXMvbG93ZGIvbGliL2FkYXB0ZXJzL1RleHRGaWxlLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9zdGVuby9saWIvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvd2RiL2xpYi9hZGFwdGVycy9KU09ORmlsZVN5bmMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvd2RiL2xpYi9hZGFwdGVycy9UZXh0RmlsZVN5bmMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvd2RiL2xpYi9hZGFwdGVycy9Mb2NhbFN0b3JhZ2UuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvd2RiL2xpYi9hZGFwdGVycy9NZW1vcnkuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvd2RiL2xpYi9hZGFwdGVycy9NZW1vcnlTeW5jLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9sb3dkYi9saWIvTG93LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9sb3dkYi9saWIvTWlzc2luZ0FkYXB0ZXJFcnJvci5qcyIsICIuLi9ub2RlX21vZHVsZXMvbG93ZGIvbGliL0xvd1N5bmMuanMiLCAicm91dGU6QzpcXFVzZXJzXFxzYW5kclxcRGVza3RvcFxcYXdwLXNwcmluZy0yMDIyXFxsZXNzb24tMDVcXHJlbWl4LXNob3BwaW5nLXdpdGgtYXBpXFxhcHBcXHJvdXRlc1xcdG95c1xcJHByb2R1Y3RJZC51cGRhdGUuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0J1dHRvbi5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvUGFnZUhlYWRlci5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvQnJlYWRjcnVtYi5qc3giLCAiLi4vYXBwL2RiL3RveXMvZGIuc2VydmVyLmpzIiwgInJvdXRlOkM6XFxVc2Vyc1xcc2FuZHJcXERlc2t0b3BcXGF3cC1zcHJpbmctMjAyMlxcbGVzc29uLTA1XFxyZW1peC1zaG9wcGluZy13aXRoLWFwaVxcYXBwXFxyb3V0ZXNcXGFwaVxcdG95c1xcJHByb2R1Y3RJZC5qcyIsICJyb3V0ZTpDOlxcVXNlcnNcXHNhbmRyXFxEZXNrdG9wXFxhd3Atc3ByaW5nLTIwMjJcXGxlc3Nvbi0wNVxccmVtaXgtc2hvcHBpbmctd2l0aC1hcGlcXGFwcFxccm91dGVzXFxsdWdnYWdlXFwkcHJvZHVjdElkLmpzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXHNhbmRyXFxEZXNrdG9wXFxhd3Atc3ByaW5nLTIwMjJcXGxlc3Nvbi0wNVxccmVtaXgtc2hvcHBpbmctd2l0aC1hcGlcXGFwcFxccm91dGVzXFxhcGlcXGx1Z2dhZ2VcXGluZGV4LmpzIiwgInJvdXRlOkM6XFxVc2Vyc1xcc2FuZHJcXERlc2t0b3BcXGF3cC1zcHJpbmctMjAyMlxcbGVzc29uLTA1XFxyZW1peC1zaG9wcGluZy13aXRoLWFwaVxcYXBwXFxyb3V0ZXNcXHRveXNcXCRwcm9kdWN0SWQuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0xpbmtCdXR0b24uanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xcc2FuZHJcXERlc2t0b3BcXGF3cC1zcHJpbmctMjAyMlxcbGVzc29uLTA1XFxyZW1peC1zaG9wcGluZy13aXRoLWFwaVxcYXBwXFxyb3V0ZXNcXGFwaVxcdG95c1xcaW5kZXguanMiLCAicm91dGU6QzpcXFVzZXJzXFxzYW5kclxcRGVza3RvcFxcYXdwLXNwcmluZy0yMDIyXFxsZXNzb24tMDVcXHJlbWl4LXNob3BwaW5nLXdpdGgtYXBpXFxhcHBcXHJvdXRlc1xcbHVnZ2FnZVxcaW5kZXguanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xcc2FuZHJcXERlc2t0b3BcXGF3cC1zcHJpbmctMjAyMlxcbGVzc29uLTA1XFxyZW1peC1zaG9wcGluZy13aXRoLWFwaVxcYXBwXFxyb3V0ZXNcXGx1Z2dhZ2VcXG5ldy5qc3giLCAicm91dGU6QzpcXFVzZXJzXFxzYW5kclxcRGVza3RvcFxcYXdwLXNwcmluZy0yMDIyXFxsZXNzb24tMDVcXHJlbWl4LXNob3BwaW5nLXdpdGgtYXBpXFxhcHBcXHJvdXRlc1xcdG95c1xcaW5kZXguanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xcc2FuZHJcXERlc2t0b3BcXGF3cC1zcHJpbmctMjAyMlxcbGVzc29uLTA1XFxyZW1peC1zaG9wcGluZy13aXRoLWFwaVxcYXBwXFxyb3V0ZXNcXHRveXNcXG5ldy5qc3giLCAicm91dGU6QzpcXFVzZXJzXFxzYW5kclxcRGVza3RvcFxcYXdwLXNwcmluZy0yMDIyXFxsZXNzb24tMDVcXHJlbWl4LXNob3BwaW5nLXdpdGgtYXBpXFxhcHBcXHJvdXRlc1xcaW5kZXguanN4IiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMi4yXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMi4yXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4yLjJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcblxuIiwgImV4cG9ydCAqIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjsiLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcc2FuZHJcXFxcRGVza3RvcFxcXFxhd3Atc3ByaW5nLTIwMjJcXFxcbGVzc29uLTA1XFxcXHJlbWl4LXNob3BwaW5nLXdpdGgtYXBpXFxcXGFwcFxcXFxlbnRyeS5zZXJ2ZXIuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHNhbmRyXFxcXERlc2t0b3BcXFxcYXdwLXNwcmluZy0yMDIyXFxcXGxlc3Nvbi0wNVxcXFxyZW1peC1zaG9wcGluZy13aXRoLWFwaVxcXFxhcHBcXFxccm9vdC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcc2FuZHJcXFxcRGVza3RvcFxcXFxhd3Atc3ByaW5nLTIwMjJcXFxcbGVzc29uLTA1XFxcXHJlbWl4LXNob3BwaW5nLXdpdGgtYXBpXFxcXGFwcFxcXFxyb3V0ZXNcXFxcYXBpXFxcXGx1Z2dhZ2VcXFxcJHByb2R1Y3RJZC5qc1wiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxzYW5kclxcXFxEZXNrdG9wXFxcXGF3cC1zcHJpbmctMjAyMlxcXFxsZXNzb24tMDVcXFxccmVtaXgtc2hvcHBpbmctd2l0aC1hcGlcXFxcYXBwXFxcXHJvdXRlc1xcXFx0b3lzXFxcXCRwcm9kdWN0SWQudXBkYXRlLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxzYW5kclxcXFxEZXNrdG9wXFxcXGF3cC1zcHJpbmctMjAyMlxcXFxsZXNzb24tMDVcXFxccmVtaXgtc2hvcHBpbmctd2l0aC1hcGlcXFxcYXBwXFxcXHJvdXRlc1xcXFxhcGlcXFxcdG95c1xcXFwkcHJvZHVjdElkLmpzXCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHNhbmRyXFxcXERlc2t0b3BcXFxcYXdwLXNwcmluZy0yMDIyXFxcXGxlc3Nvbi0wNVxcXFxyZW1peC1zaG9wcGluZy13aXRoLWFwaVxcXFxhcHBcXFxccm91dGVzXFxcXGx1Z2dhZ2VcXFxcJHByb2R1Y3RJZC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcc2FuZHJcXFxcRGVza3RvcFxcXFxhd3Atc3ByaW5nLTIwMjJcXFxcbGVzc29uLTA1XFxcXHJlbWl4LXNob3BwaW5nLXdpdGgtYXBpXFxcXGFwcFxcXFxyb3V0ZXNcXFxcYXBpXFxcXGx1Z2dhZ2VcXFxcaW5kZXguanNcIjtcbmltcG9ydCAqIGFzIHJvdXRlNiBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcc2FuZHJcXFxcRGVza3RvcFxcXFxhd3Atc3ByaW5nLTIwMjJcXFxcbGVzc29uLTA1XFxcXHJlbWl4LXNob3BwaW5nLXdpdGgtYXBpXFxcXGFwcFxcXFxyb3V0ZXNcXFxcdG95c1xcXFwkcHJvZHVjdElkLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU3IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxzYW5kclxcXFxEZXNrdG9wXFxcXGF3cC1zcHJpbmctMjAyMlxcXFxsZXNzb24tMDVcXFxccmVtaXgtc2hvcHBpbmctd2l0aC1hcGlcXFxcYXBwXFxcXHJvdXRlc1xcXFxhcGlcXFxcdG95c1xcXFxpbmRleC5qc1wiO1xuaW1wb3J0ICogYXMgcm91dGU4IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxzYW5kclxcXFxEZXNrdG9wXFxcXGF3cC1zcHJpbmctMjAyMlxcXFxsZXNzb24tMDVcXFxccmVtaXgtc2hvcHBpbmctd2l0aC1hcGlcXFxcYXBwXFxcXHJvdXRlc1xcXFxsdWdnYWdlXFxcXGluZGV4LmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU5IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxzYW5kclxcXFxEZXNrdG9wXFxcXGF3cC1zcHJpbmctMjAyMlxcXFxsZXNzb24tMDVcXFxccmVtaXgtc2hvcHBpbmctd2l0aC1hcGlcXFxcYXBwXFxcXHJvdXRlc1xcXFxsdWdnYWdlXFxcXG5ldy5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTAgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHNhbmRyXFxcXERlc2t0b3BcXFxcYXdwLXNwcmluZy0yMDIyXFxcXGxlc3Nvbi0wNVxcXFxyZW1peC1zaG9wcGluZy13aXRoLWFwaVxcXFxhcHBcXFxccm91dGVzXFxcXHRveXNcXFxcaW5kZXguanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTExIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxzYW5kclxcXFxEZXNrdG9wXFxcXGF3cC1zcHJpbmctMjAyMlxcXFxsZXNzb24tMDVcXFxccmVtaXgtc2hvcHBpbmctd2l0aC1hcGlcXFxcYXBwXFxcXHJvdXRlc1xcXFx0b3lzXFxcXG5ldy5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTIgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHNhbmRyXFxcXERlc2t0b3BcXFxcYXdwLXNwcmluZy0yMDIyXFxcXGxlc3Nvbi0wNVxcXFxyZW1peC1zaG9wcGluZy13aXRoLWFwaVxcXFxhcHBcXFxccm91dGVzXFxcXGluZGV4LmpzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvYXBpL2x1Z2dhZ2UvJHByb2R1Y3RJZFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYXBpL2x1Z2dhZ2UvJHByb2R1Y3RJZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhcGkvbHVnZ2FnZS86cHJvZHVjdElkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy90b3lzLyRwcm9kdWN0SWQudXBkYXRlXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy90b3lzLyRwcm9kdWN0SWQudXBkYXRlXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInRveXMvOnByb2R1Y3RJZC91cGRhdGVcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL2FwaS90b3lzLyRwcm9kdWN0SWRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2FwaS90b3lzLyRwcm9kdWN0SWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYXBpL3RveXMvOnByb2R1Y3RJZFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvbHVnZ2FnZS8kcHJvZHVjdElkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sdWdnYWdlLyRwcm9kdWN0SWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibHVnZ2FnZS86cHJvZHVjdElkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9LFxuICBcInJvdXRlcy9hcGkvbHVnZ2FnZS9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYXBpL2x1Z2dhZ2UvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYXBpL2x1Z2dhZ2VcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTVcbiAgICB9LFxuICBcInJvdXRlcy90b3lzLyRwcm9kdWN0SWRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3RveXMvJHByb2R1Y3RJZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJ0b3lzLzpwcm9kdWN0SWRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNlxuICAgIH0sXG4gIFwicm91dGVzL2FwaS90b3lzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hcGkvdG95cy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhcGkvdG95c1wiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlN1xuICAgIH0sXG4gIFwicm91dGVzL2x1Z2dhZ2UvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2x1Z2dhZ2UvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibHVnZ2FnZVwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOFxuICAgIH0sXG4gIFwicm91dGVzL2x1Z2dhZ2UvbmV3XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sdWdnYWdlL25ld1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJsdWdnYWdlL25ld1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU5XG4gICAgfSxcbiAgXCJyb3V0ZXMvdG95cy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvdG95cy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJ0b3lzXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMFxuICAgIH0sXG4gIFwicm91dGVzL3RveXMvbmV3XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy90b3lzL25ld1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJ0b3lzL25ld1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMVxuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTJcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXHJcbiAgcmVxdWVzdCxcclxuICByZXNwb25zZVN0YXR1c0NvZGUsXHJcbiAgcmVzcG9uc2VIZWFkZXJzLFxyXG4gIHJlbWl4Q29udGV4dFxyXG4pIHtcclxuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcclxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XHJcbiAgKTtcclxuXHJcbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcclxuXHJcbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XHJcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcclxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcclxuICB9KTtcclxufVxyXG4iLCAiaW1wb3J0IHtcclxuICBMaW5rLFxyXG4gIE5hdkxpbmssXHJcbiAgT3V0bGV0LFxyXG4gIExpdmVSZWxvYWQsXHJcbiAgTGlua3MsXHJcbiAgTWV0YSxcclxuICBTY3JpcHRzLFxyXG4gIHVzZUNhdGNoLFxyXG59IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJ+L3RhaWx3aW5kLmNzc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpbmtzID0gKCkgPT4gW1xyXG4gIHtcclxuICAgIHJlbDogXCJzdHlsZXNoZWV0XCIsXHJcbiAgICBocmVmOiBzdHlsZXMsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBtZXRhID0gKCkgPT4gKHtcclxuICBkZXNjcmlwdGlvbjogXCJBIGNvbGxlY3Rpb24gb2YgZ3JlYXQgcmVjaXBlc1wiLFxyXG4gIGtleXdvcmRzOiBcImNvb2tpbmcsIGZvb2QsIHJlY2lwZXNcIixcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxEb2N1bWVudCB0aXRsZT1cIlJlbWl4ZWQgUmVjaXBlc1wiPlxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxPdXRsZXQgLz5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICA8L0RvY3VtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIERvY3VtZW50KHsgY2hpbGRyZW4sIHRpdGxlIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XHJcbiAgICAgIDxoZWFkPlxyXG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cclxuICAgICAgICA8TWV0YSAvPlxyXG4gICAgICAgIDxMaW5rcyAvPlxyXG4gICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cclxuICAgICAgPC9oZWFkPlxyXG4gICAgICA8Ym9keSBjbGFzc05hbWU9XCJiZy1zbGF0ZS0xMDAgdGV4dC1ncmF5LTgwMFwiPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICB7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiA/IDxMaXZlUmVsb2FkIC8+IDogbnVsbH1cclxuICAgICAgICA8U2NyaXB0cyAvPlxyXG4gICAgICA8L2JvZHk+XHJcbiAgICA8L2h0bWw+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvXCI+XHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJ0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgIDxMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT1cImdyb3VwIHRyYW5zaXRpb24tY29sb3JzIG10LTUgbWItNiBibG9ja1wiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9jayBmb250LWV4dHJhYm9sZCB0ZXh0LTR4bCB0ZXh0LWFtYmVyLTUwMCBncm91cC1ob3Zlcjp0ZXh0LW9yYW5nZS00MDAgXCI+XHJcbiAgICAgICAgICAgICAgS2FibGFtYXpvblxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtc2VtaWJvbGQgaXRhbGljIHRleHQtZ3JheS00MDAgZ3JvdXAtaG92ZXI6dGV4dC1vcmFuZ2UtNDAwIFwiPlxyXG4gICAgICAgICAgICAgIFNob3AgZm9yIGFueXRoaW5nXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gZmxleCBmbGV4LXJvd1wiPlxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQgbXItNiBzaGFkb3ctaW5uZXJcIj5cclxuICAgICAgICAgIDxNZW51TGluayB0bz1cIi9sdWdnYWdlXCI+THVnZ2FnZTwvTWVudUxpbms+XHJcbiAgICAgICAgICA8TWVudUxpbmsgdG89XCIvYm9va3NcIj5Cb29rczwvTWVudUxpbms+XHJcbiAgICAgICAgICA8TWVudUxpbmsgdG89XCIvZWxlY3Ryb25pY3NcIj5FbGVjdHJvbmljczwvTWVudUxpbms+XHJcbiAgICAgICAgICA8TWVudUxpbmsgdG89XCIvY29tcHV0ZXJzXCI+Q29tcHV0ZXJzPC9NZW51TGluaz5cclxuICAgICAgICAgIDxNZW51TGluayB0bz1cIi90b3lzXCI+VG95czwvTWVudUxpbms+XHJcbiAgICAgICAgICA8TWVudUxpbmsgdG89XCIvbXVzaWNcIj5NdXNpYzwvTWVudUxpbms+XHJcbiAgICAgICAgICA8TWVudUxpbmsgdG89XCIvbXVzaWNhbC1pbnN0cnVtZW50c1wiPk11c2ljYWwgaW5zdHJ1bWVudHM8L01lbnVMaW5rPlxyXG4gICAgICAgICAgPE1lbnVMaW5rIHRvPVwiL21vdmllc1wiPk1vdmllczwvTWVudUxpbms+XHJcbiAgICAgICAgICA8TWVudUxpbmsgdG89XCIvc3BvcnRzXCI+U3BvcnRzIGVxdWlwbWVudDwvTWVudUxpbms+XHJcbiAgICAgICAgICA8TWVudUxpbmsgdG89XCIvdmlkZW8tZ2FtZXNcIj5WaWRlbyBnYW1lczwvTWVudUxpbms+XHJcbiAgICAgICAgICA8TWVudUxpbmsgdG89XCIvaG9tZS1hbmQta2l0Y2hlblwiPkhvbWUgYW5kIGtpdGNoZW48L01lbnVMaW5rPlxyXG4gICAgICAgICAgPE1lbnVMaW5rIHRvPVwiL2NyYWZ0c1wiPkFydHMgYW5kIGNyYWZ0czwvTWVudUxpbms+XHJcbiAgICAgICAgICA8TWVudUxpbmsgdG89XCIvYmVhdXR5XCI+QmVhdXR5IGFuZCBwZXJzb25hbCBjYXJlPC9NZW51TGluaz5cclxuICAgICAgICAgIDxNZW51TGluayB0bz1cIi93b21lbnMtZmFzaGlvblwiPldvbWVuJ3MgZmFzaGlvbjwvTWVudUxpbms+XHJcbiAgICAgICAgICA8TWVudUxpbmsgdG89XCIvbWVucy1mYXNoaW9uXCI+TWVuJ3MgZmFzaGlvbjwvTWVudUxpbms+XHJcbiAgICAgICAgICA8TWVudUxpbmsgdG89XCIva2lkcy1mYXNoaW9uXCI+S2lkJ3MgZmFzaGlvbjwvTWVudUxpbms+XHJcbiAgICAgICAgICA8TWVudUxpbmsgdG89XCIvcGV0LXN1cHBsaWVzXCI+UGV0IHN1cHBsaWVzPC9NZW51TGluaz5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4LWdyb3dcIj57Y2hpbGRyZW59PC9tYWluPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE1lbnVMaW5rKHsgdG8sIGNoaWxkcmVuIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPE5hdkxpbmtcclxuICAgICAgdG89e3RvfVxyXG4gICAgICBjbGFzc05hbWU9eyh7IGlzQWN0aXZlIH0pID0+XHJcbiAgICAgICAgYGJsb2NrIGhvdmVyOmJnLWdyYXktMjAwIHRyYW5zaXRpb24tYWxsIHRleHQtbGcgZm9udC1ib2xkIHB4LTQgcHktMSAke1xyXG4gICAgICAgICAgaXNBY3RpdmUgPyBcImJnLWdyYXktMjAwXCIgOiBcIlwiXHJcbiAgICAgICAgfWBcclxuICAgICAgfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9OYXZMaW5rPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBFcnJvckJvdW5kYXJ5KHsgZXJyb3IgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RG9jdW1lbnQ+XHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1yZWQtMTAwIHRleHQtcmVkLTcwMCBib3JkZXIgYm9yZGVyLXJlZC0yMDAgcC00IHJvdW5kZWRcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtYi0zIGZvbnQtYm9sZFwiPkVycm9yPC9oMT5cclxuICAgICAgICAgIDxwPntlcnJvci5tZXNzYWdlfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICA8L0RvY3VtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDYXRjaEJvdW5kYXJ5KCkge1xyXG4gIGNvbnN0IGNhdWdodCA9IHVzZUNhdGNoKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxEb2N1bWVudD5cclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXJlZC0xMDAgdGV4dC1yZWQtNzAwIGJvcmRlciBib3JkZXItcmVkLTIwMCBwLTQgcm91bmRlZFwiPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIG1iLTMgZm9udC1ib2xkXCI+V2hvb3BzPC9oMT5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICB7Y2F1Z2h0LnN0YXR1c30ge2NhdWdodC5zdGF0dXNUZXh0fVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIDwvRG9jdW1lbnQ+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IGRiIGZyb20gXCJ+L2RiL2x1Z2dhZ2UvZGIuc2VydmVyLmpzXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZGVyKHsgcGFyYW1zIH0pIHtcclxuICBjb25zdCBwcm9kdWN0ID0gZGIuZGF0YS5wcm9kdWN0cz8uZmluZCgocCkgPT4gcC5pZCA9PT0gcGFyYW1zLnByb2R1Y3RJZCk7XHJcbiAgcmV0dXJuIHByb2R1Y3Q7XHJcbn1cclxuIiwgImltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCB7IEpTT05GaWxlU3luYywgTG93U3luYyB9IGZyb20gXCJsb3dkYlwiO1xyXG5cclxuY29uc3QgZmlsZSA9IHBhdGguam9pbihfX2Rpcm5hbWUsIFwiLi4vYXBwL2RiL2x1Z2dhZ2UvZGIuanNvblwiKTtcclxuY29uc3QgYWRhcHRlciA9IG5ldyBKU09ORmlsZVN5bmMoZmlsZSk7XHJcbmNvbnN0IGRiID0gbmV3IExvd1N5bmMoYWRhcHRlcik7XHJcblxyXG5kYi5yZWFkKCk7XHJcbmV4cG9ydCBkZWZhdWx0IGRiO1xyXG4iLCAiZXhwb3J0ICogZnJvbSAnLi9hZGFwdGVycy9KU09ORmlsZS5qcyc7XG5leHBvcnQgKiBmcm9tICcuL2FkYXB0ZXJzL0pTT05GaWxlU3luYy5qcyc7XG5leHBvcnQgKiBmcm9tICcuL2FkYXB0ZXJzL0xvY2FsU3RvcmFnZS5qcyc7XG5leHBvcnQgKiBmcm9tICcuL2FkYXB0ZXJzL01lbW9yeS5qcyc7XG5leHBvcnQgKiBmcm9tICcuL2FkYXB0ZXJzL01lbW9yeVN5bmMuanMnO1xuZXhwb3J0ICogZnJvbSAnLi9hZGFwdGVycy9UZXh0RmlsZS5qcyc7XG5leHBvcnQgKiBmcm9tICcuL2FkYXB0ZXJzL1RleHRGaWxlU3luYy5qcyc7XG5leHBvcnQgKiBmcm9tICcuL0xvdy5qcyc7XG5leHBvcnQgKiBmcm9tICcuL0xvd1N5bmMuanMnO1xuIiwgInZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcbn07XG52YXIgX19jbGFzc1ByaXZhdGVGaWVsZEdldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZEdldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufTtcbnZhciBfSlNPTkZpbGVfYWRhcHRlcjtcbmltcG9ydCB7IFRleHRGaWxlIH0gZnJvbSAnLi9UZXh0RmlsZS5qcyc7XG5leHBvcnQgY2xhc3MgSlNPTkZpbGUge1xuICAgIGNvbnN0cnVjdG9yKGZpbGVuYW1lKSB7XG4gICAgICAgIF9KU09ORmlsZV9hZGFwdGVyLnNldCh0aGlzLCB2b2lkIDApO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9KU09ORmlsZV9hZGFwdGVyLCBuZXcgVGV4dEZpbGUoZmlsZW5hbWUpLCBcImZcIik7XG4gICAgfVxuICAgIGFzeW5jIHJlYWQoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9KU09ORmlsZV9hZGFwdGVyLCBcImZcIikucmVhZCgpO1xuICAgICAgICBpZiAoZGF0YSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB3cml0ZShvYmopIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0pTT05GaWxlX2FkYXB0ZXIsIFwiZlwiKS53cml0ZShKU09OLnN0cmluZ2lmeShvYmosIG51bGwsIDIpKTtcbiAgICB9XG59XG5fSlNPTkZpbGVfYWRhcHRlciA9IG5ldyBXZWFrTWFwKCk7XG4iLCAidmFyIF9fY2xhc3NQcml2YXRlRmllbGRTZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRTZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xufTtcbnZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59O1xudmFyIF9UZXh0RmlsZV9maWxlbmFtZSwgX1RleHRGaWxlX3dyaXRlcjtcbmltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgeyBXcml0ZXIgfSBmcm9tICdzdGVubyc7XG5leHBvcnQgY2xhc3MgVGV4dEZpbGUge1xuICAgIGNvbnN0cnVjdG9yKGZpbGVuYW1lKSB7XG4gICAgICAgIF9UZXh0RmlsZV9maWxlbmFtZS5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX1RleHRGaWxlX3dyaXRlci5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfVGV4dEZpbGVfZmlsZW5hbWUsIGZpbGVuYW1lLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1RleHRGaWxlX3dyaXRlciwgbmV3IFdyaXRlcihmaWxlbmFtZSksIFwiZlwiKTtcbiAgICB9XG4gICAgYXN5bmMgcmVhZCgpIHtcbiAgICAgICAgbGV0IGRhdGE7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBkYXRhID0gYXdhaXQgZnMucHJvbWlzZXMucmVhZEZpbGUoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfVGV4dEZpbGVfZmlsZW5hbWUsIFwiZlwiKSwgJ3V0Zi04Jyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGlmIChlLmNvZGUgPT09ICdFTk9FTlQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICB3cml0ZShzdHIpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1RleHRGaWxlX3dyaXRlciwgXCJmXCIpLndyaXRlKHN0cik7XG4gICAgfVxufVxuX1RleHRGaWxlX2ZpbGVuYW1lID0gbmV3IFdlYWtNYXAoKSwgX1RleHRGaWxlX3dyaXRlciA9IG5ldyBXZWFrTWFwKCk7XG4iLCAidmFyIF9fY2xhc3NQcml2YXRlRmllbGRTZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRTZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xufTtcbnZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59O1xudmFyIF9Xcml0ZXJfaW5zdGFuY2VzLCBfV3JpdGVyX2ZpbGVuYW1lLCBfV3JpdGVyX3RlbXBGaWxlbmFtZSwgX1dyaXRlcl9sb2NrZWQsIF9Xcml0ZXJfcHJldiwgX1dyaXRlcl9uZXh0LCBfV3JpdGVyX25leHRQcm9taXNlLCBfV3JpdGVyX25leHREYXRhLCBfV3JpdGVyX2FkZCwgX1dyaXRlcl93cml0ZTtcbmltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbi8vIFJldHVybnMgYSB0ZW1wb3JhcnkgZmlsZVxuLy8gRXhhbXBsZTogZm9yIC9zb21lL2ZpbGUgd2lsbCByZXR1cm4gL3NvbWUvLmZpbGUudG1wXG5mdW5jdGlvbiBnZXRUZW1wRmlsZW5hbWUoZmlsZSkge1xuICAgIHJldHVybiBwYXRoLmpvaW4ocGF0aC5kaXJuYW1lKGZpbGUpLCAnLicgKyBwYXRoLmJhc2VuYW1lKGZpbGUpICsgJy50bXAnKTtcbn1cbmV4cG9ydCBjbGFzcyBXcml0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGZpbGVuYW1lKSB7XG4gICAgICAgIF9Xcml0ZXJfaW5zdGFuY2VzLmFkZCh0aGlzKTtcbiAgICAgICAgX1dyaXRlcl9maWxlbmFtZS5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX1dyaXRlcl90ZW1wRmlsZW5hbWUuc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9Xcml0ZXJfbG9ja2VkLnNldCh0aGlzLCBmYWxzZSk7XG4gICAgICAgIF9Xcml0ZXJfcHJldi5zZXQodGhpcywgbnVsbCk7XG4gICAgICAgIF9Xcml0ZXJfbmV4dC5zZXQodGhpcywgbnVsbCk7XG4gICAgICAgIF9Xcml0ZXJfbmV4dFByb21pc2Uuc2V0KHRoaXMsIG51bGwpO1xuICAgICAgICBfV3JpdGVyX25leHREYXRhLnNldCh0aGlzLCBudWxsXG4gICAgICAgIC8vIEZpbGUgaXMgbG9ja2VkLCBhZGQgZGF0YSBmb3IgbGF0ZXJcbiAgICAgICAgKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfV3JpdGVyX2ZpbGVuYW1lLCBmaWxlbmFtZSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9Xcml0ZXJfdGVtcEZpbGVuYW1lLCBnZXRUZW1wRmlsZW5hbWUoZmlsZW5hbWUpLCBcImZcIik7XG4gICAgfVxuICAgIGFzeW5jIHdyaXRlKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1dyaXRlcl9sb2NrZWQsIFwiZlwiKSA/IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1dyaXRlcl9pbnN0YW5jZXMsIFwibVwiLCBfV3JpdGVyX2FkZCkuY2FsbCh0aGlzLCBkYXRhKSA6IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1dyaXRlcl9pbnN0YW5jZXMsIFwibVwiLCBfV3JpdGVyX3dyaXRlKS5jYWxsKHRoaXMsIGRhdGEpO1xuICAgIH1cbn1cbl9Xcml0ZXJfZmlsZW5hbWUgPSBuZXcgV2Vha01hcCgpLCBfV3JpdGVyX3RlbXBGaWxlbmFtZSA9IG5ldyBXZWFrTWFwKCksIF9Xcml0ZXJfbG9ja2VkID0gbmV3IFdlYWtNYXAoKSwgX1dyaXRlcl9wcmV2ID0gbmV3IFdlYWtNYXAoKSwgX1dyaXRlcl9uZXh0ID0gbmV3IFdlYWtNYXAoKSwgX1dyaXRlcl9uZXh0UHJvbWlzZSA9IG5ldyBXZWFrTWFwKCksIF9Xcml0ZXJfbmV4dERhdGEgPSBuZXcgV2Vha01hcCgpLCBfV3JpdGVyX2luc3RhbmNlcyA9IG5ldyBXZWFrU2V0KCksIF9Xcml0ZXJfYWRkID0gZnVuY3Rpb24gX1dyaXRlcl9hZGQoZGF0YSkge1xuICAgIC8vIE9ubHkga2VlcCBtb3N0IHJlY2VudCBkYXRhXG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfV3JpdGVyX25leHREYXRhLCBkYXRhLCBcImZcIik7XG4gICAgLy8gQ3JlYXRlIGEgc2luZ2xldG9uIHByb21pc2UgdG8gcmVzb2x2ZSBhbGwgbmV4dCBwcm9taXNlcyBvbmNlIG5leHQgZGF0YSBpcyB3cml0dGVuXG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfV3JpdGVyX25leHRQcm9taXNlLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Xcml0ZXJfbmV4dFByb21pc2UsIFwiZlwiKSB8fCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1dyaXRlcl9uZXh0LCBbcmVzb2x2ZSwgcmVqZWN0XSwgXCJmXCIpO1xuICAgIH0pLCBcImZcIik7XG4gICAgLy8gUmV0dXJuIGEgcHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSBhdCB0aGUgc2FtZSB0aW1lIGFzIG5leHQgcHJvbWlzZVxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgKF9hID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfV3JpdGVyX25leHRQcm9taXNlLCBcImZcIikpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50aGVuKHJlc29sdmUpLmNhdGNoKHJlamVjdCk7XG4gICAgfSk7XG59LCBfV3JpdGVyX3dyaXRlID0gXG4vLyBGaWxlIGlzbid0IGxvY2tlZCwgd3JpdGUgZGF0YVxuYXN5bmMgZnVuY3Rpb24gX1dyaXRlcl93cml0ZShkYXRhKSB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICAvLyBMb2NrIGZpbGVcbiAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9Xcml0ZXJfbG9ja2VkLCB0cnVlLCBcImZcIik7XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gQXRvbWljIHdyaXRlXG4gICAgICAgIGF3YWl0IGZzLnByb21pc2VzLndyaXRlRmlsZShfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Xcml0ZXJfdGVtcEZpbGVuYW1lLCBcImZcIiksIGRhdGEsICd1dGYtOCcpO1xuICAgICAgICBhd2FpdCBmcy5wcm9taXNlcy5yZW5hbWUoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfV3JpdGVyX3RlbXBGaWxlbmFtZSwgXCJmXCIpLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Xcml0ZXJfZmlsZW5hbWUsIFwiZlwiKSk7XG4gICAgICAgIC8vIENhbGwgcmVzb2x2ZVxuICAgICAgICAoX2EgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Xcml0ZXJfcHJldiwgXCJmXCIpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2FbMF0oKTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgICAvLyBDYWxsIHJlamVjdFxuICAgICAgICAoX2IgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Xcml0ZXJfcHJldiwgXCJmXCIpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2JbMV0oZXJyKTtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH1cbiAgICBmaW5hbGx5IHtcbiAgICAgICAgLy8gVW5sb2NrIGZpbGVcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfV3JpdGVyX2xvY2tlZCwgZmFsc2UsIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfV3JpdGVyX3ByZXYsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1dyaXRlcl9uZXh0LCBcImZcIiksIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfV3JpdGVyX25leHQsIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1dyaXRlcl9uZXh0UHJvbWlzZSwgbnVsbCwgXCJmXCIpLCBcImZcIik7XG4gICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Xcml0ZXJfbmV4dERhdGEsIFwiZlwiKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgbmV4dERhdGEgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Xcml0ZXJfbmV4dERhdGEsIFwiZlwiKTtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1dyaXRlcl9uZXh0RGF0YSwgbnVsbCwgXCJmXCIpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy53cml0ZShuZXh0RGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuIiwgInZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcbn07XG52YXIgX19jbGFzc1ByaXZhdGVGaWVsZEdldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZEdldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufTtcbnZhciBfSlNPTkZpbGVTeW5jX2FkYXB0ZXI7XG5pbXBvcnQgeyBUZXh0RmlsZVN5bmMgfSBmcm9tICcuL1RleHRGaWxlU3luYy5qcyc7XG5leHBvcnQgY2xhc3MgSlNPTkZpbGVTeW5jIHtcbiAgICBjb25zdHJ1Y3RvcihmaWxlbmFtZSkge1xuICAgICAgICBfSlNPTkZpbGVTeW5jX2FkYXB0ZXIuc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0pTT05GaWxlU3luY19hZGFwdGVyLCBuZXcgVGV4dEZpbGVTeW5jKGZpbGVuYW1lKSwgXCJmXCIpO1xuICAgIH1cbiAgICByZWFkKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfSlNPTkZpbGVTeW5jX2FkYXB0ZXIsIFwiZlwiKS5yZWFkKCk7XG4gICAgICAgIGlmIChkYXRhID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHdyaXRlKG9iaikge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9KU09ORmlsZVN5bmNfYWRhcHRlciwgXCJmXCIpLndyaXRlKEpTT04uc3RyaW5naWZ5KG9iaiwgbnVsbCwgMikpO1xuICAgIH1cbn1cbl9KU09ORmlsZVN5bmNfYWRhcHRlciA9IG5ldyBXZWFrTWFwKCk7XG4iLCAidmFyIF9fY2xhc3NQcml2YXRlRmllbGRTZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRTZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xufTtcbnZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59O1xudmFyIF9UZXh0RmlsZVN5bmNfdGVtcEZpbGVuYW1lLCBfVGV4dEZpbGVTeW5jX2ZpbGVuYW1lO1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuZXhwb3J0IGNsYXNzIFRleHRGaWxlU3luYyB7XG4gICAgY29uc3RydWN0b3IoZmlsZW5hbWUpIHtcbiAgICAgICAgX1RleHRGaWxlU3luY190ZW1wRmlsZW5hbWUuc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9UZXh0RmlsZVN5bmNfZmlsZW5hbWUuc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1RleHRGaWxlU3luY19maWxlbmFtZSwgZmlsZW5hbWUsIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfVGV4dEZpbGVTeW5jX3RlbXBGaWxlbmFtZSwgcGF0aC5qb2luKHBhdGguZGlybmFtZShmaWxlbmFtZSksIGAuJHtwYXRoLmJhc2VuYW1lKGZpbGVuYW1lKX0udG1wYCksIFwiZlwiKTtcbiAgICB9XG4gICAgcmVhZCgpIHtcbiAgICAgICAgbGV0IGRhdGE7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBkYXRhID0gZnMucmVhZEZpbGVTeW5jKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1RleHRGaWxlU3luY19maWxlbmFtZSwgXCJmXCIpLCAndXRmLTgnKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgaWYgKGUuY29kZSA9PT0gJ0VOT0VOVCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIHdyaXRlKHN0cikge1xuICAgICAgICBmcy53cml0ZUZpbGVTeW5jKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1RleHRGaWxlU3luY190ZW1wRmlsZW5hbWUsIFwiZlwiKSwgc3RyKTtcbiAgICAgICAgZnMucmVuYW1lU3luYyhfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9UZXh0RmlsZVN5bmNfdGVtcEZpbGVuYW1lLCBcImZcIiksIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1RleHRGaWxlU3luY19maWxlbmFtZSwgXCJmXCIpKTtcbiAgICB9XG59XG5fVGV4dEZpbGVTeW5jX3RlbXBGaWxlbmFtZSA9IG5ldyBXZWFrTWFwKCksIF9UZXh0RmlsZVN5bmNfZmlsZW5hbWUgPSBuZXcgV2Vha01hcCgpO1xuIiwgInZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcbn07XG52YXIgX19jbGFzc1ByaXZhdGVGaWVsZEdldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZEdldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufTtcbnZhciBfTG9jYWxTdG9yYWdlX2tleTtcbmV4cG9ydCBjbGFzcyBMb2NhbFN0b3JhZ2Uge1xuICAgIGNvbnN0cnVjdG9yKGtleSkge1xuICAgICAgICBfTG9jYWxTdG9yYWdlX2tleS5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfTG9jYWxTdG9yYWdlX2tleSwga2V5LCBcImZcIik7XG4gICAgfVxuICAgIHJlYWQoKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTG9jYWxTdG9yYWdlX2tleSwgXCJmXCIpKTtcbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh2YWx1ZSk7XG4gICAgfVxuICAgIHdyaXRlKG9iaikge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Mb2NhbFN0b3JhZ2Vfa2V5LCBcImZcIiksIEpTT04uc3RyaW5naWZ5KG9iaikpO1xuICAgIH1cbn1cbl9Mb2NhbFN0b3JhZ2Vfa2V5ID0gbmV3IFdlYWtNYXAoKTtcbiIsICJ2YXIgX19jbGFzc1ByaXZhdGVGaWVsZEdldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZEdldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufTtcbnZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcbn07XG52YXIgX01lbW9yeV9kYXRhO1xuZXhwb3J0IGNsYXNzIE1lbW9yeSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIF9NZW1vcnlfZGF0YS5zZXQodGhpcywgbnVsbCk7XG4gICAgfVxuICAgIHJlYWQoKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTWVtb3J5X2RhdGEsIFwiZlwiKSk7XG4gICAgfVxuICAgIHdyaXRlKG9iaikge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9NZW1vcnlfZGF0YSwgb2JqLCBcImZcIik7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG59XG5fTWVtb3J5X2RhdGEgPSBuZXcgV2Vha01hcCgpO1xuIiwgInZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59O1xudmFyIF9fY2xhc3NQcml2YXRlRmllbGRTZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRTZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xufTtcbnZhciBfTWVtb3J5U3luY19kYXRhO1xuZXhwb3J0IGNsYXNzIE1lbW9yeVN5bmMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBfTWVtb3J5U3luY19kYXRhLnNldCh0aGlzLCBudWxsKTtcbiAgICB9XG4gICAgcmVhZCgpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX01lbW9yeVN5bmNfZGF0YSwgXCJmXCIpIHx8IG51bGw7XG4gICAgfVxuICAgIHdyaXRlKG9iaikge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9NZW1vcnlTeW5jX2RhdGEsIG9iaiwgXCJmXCIpO1xuICAgIH1cbn1cbl9NZW1vcnlTeW5jX2RhdGEgPSBuZXcgV2Vha01hcCgpO1xuIiwgImltcG9ydCB7IE1pc3NpbmdBZGFwdGVyRXJyb3IgfSBmcm9tICcuL01pc3NpbmdBZGFwdGVyRXJyb3IuanMnO1xuZXhwb3J0IGNsYXNzIExvdyB7XG4gICAgY29uc3RydWN0b3IoYWRhcHRlcikge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJhZGFwdGVyXCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiB2b2lkIDBcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImRhdGFcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IG51bGxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChhZGFwdGVyKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIgPSBhZGFwdGVyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IE1pc3NpbmdBZGFwdGVyRXJyb3IoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyByZWFkKCkge1xuICAgICAgICB0aGlzLmRhdGEgPSBhd2FpdCB0aGlzLmFkYXB0ZXIucmVhZCgpO1xuICAgIH1cbiAgICBhc3luYyB3cml0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGF0YSkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5hZGFwdGVyLndyaXRlKHRoaXMuZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCAiZXhwb3J0IGNsYXNzIE1pc3NpbmdBZGFwdGVyRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9ICdNaXNzaW5nIEFkYXB0ZXInO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBNaXNzaW5nQWRhcHRlckVycm9yIH0gZnJvbSAnLi9NaXNzaW5nQWRhcHRlckVycm9yLmpzJztcbmV4cG9ydCBjbGFzcyBMb3dTeW5jIHtcbiAgICBjb25zdHJ1Y3RvcihhZGFwdGVyKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImFkYXB0ZXJcIiwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IHZvaWQgMFxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiZGF0YVwiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogbnVsbFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGFkYXB0ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlciA9IGFkYXB0ZXI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgTWlzc2luZ0FkYXB0ZXJFcnJvcigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlYWQoKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IHRoaXMuYWRhcHRlci5yZWFkKCk7XG4gICAgfVxuICAgIHdyaXRlKCkge1xuICAgICAgICBpZiAodGhpcy5kYXRhICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIud3JpdGUodGhpcy5kYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBMaW5rLCByZWRpcmVjdCwgRm9ybSwganNvbiwgdXNlQWN0aW9uRGF0YSwgdXNlVHJhbnNpdGlvbiB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJ+L2NvbXBvbmVudHMvQnV0dG9uLmpzeFwiO1xyXG5pbXBvcnQgUGFnZUhlYWRlciBmcm9tIFwifi9jb21wb25lbnRzL1BhZ2VIZWFkZXJcIjtcclxuaW1wb3J0IEJyZWFkY3J1bWIgZnJvbSBcIn4vY29tcG9uZW50cy9CcmVhZGNydW1iLmpzeFwiO1xyXG5pbXBvcnQgZGIgZnJvbSBcIn4vZGIvdG95cy9kYi5zZXJ2ZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0LCBwYXJhbXMgfSkgPT4ge1xyXG4gIGF3YWl0IG5ldyBQcm9taXNlKChyZXMpID0+IHNldFRpbWVvdXQocmVzLCAxMDAwKSk7XHJcblxyXG4gIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcbiAgY29uc3QgdGl0bGUgPSBmb3JtLmdldChcInRpdGxlXCIpO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZm9ybS5nZXQoXCJkZXNjcmlwdGlvblwiKTtcclxuICBjb25zdCBwcmljZSA9IGZvcm0uZ2V0KFwicHJpY2VcIik7XHJcbiAgY29uc3QgaW1hZ2UgPSBmb3JtLmdldChcImltYWdlXCIpO1xyXG4gIGNvbnN0IGNhdGVnb3J5ID0gZm9ybS5nZXQoXCJjYXRlZ29yeVwiKTtcclxuICBjb25zdCByYXRpbmcgPSBmb3JtLmdldChcInJhdGluZ1wiKTtcclxuXHJcbiAgY29uc3QgZXJyb3JzID0ge307XHJcbiAgaWYgKCF0aXRsZSkgZXJyb3JzLnRpdGxlID0gdHJ1ZTtcclxuICBpZiAoIWRlc2NyaXB0aW9uKSBlcnJvcnMuZGVzY3JpcHRpb24gPSB0cnVlO1xyXG4gIGlmICghcHJpY2UpIGVycm9ycy5wcmljZSA9IHRydWU7XHJcbiAgaWYgKCFpbWFnZSkgZXJyb3JzLmltYWdlID0gdHJ1ZTtcclxuICBpZiAoIWNhdGVnb3J5KSBlcnJvcnMuY2F0ZWdvcnkgPSB0cnVlO1xyXG4gIGlmICghcmF0aW5nKSBlcnJvcnMucmF0aW5nID0gdHJ1ZTtcclxuXHJcbiAgaWYgKE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoKSB7XHJcbiAgICBjb25zdCB2YWx1ZXMgPSBPYmplY3QuZnJvbUVudHJpZXMoZm9ybSk7XHJcbiAgICByZXR1cm4ganNvbih7IGVycm9ycywgdmFsdWVzIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gaWYgKGZvcm0uZ2V0KFwiX21ldGhvZFwiKSA9PT0gXCJwdXRcIikge1xyXG4gIGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3RveXMvJHtwYXJhbXMucHJvZHVjdElkfWAsIHtcclxuICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICBwcmljZSxcclxuICAgICAgaW1hZ2UsXHJcbiAgICAgIGNhdGVnb3J5LFxyXG4gICAgICByYXRpbmcsXHJcbiAgICAgIGlkOiBwYXJhbXMucHJvZHVjdElkLFxyXG4gICAgfSksXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgfSxcclxuICB9KTtcclxuICByZXR1cm4gcmVkaXJlY3QoYC90b3lzLyR7cGFyYW1zLnByb2R1Y3RJZH1gKTtcclxufTtcclxuLy8gfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVwZGF0ZVByb2R1Y3QoKSB7XHJcbiAgY29uc3QgYWN0aW9uRGF0YSA9IHVzZUFjdGlvbkRhdGEoKTtcclxuICBjb25zdCB0cmFuc2l0aW9uID0gdXNlVHJhbnNpdGlvbigpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEJyZWFkY3J1bWIgbGlua3M9e1t7IHRvOiBcIi90b3lzXCIsIHRpdGxlOiBcIlRveXNcIiB9XX0gLz5cclxuICAgICAgPFBhZ2VIZWFkZXIgdGl0bGU9XCJOZXcgcHJvZHVjdFwiIHN1YnRpdGxlPVwiTWFrZSBpdCBhIGdvb2Qgb25lXCIgLz5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCIgY2xhc3NOYW1lPVwidy02NFwiPlxyXG4gICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJ0aXRsZVwiPlRpdGxlPC9MYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgIGlkPVwidGl0bGVcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgcC0xIGJvcmRlci1ncmF5LTIwMCB3LWZ1bGxcIlxyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2FjdGlvbkRhdGE/LnZhbHVlcy50aXRsZX1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAge2FjdGlvbkRhdGE/LmVycm9ycy50aXRsZSA/IChcclxuICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6IFwicmVkXCIgfX0+VGl0bGUgaXMgbWlzc2luZzwvcD5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG5cclxuICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwiY2F0ZWdvcnlcIj5DYXRlZ29yeTwvTGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwiY2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICBpZD1cImNhdGVnb3J5XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIHAtMSBib3JkZXItZ3JheS0yMDAgdy1mdWxsXCJcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXthY3Rpb25EYXRhPy52YWx1ZXMuY2F0ZWdvcnl9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIHthY3Rpb25EYXRhPy5lcnJvcnMuY2F0ZWdvcnkgPyAoXHJcbiAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19PkNhdGVnb3J5IGlzIG1pc3Npbmc8L3A+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuXHJcbiAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb248L0xhYmVsPlxyXG4gICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgIGlkPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgcC0xIGJvcmRlci1ncmF5LTIwMCB3LWZ1bGxcIlxyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2FjdGlvbkRhdGE/LnZhbHVlcy5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgID48L3RleHRhcmVhPlxyXG5cclxuICAgICAgICAgIHthY3Rpb25EYXRhPy5lcnJvcnMuZGVzY3JpcHRpb24gPyAoXHJcbiAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19PkRlc2NyaXB0aW9uIGlzIG1pc3Npbmc8L3A+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuXHJcbiAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cImltYWdlXCI+SW1hZ2U8L0xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbmFtZT1cImltYWdlXCJcclxuICAgICAgICAgICAgaWQ9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBwLTEgYm9yZGVyLWdyYXktMjAwIHctZnVsbFwiXHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17YWN0aW9uRGF0YT8udmFsdWVzLmltYWdlfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICB7YWN0aW9uRGF0YT8uZXJyb3JzLmltYWdlID8gKFxyXG4gICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT5JbWFnZSBpcyBtaXNzaW5nPC9wPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJyYXRpbmdcIj5SYXRpbmc8L0xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbmFtZT1cInJhdGluZ1wiXHJcbiAgICAgICAgICAgIGlkPVwicmF0aW5nXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIHAtMSBib3JkZXItZ3JheS0yMDAgdy1mdWxsXCJcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXthY3Rpb25EYXRhPy52YWx1ZXMucmF0aW5nfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICB7YWN0aW9uRGF0YT8uZXJyb3JzLnJhdGluZyA/IChcclxuICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6IFwicmVkXCIgfX0+UmF0aW5nIGlzIG1pc3Npbmc8L3A+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuXHJcbiAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cInByaWNlXCI+UHJpY2U8L0xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbmFtZT1cInByaWNlXCJcclxuICAgICAgICAgICAgdGl0bGU9XCJwcmljZVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBwLTEgYm9yZGVyLWdyYXktMjAwIHctZnVsbFwiXHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17YWN0aW9uRGF0YT8udmFsdWVzLnByaWNlfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICB7YWN0aW9uRGF0YT8uZXJyb3JzLnByaWNlID8gKFxyXG4gICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT5QcmljZSBpcyBtaXNzaW5nPC9wPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiX21ldGhvZFwiIHZhbHVlPVwicHV0XCIgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtM1wiPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICB7dHJhbnNpdGlvbi5zdGF0ZSA9PT0gXCJzdWJtaXR0aW5nXCJcclxuICAgICAgICAgICAgICAgID8gXCJVcGRhdGluZy4uLlwiXHJcbiAgICAgICAgICAgICAgICA6IFwiVXBkYXRlIHByb2R1Y3RcIn1cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gTGFiZWwoeyBjaGlsZHJlbiwgLi4ucmVzdCB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayBmb250LXNlbWlib2xkIG10LTMgbWItMVwiIHsuLi5yZXN0fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9sYWJlbD5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXR0b24oeyB0eXBlLCBkZXN0cnVjdGl2ZSA9IGZhbHNlLCBjaGlsZHJlbiB9KSB7XHJcbiAgbGV0IGNsYXNzTmFtZSA9IGAke1xyXG4gICAgZGVzdHJ1Y3RpdmUgPyBcImJnLXJlZC01MDBcIiA6IFwiYmctYmx1ZS01MDBcIlxyXG4gIH0gdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgbXktMyBpbmxpbmUtYmxvY2tgO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gdHlwZT17dHlwZX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvYnV0dG9uPlxyXG4gICk7XHJcbn1cclxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2VIZWFkZXIoeyB0aXRsZSwgc3VidGl0bGUsIGNoaWxkcmVuIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbWItNVwiPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj57dGl0bGV9PC9oMT5cclxuICAgICAgICB7c3VidGl0bGUgJiYgKFxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTQwMFwiPntzdWJ0aXRsZX08L2gyPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVtaXhcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJyZWFkY3J1bWIoeyBsaW5rcyA9IFtdIH0pIHtcclxuICBjb25zdCBicmVhZGNydW1icyA9IFt7IHRvOiBcIi9cIiwgdGl0bGU6IFwiSG9tZVwiIH0sIC4uLmxpbmtzXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPVwibWItNCB0ZXh0LXNtIGZvbnQtc2VtaWJvbGRcIj5cclxuICAgICAge2JyZWFkY3J1bWJzLm1hcCgobGluaywgaSkgPT4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2l9PlxyXG4gICAgICAgICAge2kgIT09IDAgJiYgKFxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgbXgtMiB0ZXh0LWdyYXktNDAwXCI+Lzwvc3Bhbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8TGluayB0bz17bGluay50b30gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTcwMCBob3Zlcjp1bmRlcmxpbmVcIj5cclxuICAgICAgICAgICAge2xpbmsudGl0bGV9XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgKSl9XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgeyBKU09ORmlsZVN5bmMsIExvd1N5bmMgfSBmcm9tIFwibG93ZGJcIjtcclxuXHJcbmNvbnN0IGZpbGUgPSBwYXRoLmpvaW4oX19kaXJuYW1lLCBcIi4uL2FwcC9kYi90b3lzL2RiLmpzb25cIik7XHJcbmNvbnN0IGFkYXB0ZXIgPSBuZXcgSlNPTkZpbGVTeW5jKGZpbGUpO1xyXG5jb25zdCBkYiA9IG5ldyBMb3dTeW5jKGFkYXB0ZXIpO1xyXG5cclxuZGIucmVhZCgpO1xyXG5leHBvcnQgZGVmYXVsdCBkYjtcclxuIiwgImltcG9ydCB7IGpzb24gfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IGRiIGZyb20gXCJ+L2RiL3RveXMvZGIuc2VydmVyLmpzXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZGVyKHsgcGFyYW1zIH0pIHtcclxuICBjb25zdCBwcm9kdWN0ID0gZGIuZGF0YS5wcm9kdWN0cz8uZmluZCgocCkgPT4gcC5pZCA9PT0gcGFyYW1zLnByb2R1Y3RJZCk7XHJcbiAgcmV0dXJuIHByb2R1Y3Q7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhY3Rpb24oeyByZXF1ZXN0LCBwYXJhbXMgfSkge1xyXG4gIHN3aXRjaCAocmVxdWVzdC5tZXRob2QpIHtcclxuICAgIGNhc2UgXCJQVVRcIjoge1xyXG4gICAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XHJcbiAgICAgIGRiLmRhdGEucHJvZHVjdHMgPSBkYi5kYXRhLnByb2R1Y3RzLm1hcCgocCkgPT4ge1xyXG4gICAgICAgIGlmIChwLmlkID09IHBhcmFtcy5wcm9kdWN0SWQpIHtcclxuICAgICAgICAgIHJldHVybiBib2R5O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gcDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBkYi53cml0ZSgpO1xyXG4gICAgICByZXR1cm4ganNvbihib2R5LCB7XHJcbiAgICAgICAgc3RhdHVzOiAyMDIsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY2FzZSBcIkRFTEVURVwiOiB7XHJcbiAgICAgIGRiLmRhdGEucHJvZHVjdHMgPSBkYi5kYXRhLnByb2R1Y3RzLmZpbHRlcihcclxuICAgICAgICAocCkgPT4gcC5pZCAhPT0gcGFyYW1zLnByb2R1Y3RJZFxyXG4gICAgICApO1xyXG4gICAgICBkYi53cml0ZSgpO1xyXG4gICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKG51bGwsIHsgc3RhdHVzOiAyMDQgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsICJpbXBvcnQgeyByZWRpcmVjdCwgTGluayB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCBQYWdlSGVhZGVyIGZyb20gXCJ+L2NvbXBvbmVudHMvUGFnZUhlYWRlclwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJ+L2NvbXBvbmVudHMvQnV0dG9uLmpzeFwiO1xyXG5pbXBvcnQgQnJlYWRjcnVtYiBmcm9tIFwifi9jb21wb25lbnRzL0JyZWFkY3J1bWIuanN4XCI7XHJcbmltcG9ydCBkYiBmcm9tIFwifi9kYi9sdWdnYWdlL2RiLnNlcnZlclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRlciA9IGFzeW5jIGZ1bmN0aW9uICh7IHBhcmFtcyB9KSB7XHJcbiAgY29uc3QgcHJvZHVjdCA9IGF3YWl0IGZldGNoKFxyXG4gICAgYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvbHVnZ2FnZS8ke3BhcmFtcy5wcm9kdWN0SWR9YFxyXG4gICk7XHJcblxyXG4gIGlmICghcHJvZHVjdCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUHJvZHVjdCBub3QgZm91bmRcIik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcHJvZHVjdDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb24gPSBhc3luYyBmdW5jdGlvbiAoeyByZXF1ZXN0LCBwYXJhbXMgfSkge1xyXG4gIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcbiAgaWYgKGZvcm0uZ2V0KFwiX21ldGhvZFwiKSA9PT0gXCJkZWxldGVcIikge1xyXG4gICAgLy8gVE9ETzogQ3JlYXRlIGFuIEFQSSByb3V0ZSBhbmQgc2VuZCBhIERFTEVURSByZXF1ZXN0IHRvIGl0XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJEZWxldGUgbm90IGltcGxlbWVudGVkXCIpO1xyXG4gICAgcmV0dXJuIHJlZGlyZWN0KFwiL2x1Z2dhZ2VcIik7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCgpIHtcclxuICBjb25zdCBwcm9kdWN0ID0gdXNlTG9hZGVyRGF0YSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEJyZWFkY3J1bWIgbGlua3M9e1t7IHRvOiBcIi9sdWdnYWdlXCIsIHRpdGxlOiBcIkx1Z2dhZ2VcIiB9XX0gLz5cclxuICAgICAgPFBhZ2VIZWFkZXIgdGl0bGU9e3Byb2R1Y3QudGl0bGV9IC8+XHJcbiAgICAgIDxwPntwcm9kdWN0LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgPGZvcm0gbWV0aG9kPVwicG9zdFwiIGNsYXNzTmFtZT1cIm10LTUgcHQtMiBib3JkZXItdCBib3JkZXItZ3JheS0yMDBcIj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJfbWV0aG9kXCIgdmFsdWU9XCJkZWxldGVcIiAvPlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGRlc3RydWN0aXZlPlxyXG4gICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCBkYiBmcm9tIFwifi9kYi9sdWdnYWdlL2RiLnNlcnZlci5qc1wiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRlcigpIHtcclxuICByZXR1cm4gZGIuZGF0YS5wcm9kdWN0cyA/PyBbXTtcclxufVxyXG4iLCAiaW1wb3J0IHsgcmVkaXJlY3QsIExpbmsgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgUGFnZUhlYWRlciBmcm9tIFwifi9jb21wb25lbnRzL1BhZ2VIZWFkZXJcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwifi9jb21wb25lbnRzL0J1dHRvbi5qc3hcIjtcclxuaW1wb3J0IEJyZWFkY3J1bWIgZnJvbSBcIn4vY29tcG9uZW50cy9CcmVhZGNydW1iLmpzeFwiO1xyXG5pbXBvcnQgZGIgZnJvbSBcIn4vZGIvdG95cy9kYi5zZXJ2ZXJcIjtcclxuaW1wb3J0IExpbmtCdXR0b24gZnJvbSBcIn4vY29tcG9uZW50cy9MaW5rQnV0dG9uLmpzeFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRlciA9IGFzeW5jIGZ1bmN0aW9uICh7IHBhcmFtcyB9KSB7XHJcbiAgY29uc3QgcHJvZHVjdCA9IGF3YWl0IGZldGNoKFxyXG4gICAgYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdG95cy8ke3BhcmFtcy5wcm9kdWN0SWR9YFxyXG4gICk7XHJcblxyXG4gIGlmICghcHJvZHVjdCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUHJvZHVjdCBub3QgZm91bmRcIik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcHJvZHVjdDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb24gPSBhc3luYyBmdW5jdGlvbiAoeyByZXF1ZXN0LCBwYXJhbXMgfSkge1xyXG4gIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcbiAgaWYgKGZvcm0uZ2V0KFwiX21ldGhvZFwiKSA9PT0gXCJkZWxldGVcIikge1xyXG4gICAgYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdG95cy8ke3BhcmFtcy5wcm9kdWN0SWR9YCwge1xyXG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZWRpcmVjdChcIi90b3lzXCIpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3QoKSB7XHJcbiAgY29uc3QgcHJvZHVjdCA9IHVzZUxvYWRlckRhdGEoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgIDxpbWcgc3JjPXtwcm9kdWN0LmltYWdlfSBhbHQ9e3Byb2R1Y3QuaW1hZ2VBbHR9IC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzIHAtMTBcIj5cclxuICAgICAgICAgIDxCcmVhZGNydW1iIGxpbmtzPXtbeyB0bzogXCIvdG95c1wiLCB0aXRsZTogXCJUb3lzXCIgfV19IC8+XHJcbiAgICAgICAgICA8UGFnZUhlYWRlciB0aXRsZT17cHJvZHVjdC50aXRsZX0gLz5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1sZ1wiPntwcm9kdWN0LnByaWNlfSQ8L2gzPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+XHJcbiAgICAgICAgICAgIFJldmlld3M6IDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbm9ybWFsXCI+e3Byb2R1Y3QucmF0aW5nfTwvc3Bhbj5cclxuICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5cclxuICAgICAgICAgICAgQ2F0ZWdvcnk6IDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbm9ybWFsXCI+e3Byb2R1Y3QuY2F0ZWdvcnl9PC9zcGFuPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGItMiBib3JkZXItYiBib3JkZXItZ3JheS0yMDBcIj57cHJvZHVjdC5kZXNjcmlwdGlvbn08L3A+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICAgIDxMaW5rQnV0dG9uIHRvPVwidXBkYXRlXCIgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgVXBkYXRlXHJcbiAgICAgICAgICAgIDwvTGlua0J1dHRvbj5cclxuICAgICAgICAgICAgPGZvcm0gbWV0aG9kPVwicG9zdFwiIGNsYXNzTmFtZT1cIm10LTJcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJfbWV0aG9kXCIgdmFsdWU9XCJkZWxldGVcIiAvPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGRlc3RydWN0aXZlPlxyXG4gICAgICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVtaXhcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbih7IHRvLCBjaGlsZHJlbiB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5rXHJcbiAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCBtci0yIHJvdW5kZWQgbXktMyBpbmxpbmUtYmxvY2tcIlxyXG4gICAgICB0bz17dG99XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvTGluaz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgZGIgZnJvbSBcIn4vZGIvdG95cy9kYi5zZXJ2ZXIuanNcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkZXIoKSB7XHJcbiAgcmV0dXJuIGRiLmRhdGEucHJvZHVjdHMgPz8gW107XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhY3Rpb24oeyByZXF1ZXN0LCBwYXJhbXMgfSkge1xyXG4gIHN3aXRjaCAocmVxdWVzdC5tZXRob2QpIHtcclxuICAgIGNhc2UgXCJQT1NUXCI6IHtcclxuICAgICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xyXG4gICAgICBkYi5kYXRhLnByb2R1Y3RzPy5wdXNoKGJvZHkpO1xyXG4gICAgICBkYi53cml0ZSgpO1xyXG4gICAgICByZXR1cm4ganNvbihib2R5LCB7XHJcbiAgICAgICAgc3RhdHVzOiAyMDEsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCAiaW1wb3J0IHsgTGluaywgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgTGlua0J1dHRvbiBmcm9tIFwifi9jb21wb25lbnRzL0xpbmtCdXR0b24uanN4XCI7XHJcbmltcG9ydCBQYWdlSGVhZGVyIGZyb20gXCJ+L2NvbXBvbmVudHMvUGFnZUhlYWRlclwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRlcigpIHtcclxuICByZXR1cm4gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2x1Z2dhZ2VcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEx1Z2dhZ2VJdGVtcygpIHtcclxuICBjb25zdCBwcm9kdWN0cyA9IHVzZUxvYWRlckRhdGEoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxQYWdlSGVhZGVyIHRpdGxlPVwiTHVnZ2FnZVwiIHN1YnRpdGxlPVwiQ3VyYXRlZCBieSBEYW5cIj5cclxuICAgICAgICA8TGlua0J1dHRvbiB0bz1cIm5ld1wiPk5ldyBwcm9kdWN0PC9MaW5rQnV0dG9uPlxyXG4gICAgICA8L1BhZ2VIZWFkZXI+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJncmlkIGdhcC00IGdyaWQtY29scy0zXCI+XHJcbiAgICAgICAge3Byb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gKFxyXG4gICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgIGtleT17cHJvZHVjdC5pZH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZCBib3JkZXIgYm9yZGVyLWdyYXktMjAwIGJnLWdyYXktNTAgcC01XCI+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPXtwcm9kdWN0LmlkfSBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+XHJcbiAgICAgICAgICAgICAgPGgzPntwcm9kdWN0LnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyBMaW5rLCByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJ+L2NvbXBvbmVudHMvQnV0dG9uLmpzeFwiO1xyXG5pbXBvcnQgUGFnZUhlYWRlciBmcm9tIFwifi9jb21wb25lbnRzL1BhZ2VIZWFkZXJcIjtcclxuaW1wb3J0IEJyZWFkY3J1bWIgZnJvbSBcIn4vY29tcG9uZW50cy9CcmVhZGNydW1iLmpzeFwiO1xyXG5pbXBvcnQgZGIgZnJvbSBcIn4vZGIvbHVnZ2FnZS9kYi5zZXJ2ZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcclxuICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xyXG4gIGNvbnN0IHRpdGxlID0gZm9ybS5nZXQoXCJ0aXRsZVwiKTtcclxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGZvcm0uZ2V0KFwiZGVzY3JpcHRpb25cIik7XHJcblxyXG4gIGNvbnN0IHV1aWQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKS50b1N0cmluZygxNik7XHJcbiAgLy8gVE9ETzogTWFrZSBhIFBPU1QgcmVxdWVzdCB2aWEgZmV0Y2ggdG8gYW4gQVBJIHJvdXRlIHRoYXQgcmVjZWl2ZXMgSlNPTiBkYXRhXHJcbiAgLy8gYW5kIGNyZWF0ZXMgdGhlIHByb2R1Y3QgaW4gdGhlIGRiXHJcbiAgdGhyb3cgbmV3IEVycm9yKFwiUE9TVCBoYW5kbGVyIG5vdCBpbXBsZW1lbnRlZFwiKTtcclxuICByZXR1cm4gcmVkaXJlY3QoYC9sdWdnYWdlLyR7dXVpZH1gKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld1Byb2R1Y3QoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxCcmVhZGNydW1iIGxpbmtzPXtbeyB0bzogXCIvbHVnZ2FnZVwiLCB0aXRsZTogXCJMdWdnYWdlXCIgfV19IC8+XHJcbiAgICAgIDxQYWdlSGVhZGVyIHRpdGxlPVwiTmV3IHByb2R1Y3RcIiBzdWJ0aXRsZT1cIk1ha2UgaXQgYSBnb29kIG9uZVwiIC8+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGZvcm0gbWV0aG9kPVwicG9zdFwiIGNsYXNzTmFtZT1cInctNjRcIj5cclxuICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwidGl0bGVcIj5UaXRsZTwvTGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxyXG4gICAgICAgICAgICBpZD1cInRpdGxlXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIHAtMSBib3JkZXItZ3JheS0yMDAgdy1mdWxsXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb248L0xhYmVsPlxyXG4gICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgIGlkPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgcC0xIGJvcmRlci1ncmF5LTIwMCB3LWZ1bGxcIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0zXCI+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPkFkZCBwcm9kdWN0PC9CdXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gTGFiZWwoeyBjaGlsZHJlbiwgLi4ucmVzdCB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayBmb250LXNlbWlib2xkIG10LTMgbWItMVwiIHsuLi5yZXN0fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9sYWJlbD5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyBMaW5rLCB1c2VMb2FkZXJEYXRhLCBGb3JtIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCBMaW5rQnV0dG9uIGZyb20gXCJ+L2NvbXBvbmVudHMvTGlua0J1dHRvbi5qc3hcIjtcclxuaW1wb3J0IFBhZ2VIZWFkZXIgZnJvbSBcIn4vY29tcG9uZW50cy9QYWdlSGVhZGVyXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZGVyKCkge1xyXG4gIHJldHVybiBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdG95c1wiKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG95c0l0ZW1zKCkge1xyXG4gIGNvbnN0IHByb2R1Y3RzID0gdXNlTG9hZGVyRGF0YSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPFBhZ2VIZWFkZXIgdGl0bGU9XCJUb3lzXCIgc3VidGl0bGU9XCJDdXJhdGVkIGJ5IERhblwiPlxyXG4gICAgICAgIDxMaW5rQnV0dG9uIHRvPVwibmV3XCI+TmV3IHByb2R1Y3Q8L0xpbmtCdXR0b24+XHJcbiAgICAgIDwvUGFnZUhlYWRlcj5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cImdyaWQgZ2FwLTQgZ3JpZC1jb2xzLTMgXCI+XHJcbiAgICAgICAge3Byb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gKFxyXG4gICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgIGtleT17cHJvZHVjdC5pZH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgYm9yZGVyLWdyYXktMjAwIGJnLXdoaXRlIGFmdGVyOnRyYW5zaXRpb24tYWxsIGFmdGVyOmR1cmF0aW9uLTUwMCBhZnRlcjpjb250ZW50LlsqXSBhZnRlcjphYnNvbHV0ZSBhZnRlcjpoLTAuNSBhZnRlcjp3LTAgYWZ0ZXI6YmctYmx1ZS02MDAgaG92ZXI6YWZ0ZXI6dy1mdWxsIGFmdGVyOmJvdHRvbS0wXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPExpbmsgdG89e3Byb2R1Y3QuaWR9IGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGNhcmRcIj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgYmxvY2sgbS1hdXRvIGFmdGVyOmNvbnRlbnQuW1NlZSBtb3JlXSBhZnRlcjphYnNvbHV0ZSBhZnRlcjp0b3AtMCBhZnRlcjpsZWZ0LTAgYWZ0ZXI6dy1mdWxsIGFmdGVyOmgtZnVsbCBhZnRlcjpiZy1ibHVlLTYwMCBoLTcyXCJcclxuICAgICAgICAgICAgICAgICAgc3JjPXtwcm9kdWN0LmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9e3Byb2R1Y3QuaW1hZ2VBbHR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTVcIj5cclxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgbXktMiBmb250LW1lZGl1bVwiPntwcm9kdWN0LnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaWNlIGZvbnQtYm9sZCB0ZXh0LWJsdWUtNjAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3QucHJpY2V9JFxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8Rm9ybVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZVwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgbWV0aG9kPVwicG9zdFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImlkXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9kdWN0LmlkfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJjcmVhdGVkQXRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Byb2R1Y3QuY3JlYXRlZEF0fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiX2FjdGlvblwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT1cImRlbGV0ZVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgTGluaywgcmVkaXJlY3QsIEZvcm0sIGpzb24sIHVzZUFjdGlvbkRhdGEsIHVzZVRyYW5zaXRpb24gfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwifi9jb21wb25lbnRzL0J1dHRvbi5qc3hcIjtcclxuaW1wb3J0IFBhZ2VIZWFkZXIgZnJvbSBcIn4vY29tcG9uZW50cy9QYWdlSGVhZGVyXCI7XHJcbmltcG9ydCBCcmVhZGNydW1iIGZyb20gXCJ+L2NvbXBvbmVudHMvQnJlYWRjcnVtYi5qc3hcIjtcclxuaW1wb3J0IGRiIGZyb20gXCJ+L2RiL3RveXMvZGIuc2VydmVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcclxuIGF3YWl0IG5ldyBQcm9taXNlKChyZXMpID0+IHNldFRpbWVvdXQocmVzLCAxMDAwKSk7XHJcblxyXG4gIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcbiAgY29uc3QgdGl0bGUgPSBmb3JtLmdldChcInRpdGxlXCIpO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZm9ybS5nZXQoXCJkZXNjcmlwdGlvblwiKTtcclxuICBjb25zdCBwcmljZSA9IGZvcm0uZ2V0KFwicHJpY2VcIik7XHJcbiAgY29uc3QgaW1hZ2UgPSBmb3JtLmdldChcImltYWdlXCIpO1xyXG4gIGNvbnN0IGNhdGVnb3J5ID0gZm9ybS5nZXQoXCJjYXRlZ29yeVwiKTtcclxuICBjb25zdCByYXRpbmcgPSBmb3JtLmdldChcInJhdGluZ1wiKTtcclxuXHJcbiAgY29uc3QgdXVpZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpLnRvU3RyaW5nKDE2KTtcclxuXHJcbiAgY29uc3QgZXJyb3JzID0ge307XHJcbiAgaWYgKCF0aXRsZSkgZXJyb3JzLnRpdGxlID0gdHJ1ZTtcclxuICBpZiAoIWRlc2NyaXB0aW9uKSBlcnJvcnMuZGVzY3JpcHRpb24gPSB0cnVlO1xyXG4gIGlmICghcHJpY2UpIGVycm9ycy5wcmljZSA9IHRydWU7XHJcbiAgaWYgKCFpbWFnZSkgZXJyb3JzLmltYWdlID0gdHJ1ZTtcclxuICBpZiAoIWNhdGVnb3J5KSBlcnJvcnMuY2F0ZWdvcnkgPSB0cnVlO1xyXG4gIGlmICghcmF0aW5nKSBlcnJvcnMucmF0aW5nID0gdHJ1ZTtcclxuXHJcbiAgaWYgKE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoKSB7XHJcbiAgICBjb25zdCB2YWx1ZXMgPSBPYmplY3QuZnJvbUVudHJpZXMoZm9ybSk7XHJcbiAgICByZXR1cm4ganNvbih7IGVycm9ycywgdmFsdWVzIH0pO1xyXG4gIH1cclxuXHJcbiAgaWYgKGZvcm0uZ2V0KFwiX21ldGhvZFwiKSA9PT0gXCJwb3N0XCIpIHtcclxuICAgIGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3RveXNgLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgICBwcmljZSxcclxuICAgICAgICBpbWFnZSxcclxuICAgICAgICBjYXRlZ29yeSxcclxuICAgICAgICByYXRpbmcsXHJcbiAgICAgICAgaWQ6IHV1aWQsXHJcbiAgICAgIH0pLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZWRpcmVjdChgL3RveXMvJHt1dWlkfWApO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld1Byb2R1Y3QoKSB7XHJcbiAgY29uc3QgYWN0aW9uRGF0YSA9IHVzZUFjdGlvbkRhdGEoKTtcclxuICBjb25zdCB0cmFuc2l0aW9uID0gdXNlVHJhbnNpdGlvbigpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEJyZWFkY3J1bWIgbGlua3M9e1t7IHRvOiBcIi90b3lzXCIsIHRpdGxlOiBcIlRveXNcIiB9XX0gLz5cclxuICAgICAgPFBhZ2VIZWFkZXIgdGl0bGU9XCJOZXcgcHJvZHVjdFwiIHN1YnRpdGxlPVwiTWFrZSBpdCBhIGdvb2Qgb25lXCIgLz5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCIgY2xhc3NOYW1lPVwidy02NFwiPlxyXG4gICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJ0aXRsZVwiPlRpdGxlPC9MYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgIGlkPVwidGl0bGVcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgcC0xIGJvcmRlci1ncmF5LTIwMCB3LWZ1bGxcIlxyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2FjdGlvbkRhdGE/LnZhbHVlcy50aXRsZX1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAge2FjdGlvbkRhdGE/LmVycm9ycy50aXRsZSA/IChcclxuICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6IFwicmVkXCIgfX0+VGl0bGUgaXMgbWlzc2luZzwvcD5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG5cclxuICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwiY2F0ZWdvcnlcIj5DYXRlZ29yeTwvTGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwiY2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICBpZD1cImNhdGVnb3J5XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIHAtMSBib3JkZXItZ3JheS0yMDAgdy1mdWxsXCJcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXthY3Rpb25EYXRhPy52YWx1ZXMuY2F0ZWdvcnl9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIHthY3Rpb25EYXRhPy5lcnJvcnMuY2F0ZWdvcnkgPyAoXHJcbiAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19PkNhdGVnb3J5IGlzIG1pc3Npbmc8L3A+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuXHJcbiAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb248L0xhYmVsPlxyXG4gICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgIGlkPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgcC0xIGJvcmRlci1ncmF5LTIwMCB3LWZ1bGxcIlxyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2FjdGlvbkRhdGE/LnZhbHVlcy5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgID48L3RleHRhcmVhPlxyXG5cclxuICAgICAgICAgIHthY3Rpb25EYXRhPy5lcnJvcnMuZGVzY3JpcHRpb24gPyAoXHJcbiAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19PkRlc2NyaXB0aW9uIGlzIG1pc3Npbmc8L3A+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuXHJcbiAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cImltYWdlXCI+SW1hZ2U8L0xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbmFtZT1cImltYWdlXCJcclxuICAgICAgICAgICAgaWQ9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBwLTEgYm9yZGVyLWdyYXktMjAwIHctZnVsbFwiXHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17YWN0aW9uRGF0YT8udmFsdWVzLmltYWdlfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICB7YWN0aW9uRGF0YT8uZXJyb3JzLmltYWdlID8gKFxyXG4gICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT5JbWFnZSBpcyBtaXNzaW5nPC9wPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJyYXRpbmdcIj5SYXRpbmc8L0xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbmFtZT1cInJhdGluZ1wiXHJcbiAgICAgICAgICAgIGlkPVwicmF0aW5nXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIHAtMSBib3JkZXItZ3JheS0yMDAgdy1mdWxsXCJcclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAge2FjdGlvbkRhdGE/LmVycm9ycy5yYXRpbmcgPyAoXHJcbiAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19PlJhdGluZyBpcyBtaXNzaW5nPC9wPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJwcmljZVwiPlByaWNlPC9MYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJwcmljZVwiXHJcbiAgICAgICAgICAgIHRpdGxlPVwicHJpY2VcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgcC0xIGJvcmRlci1ncmF5LTIwMCB3LWZ1bGxcIlxyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2FjdGlvbkRhdGE/LnZhbHVlcy5wcmljZX1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAge2FjdGlvbkRhdGE/LmVycm9ycy5wcmljZSA/IChcclxuICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6IFwicmVkXCIgfX0+UHJpY2UgaXMgbWlzc2luZzwvcD5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIl9tZXRob2RcIiB2YWx1ZT1cInBvc3RcIiAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0zXCI+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgIHt0cmFuc2l0aW9uLnN0YXRlID09PSBcInN1Ym1pdHRpbmdcIiA/IFwiQWRkaW5nLi4uXCIgOiBcIkFkZCBwcm9kdWN0XCJ9XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIExhYmVsKHsgY2hpbGRyZW4sIC4uLnJlc3QgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgZm9udC1zZW1pYm9sZCBtdC0zIG1iLTFcIiB7Li4ucmVzdH0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvbGFiZWw+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IExpbmtCdXR0b24gZnJvbSBcIn4vY29tcG9uZW50cy9MaW5rQnV0dG9uLmpzeFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmxleC1ncm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIHRleHQtZ3JheS00MDBcIj5cclxuICAgICAgICBUaGUgd2ViJ3MgcHJlbWllcmUgZGVzdGluYXRpb24gZm9yIHNob3BwaW5nIGFic29sdXRlbHl7XCIgXCJ9XHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiaXRhbGljXCI+YW55dGhpbmc8L2k+LlxyXG4gICAgICA8L2gxPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6J2FlNTU1OGY2JywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC1SVkQ3QkpZQy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstVjQyRFk3TlouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1QMkZUR1BPWC5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtUUlUNzJGSUcuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOnRydWUsJ2hhc0Vycm9yQm91bmRhcnknOnRydWV9LCdyb3V0ZXMvYXBpL2x1Z2dhZ2UvJHByb2R1Y3RJZCc6eydpZCc6J3JvdXRlcy9hcGkvbHVnZ2FnZS8kcHJvZHVjdElkJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2FwaS9sdWdnYWdlLzpwcm9kdWN0SWQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYXBpL2x1Z2dhZ2UvJHByb2R1Y3RJZC1MSE5XSVdMVC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstRldKR1U2TEMuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYXBpL2x1Z2dhZ2UvaW5kZXgnOnsnaWQnOidyb3V0ZXMvYXBpL2x1Z2dhZ2UvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYXBpL2x1Z2dhZ2UnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2FwaS9sdWdnYWdlL2luZGV4LVRXRUVQSTdOLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1GV0pHVTZMQy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hcGkvdG95cy8kcHJvZHVjdElkJzp7J2lkJzoncm91dGVzL2FwaS90b3lzLyRwcm9kdWN0SWQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYXBpL3RveXMvOnByb2R1Y3RJZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hcGkvdG95cy8kcHJvZHVjdElkLUpGSzRFUE5NLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1QSklQNVVUSS5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2FwaS90b3lzL2luZGV4Jzp7J2lkJzoncm91dGVzL2FwaS90b3lzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2FwaS90b3lzJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hcGkvdG95cy9pbmRleC1GWTJNSVdKTi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstUEpJUDVVVEkuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1FN0sySllGUC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstUjRCQ0FZQ0kuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2x1Z2dhZ2UvJHByb2R1Y3RJZCc6eydpZCc6J3JvdXRlcy9sdWdnYWdlLyRwcm9kdWN0SWQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbHVnZ2FnZS86cHJvZHVjdElkJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2x1Z2dhZ2UvJHByb2R1Y3RJZC1PVkhEM0JNNS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstMk9EV05KR0MuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1WUjNFNjYyWS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTVFMlFaWUVCLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbHVnZ2FnZS9pbmRleCc6eydpZCc6J3JvdXRlcy9sdWdnYWdlL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2x1Z2dhZ2UnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2x1Z2dhZ2UvaW5kZXgtVTMzVDRKSkMuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVI0QkNBWUNJLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNUUyUVpZRUIuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbHVnZ2FnZS9uZXcnOnsnaWQnOidyb3V0ZXMvbHVnZ2FnZS9uZXcnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbHVnZ2FnZS9uZXcnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbHVnZ2FnZS9uZXctNE0zVjNLRVQuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTJPRFdOSkdDLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVlIzRTY2MlkuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay01RTJRWllFQi5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy90b3lzLyRwcm9kdWN0SWQnOnsnaWQnOidyb3V0ZXMvdG95cy8kcHJvZHVjdElkJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3RveXMvOnByb2R1Y3RJZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy90b3lzLyRwcm9kdWN0SWQtU0xQRlBQMkkuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVI0QkNBWUNJLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSUlGRFVDS0kuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1WUjNFNjYyWS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTVFMlFaWUVCLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvdG95cy8kcHJvZHVjdElkLnVwZGF0ZSc6eydpZCc6J3JvdXRlcy90b3lzLyRwcm9kdWN0SWQudXBkYXRlJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3RveXMvOnByb2R1Y3RJZC91cGRhdGUnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvdG95cy8kcHJvZHVjdElkLnVwZGF0ZS1LTlJJR0lJRS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstSUlGRFVDS0kuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1WUjNFNjYyWS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTVFMlFaWUVCLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3RveXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvdG95cy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOid0b3lzJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy90b3lzL2luZGV4LTZDVkdTVU9ELmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1SNEJDQVlDSS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTVFMlFaWUVCLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3RveXMvbmV3Jzp7J2lkJzoncm91dGVzL3RveXMvbmV3JywncGFyZW50SWQnOidyb290JywncGF0aCc6J3RveXMvbmV3JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3RveXMvbmV3LVdTQklRQVgzLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1JSUZEVUNLSS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVZSM0U2NjJZLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNUUyUVpZRUIuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LUFFNTU1OEY2LmpzJ307Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQUFBO0FBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxPQUFPLFFBQVE7QUFJbkIsV0FBTyxlQUFlLFNBQVMsNEJBQTRCO0FBQUEsTUFDekQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxvQ0FBb0M7QUFBQSxNQUNqRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLHNDQUFzQztBQUFB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
