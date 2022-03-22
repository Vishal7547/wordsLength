
try {
    function run(){
        let vas =typeof 33.2;
        let data = document.getElementById('newh').value;
        document.getElementById('hide').style.display ="Block"
        document.getElementById('para').innerHTML=`Length of words is:${data.length}`;
    if(data == data.toLowerCase() || data == data.toUpperCase() ){

          if(data === ""){ 
            document.getElementById('hide').style.display="none";
         document.getElementById('err1').innerHTML ="empty is not valid"
        
     } else if(data == data.toLowerCase()){
        document.getElementById('err1').innerHTML =""
        document.getElementById('para1').innerHTML=`words in uppercase is:${data.toUpperCase()}`;
        document.getElementById('para2').style.display ="none";
        }
        else{
            document.getElementById('err1').innerHTML =""
             document.getElementById('para2').innerHTML=`words in lowercase is:${data.toLowerCase()}`;
             document.getElementById('para1').style.display ="none";
        
        }
      
      
    }else{
        document.getElementById('hide').style.display="none";
        
        document.getElementById('err1').innerHTML ="invalid";
    }
}
  }
  catch(err) {
    document.getElementById('err1').innerHTML = err;
  }

  



