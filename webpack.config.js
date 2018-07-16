const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports={
  entry:{
  home: path.resolve(__dirname, './src/js/index.js'),
  precios: path.resolve(__dirname, './src/js/precios.js'),
  contacto: path.resolve(__dirname, './src/js/contacto.js')
},
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  plugins:[
    //aqui van los plugins
    new MiniCssExtractPlugin({
      filename: "./css/[name].css"
    })
  ],
  module:{
    rules:[
      //aqui van los loaders
      {
        // test: tipo de aricho a reconocer
        // use: que loader se va a encagar del archivo
        //css-loader permimte que el loader entienda los import '.css',
        //y style-loader permite que utilize los css a la hora de interpretar '.css'
        test: /\.css$/,  //todos los archivos css
        use: [
            MiniCssExtractPlugin.loader,
            "css-loader"
            ]
      }
          // ['style-loader','css-loader']
          // fallback:'style-loader',
    ]
  }
}
