'use strict';
const express = require('express')
const app = express()
const port = 3000
const tabletojson = require('tabletojson').Tabletojson;
app.get('/', function (req, res) {
  tabletojson.convertUrl(
    'https://web.archive.org/web/20081011014831/http://www.cpi.com.cn/cpi-eng/code/beijing.asp',
    function(tablesAsJson) {
        console.log(tablesAsJson[17]);
        res.send(tablesAsJson[17])
    }
);
  
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
 
