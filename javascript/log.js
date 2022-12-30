function checkData(){

    let enterEmail = document.getElementById("email").value;

    let enterPwd = document.getElementById("pwd").value;

    // get data 

    let getEmail = localStorage.getItem("userEmail");

    let getPwd = localStorage.getItem("userPwd");

    if(enterEmail == getEmail){

        if(enterPwd == getPwd){
            window.location = "index.html"
            alert("Login Successful");
           
          
        }else{
            alert("Wrong password")
        }
    }
    else{
        alert(" Invalid details ");
    }
}