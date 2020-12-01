import cjs from "@rollup/plugin-commonjs"
import filesize from "rollup-plugin-filesize"
import { terser } from "rollup-plugin-terser"
import less from "rollup-plugin-less"
import nodeResolve from "./build/resolve"
import VuePlugin from "rollup-plugin-vue"
import babel from "./build/babel"
import CleanCSS from "clean-css"
import fs from "fs"

// const isProduction = !process.env.ROLLUP_WATCH

export default () => {
  let config = [
    // ESM
    {
      input: "src/index.ts",
      output: {
        format: "esm",
        file: "dist/ui-vue.esm.js",
        exports: "named"
      },
      external: (id) => {
        return /core|^vue$/.test(id)
      },
      plugins: [
        nodeResolve(),
        VuePlugin(),
        cjs(),
        less({
          output: (css) => {
            const newcss = new CleanCSS().minify(css)
            fs.writeFile("dist/ui-vue.css", newcss.styles, () => {
            })
            return newcss.styles
          }
        }),
        babel(),
        terser()
      ]
    },
    // CJS & SSR build
    {
      input: "src/index.ts",
      output: {
        format: "cjs",
        file: "dist/ui-vue.cjs.js",
        exports: "named"
      },
      external: (id) => {
        return /core|^vue$/.test(id)
      },
      plugins: [
        nodeResolve(),
        VuePlugin(),
        cjs(),
        less({output: false}),
        babel(),
        terser()
      ]
    },
    // UMD
    {
      input: "src/index.ts",
      output: {
        format: "umd",
        file: "dist/ui-vue.umd.js",
        name: "UiVue",
        exports: "named",
        globals: {
          vue: "Vue"
        }
      },
      external: ["vue"],
      plugins: [
        nodeResolve(),
        VuePlugin(),
        cjs(),
        less({output: false}),
        babel(),
        terser()
      ]
    },
    // Browser build
    {
      input: "src/index.ts",
      output: {
        format: "iife",
        file: "dist/ui-vue.js",
        name: "UiVue",
        exports: "named",
        globals: {
          vue: "Vue"
        }
      },
      external: ["vue"],
      plugins: [
        nodeResolve(),
        VuePlugin(),
        cjs(),
        less({output: false}),
        babel(),
        terser()
      ]
    }
  ]

  config.forEach((c) => c.plugins.push(filesize({ showBrotliSize: true })))

  config
    .filter((c) => c.output.format === "umd")
    .forEach((c) => {
      config.push({
        ...c,
        output: {
          ...c.output,
          file: c.output.file.replace(/\.js/g, ".min.js")
        },
        plugins: [...c.plugins, terser()]
      })
    })

  // if (!isProduction) {
  //   config = config.filter((c) => c.output.format === 'esm')
  // }

  return config
}