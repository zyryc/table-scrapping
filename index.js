const express = require('express')
const app = express()
const port = 3000
const tabletojson = require('tabletojson').Tabletojson;
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('home');
  
});

app.post('/output', function(req, res) {

  var url = req.body.url;
  var position = req.body.position;

  tabletojson.convertUrl(
    url,
    function(tablesAsJson) {
        console.log(tablesAsJson[position]);
        res.send(tablesAsJson[position]);
    }
);


  // res.send('home');
});

app.get('/generate', function (req, res) {  
 
});


app.listen(port, () => console.log(`app listening on port ${port}!`))
 
