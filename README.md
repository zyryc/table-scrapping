## About This tool
It is a simple tool for scrapping tables. Currently it only returns data in json format

change your url and the number of table (if there are more than one table).

To run, first install its dependencies

run the followimg commands

    $ npm install express
    $ npm install tabletojson

//   tabletojson.convertUrl(
//     'https://web.archive.org/web/20081011014831/http://www.cpi.com.cn/cpi-eng/code/beijing.asp',
//     function(tablesAsJson) {
//         console.log(tablesAsJson[17]);
//         res.send(tablesAsJson[17])
//     }
// );
});