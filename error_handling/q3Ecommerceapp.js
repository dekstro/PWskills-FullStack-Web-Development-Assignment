function processPayment(amount, cardnumber, expiry_date){
    try{
        if(amount<0) console.log("Invalid payment amount")
        if(!cardnumber || typeof cardnumber !=='number') console.log("Invalid card number")
        if(!expiry_date || expiry_date>real_expire) console.log("Invalid Expiration date")
    }
    catch(error){
        console.error("Error:", error.message)
    }
}
const real_expire="120"
processPayment(2000,12234897,119)
processPayment(59,"optr",121)