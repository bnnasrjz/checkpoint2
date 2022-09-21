const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('Time:', date_system())
  next()
})

app.get('.',(req,res)=>{

  readFile('/home.html','utf8',(err,html)=>{
   
    if(err){
      response.status(500).send('Hors service')
    } 
   response.send(html);
   })

});
app.listen(process.env.PORT ||3000, () => console.log('App available on htttp://localhost:3000'))
