function login(username,password){
    try{
        if(!username) console.log("Username Required")
        if(!password) console.log("Password required")
        if(this.username!=username || this.password!=password) console.log("Invalid credentials")
    }
    catch(error){
        console.error("Error:", error.message);
    }
}
const credentials={
    username:"Prasanjit",
    password:123
}
login("",123)
login("rahul",22)