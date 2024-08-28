

 function Expromise(){



 const mypromise = new Promise((resolve, reject) => {
    const success=false;

    setTimeout(() =>{
        if(success){
            console.log("Operation is successfull");
        }
        else{
            console.log("Operation is faild");
        }
    }, 5000);

});

mypromise
    .then((result) =>{
        console.log(result);
    })
    .catch((result) =>{
        console.log(result);
    });


}

export default Expromise;