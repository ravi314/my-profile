
var express=require('express')
const app = express();

app.use(express.static('./dist/my-portfolio'));
app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/my-portfolio/'});
  });
  app.listen(process.env.PORT || 8080);