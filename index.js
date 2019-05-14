var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

function opunMiddleware(req, res, next) {
    console.log('set header', req.get('Opun-Gateway-State'));
    res.set('Opun-Gateway-State-Resp', req.get('Opun-Gateway-State') || 'none');
    return next();
}

app.use(opunMiddleware);

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
