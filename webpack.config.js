
const HtmlWebpackPlugin = require("html-webpack-plugin")
const path=require("path")

module.exports={
    mode:"development",
entry:{
    main:'./src/main.js'
},
output:{
    path:path.resolve(__dirname,"dist"),
    filename:'[name]-bundle.js'
},
plugins:[
    new HtmlWebpackPlugin({
       template:'./src/index.html',
       inject:"body",

    })
],
module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
devServer:{
    static:path.join(__dirname,"dist"),
    port:3001,
    open:true,
    hot:true,

}
}