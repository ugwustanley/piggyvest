const amount = document.querySelector("#cal-amt")
const plan = document.querySelector("#cal-plan")
const submit = document.querySelector("#cal-sub")
const year = document.querySelector("#cal-year")
const answer = document.querySelector(".answer");
const error = document.querySelector("#error");
const interest = document.querySelector(".interest")
const capital = document.querySelector(".capital")
submit.addEventListener("click", function(e){
    e.preventDefault()
    let du = plan.value;
    let years = year.value;
    let amounts = amount.value;
    if ( years == 0){
        error.textContent = "please fill out the required filed";
    }else{
    if(du == "Flex-Naira"){
        console.log(du)
        let naira = amounts * 0.1 ;
        interest.textContent = naira * years;
        let returns = naira + (years * amounts);
        answer.textContent = returns;
        capital.textContent = amounts;
        capital.innertext = amounts;
        error.textContent = "";
        console.log(naira)
        
        error.textContent = "";
        console.log(returns)
    }else if (du == "Flex-Dollar"){
       console.log(du)
       let naira = amounts * 0.06 ;
       interest.textContent = naira;
       let returns = naira + (years * amounts);
       answer.textContent = returns;
       capital.textContent = amounts;
       capital.innertext = amounts;
       error.textContent = "";
       console.log(naira)
    }
    else if (du == "Safelock"){
        let naira = amounts * 0.155 ;
        interest.textContent = naira;
        let returns = naira + (years * amounts);
        answer.textContent = returns;
        capital.textContent = amounts;
        capital.innertext = amounts;
        error.textContent = "";
        console.log(naira)
     }
     else if (du == "Target"){
        let naira = amounts * 0.1 ;
        interest.textContent = naira;
        let returns = naira + (years * amounts);
        answer.textContent = returns;
        capital.textContent = amounts;
        capital.innertext = amounts;
        error.textContent = "";
        console.log(naira)
     }}
})