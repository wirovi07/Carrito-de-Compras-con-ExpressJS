const express = requeire('express')
const app = express();
const port = 3000;

//motor de plantillas 
app.set('view engine', 'ejs');
app.set('views', __dirname +  '/views');