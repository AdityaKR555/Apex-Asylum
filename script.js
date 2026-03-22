window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 20) {
        navbar.classList.add("scrolled");
        console.log("Scrolled down", window.scrollY);
    } else {
        navbar.classList.remove("scrolled");
    }
});

const bmiform = document.querySelector('#bmi-form');
const results = document.getElementById('results');

bmiform.addEventListener('submit', (e) => {
    e.preventDefault();
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    if(height<=0 || isNaN(height)){
        results.innerHTML = "Please enter a valid height.";
        return;
    }
    else if(weight<=0 || isNaN(weight)){
        results.innerHTML = "Please enter a valid weight.";
        return;
    }
    else{

        const bmi = weight / (height * height);
        
        results.style.marginTop = "2rem";

        let message = `Your BMI is ${bmi.toFixed(2)}`;
              
        if(bmi < 18.5){
            message += "You are underweight.";
            results.style.textShadow = "0px 0px 7px red";
        }
        else if (bmi < 25){
            message += "You are normal weight.";
            results.style.textShadow = "0px 0px 7px green";
        }
        else if (bmi < 30){
            message += "You are overweight.";
            results.style.textShadow = "0px 0px 7px orange";
        }
        else{
            message += "You are obese.";
            results.style.textShadow = "0px 0px 7px red";
        }

        results.innerHTML = message;
                
}
});