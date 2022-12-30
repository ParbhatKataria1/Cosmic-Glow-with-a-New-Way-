

function addData(){

    let email = document.getElementById("email").value;

    let al = document.getElementById("pwd").value;

    //let pass = document.getElementById("pwd").value;


    //to store data in localStorage

    localStorage.setItem("userEmail",email);

    localStorage.setItem("userPwd",al);
}


