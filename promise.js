let a=(accept,decline)=>{   //accept is .then(), decline is .catch()
    let rent=6500;
    if(rent<5000){
        accept("Proceed with the payment");
    }
    else{
        decline("Search another PG");
    }
}
a((msg)=>{
    console.log(msg);
},(err)=>{
    console.log(err);
})