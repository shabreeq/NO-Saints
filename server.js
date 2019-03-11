
connection.connect(function(err) {
  if (err) throw err;
  
  

  .then(()=>{
    app.listen(PORT, function() {
      console.log("MortarPestel.V2 listening on PORT " + PORT);
    });
  })
  .catch((err)=>{
    console.log('Error creating Mortar_Pestel DB');
    console.log(err);
  });
});