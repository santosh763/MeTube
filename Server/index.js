const  express = require('express');
const request=require('request');
const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
// proxy endpoint

app.use('/api',(req,res)=>{
    const apiUrl='http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=Query'+req.url;
    req.pipe(request(apiUrl)).pipe(res);
});

//start the server 
 const PORT = process.env.PORT || 8000;
 app.listen(PORT,()=>{
    console.log("proxy server is running on port "+PORT);
 });
 