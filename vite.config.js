const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        home: resolve(__dirname, 'home.html'),
        blog: resolve(__dirname, 'blog.html'),
        work_detail: resolve(__dirname, 'work_detail.html'),
        word: resolve(__dirname, 'word.html')
     
      }
    }
  }
})