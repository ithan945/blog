export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/song/myfrontend/vuepresstest/my-docs/src/.vuepress/.temp/pages/index.html.js"), meta: {"y":"h","t":"项目主页","i":"home"} }],
  ["/demo/disable.html", { loader: () => import(/* webpackChunkName: "disable.html" */"E:/song/myfrontend/vuepresstest/my-docs/src/.vuepress/.temp/pages/demo/disable.html.js"), meta: {"y":"a","t":"布局与功能禁用","i":"gears","O":4} }],
  ["/demo/encrypt.html", { loader: () => import(/* webpackChunkName: "encrypt.html" */"E:/song/myfrontend/vuepresstest/my-docs/src/.vuepress/.temp/pages/demo/encrypt.html.js"), meta: {"y":"a","t":"密码加密的文章","i":"lock"} }],
  ["/demo/layout.html", { loader: () => import(/* webpackChunkName: "layout.html" */"E:/song/myfrontend/vuepresstest/my-docs/src/.vuepress/.temp/pages/demo/layout.html.js"), meta: {"y":"a","t":"布局","i":"object-group","O":2} }],
  ["/demo/markdown.html", { loader: () => import(/* webpackChunkName: "markdown.html" */"E:/song/myfrontend/vuepresstest/my-docs/src/.vuepress/.temp/pages/demo/markdown.html.js"), meta: {"y":"a","t":"Markdown 展示","i":"fab fa-markdown","O":2} }],
  ["/demo/page.html", { loader: () => import(/* webpackChunkName: "page.html" */"E:/song/myfrontend/vuepresstest/my-docs/src/.vuepress/.temp/pages/demo/page.html.js"), meta: {"y":"a","t":"页面配置","i":"file","O":3} }],
  ["/demo/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/song/myfrontend/vuepresstest/my-docs/src/.vuepress/.temp/pages/demo/index.html.js"), meta: {"y":"a","t":"主要功能与配置演示","i":"laptop-code"} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/song/myfrontend/vuepresstest/my-docs/src/.vuepress/.temp/pages/guide/index.html.js"), meta: {"y":"a","t":"指南","i":"lightbulb"} }],
  ["/Java/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/song/myfrontend/vuepresstest/my-docs/src/.vuepress/.temp/pages/Java/index.html.js"), meta: {"y":"a","t":"主要功能与配置演示1","i":"laptop-code"} }],
  ["/Java/test.html", { loader: () => import(/* webpackChunkName: "test.html" */"E:/song/myfrontend/vuepresstest/my-docs/src/.vuepress/.temp/pages/Java/test.html.js"), meta: {"y":"a","t":"页面配置","i":"file","O":3} }],
  ["/guide/bar/baz.html", { loader: () => import(/* webpackChunkName: "baz.html" */"E:/song/myfrontend/vuepresstest/my-docs/src/.vuepress/.temp/pages/guide/bar/baz.html.js"), meta: {"y":"a","t":"Baz","i":"circle-info"} }],
  ["/guide/bar/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/song/myfrontend/vuepresstest/my-docs/src/.vuepress/.temp/pages/guide/bar/index.html.js"), meta: {"y":"a","t":"Bar 功能","i":"lightbulb"} }],
  ["/guide/foo/ray.html", { loader: () => import(/* webpackChunkName: "ray.html" */"E:/song/myfrontend/vuepresstest/my-docs/src/.vuepress/.temp/pages/guide/foo/ray.html.js"), meta: {"y":"a","t":"Ray","i":"circle-info"} }],
  ["/guide/foo/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/song/myfrontend/vuepresstest/my-docs/src/.vuepress/.temp/pages/guide/foo/index.html.js"), meta: {"y":"a","t":"Foo 功能","i":"lightbulb"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/song/myfrontend/vuepresstest/my-docs/src/.vuepress/.temp/pages/404.html.js"), meta: {"y":"p","t":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
