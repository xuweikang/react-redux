# react-redux
这是一个react和redux 的小项目
# 项目打开
 **npm install** <br>
 **npm run build** <br>
 **npm run dev** <br>
# major functions
src/app.js  //react根项目 <br>
src/make-redux //模拟redux 一 <br>
src/make-redux2 //模拟redux 二 <br>
src/redux  //使用real redux  <br>

# 修改项目的打开方式(选择入口)
<pre><code>
//webpack.config.js: 修改需要作为入口的项目的index.html的父目录
  devServer: {
        contentBase: path.resolve(__dirname, 'src/make-redux2'),
        compress: true,
        port: 2111
    }
</code></pre>

