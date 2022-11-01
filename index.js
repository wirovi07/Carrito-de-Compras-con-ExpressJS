const express = require('express')
const app = express();
const port = 3000;

//motor de plantillas 
app.set('view engine', 'ejs');
app.set('views', __dirname +  '/js');
app.set('views', __dirname +  '/view');

app.use("/public", express.static("public"));

app.get('/', (req, res) => {    
    res.render("carrito");
  })


  app.get('/carritoComprado', (req, res) => {
    res.render("carritoComprado")
  })

  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })