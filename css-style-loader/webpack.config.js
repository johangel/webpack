const path = require('path')

module.exports={
  entry: path.resolve(__dirname, 'estilos.css'),
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module:{
    rules:[
      //aqui van los loaders
      {
        // test: tipo de aricho a reconocer
        // use: que loader se va a encagar del archivo
        test: /\.css$/,  //todos los archivos css
        use: ['css-loader']
      }
    ]
  }
}
