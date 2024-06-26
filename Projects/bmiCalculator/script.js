const form = document.querySelector('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    const result = document.querySelector('#results');

    if(height===' ' || height <=0 || isNaN(height)){
        result.innerHTML = "Enter a valid height";
    }

    else if(weight===' ' || weight <=0 || isNaN(weight)){
        result.innerHTML = "Enter a valid weight";
    }

    else{
        const BMI = (weight/((height*height)/10000)).toFixed(2);
        result.innerHTML = `<span>${BMI}</span>`

        if(BMI <18.6) result.innerHTML+='<h5>You are underweight</h5>';
        else if(BMI > 24.9) result.innerHTML+='<h5>You are overweight</h5>'
        else result.innerHTML+='<h5>You are normally weighted</h5>'
    }
})