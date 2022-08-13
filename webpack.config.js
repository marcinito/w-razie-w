
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
       filename:"index.html",
       inject:"body",

    }),
   
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
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images/',
              esModule:false,
            }
            
          },
        ],
      },
      
  
      {
        test:/\.html$/,
        
          loader:'html-loader'
        
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
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