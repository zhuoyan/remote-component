import vue from 'rollup-plugin-vue'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'

export default {
  input: './commponents/test.vue',
  output: {
    format: 'umd',
    file: './dist/rollup.js',
    name: 'MyComponent'
  },
  plugins: [
    commonjs(),
    vue(),
    babel({
      exclude: 'node_modules/**'
    })
  ]
}
