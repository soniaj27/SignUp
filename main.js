function signup(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var confirmpass=document.getElementById("confirmpass").value;
    console.log(password,confirmpass)
    if(password!=confirmpass){
        alert("Password and confirm password are not matched");
        
    }

    else{

    // if input fild is blank it will show error
    if( name ==""|| email==""|| password=="" || confirmpass=="" )
    {
        document.getElementById("error").innerText="Error: All the fields are mandatory";
        console.log("error");
    }
    
    else{
       
        // if all input is filled
              document.getElementById("suces").innerText="Successfully Signed up!";
        

              //generating token
            const generatedToken = generateString(16);
    
    // creating obj
            const userDetails = {
                name:name,
                email:email,
                password:password
            }
    
            // console.log("details",generatedToken);
    
            window.localStorage.setItem("userDetails", JSON.stringify(userDetails));
            window.localStorage.setItem("token",generatedToken);
          

            setInterval(() => {
            window.location.href = "Profile.html"; // moving to profile page after clciking singup
            
        }, 1000);
       

}
    }
}


// generating random string
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}



// route so that before signup it will not go to profile on cliking profile button
function route(){

    let Object = window.localStorage.getItem("token");
    console.log(Object);
    if(Object!=null)
    {
        window.location.href="Profile.html";
    }
    else{
        window.location.href="index.html";
    }
}


function getuser(){
    let object =JSON.parse(window.localStorage.getItem("userDetails"));
    console.log(object.name);
    document.getElementById("fullname").innerHTML= object.name;
}