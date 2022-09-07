
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path=require("path")

module.exports={
    mode:"development",
entry:{
    main:{
      import:'./src/main.js',
      
    },
    instruction:{
      import:'./src/instruction.js',

    },
    gameover:{
      import:'./src/gameover.js',

    }
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
       chunks:['main']

    }),
    new HtmlWebpackPlugin({
      template:'./src/instruction.html',
      filename:"instruction.html",
      inject:"body",
      chunks:['instruction'],

   }),
   new HtmlWebpackPlugin({
    template:'./src/gameover.html',
    filename:"gameover.html",
    inject:"body",
    chunks:['gameover'],

 }),
],
module: {
    rules: [
 
   
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
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
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/resource',
      },

 
    ],
  },

devServer:{
    static:path.join(__dirname,"dist"),
    port:3001,
    open:true,
    hot:true,
    compress:true,
  

}
}