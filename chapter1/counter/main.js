            var number = document.getElementById("number");
            var increase = document.getElementById("increase");
            var decrease = document.getElementById("decrease");
            var elements = [number, increase, decrease];
            var number_val = parseInt(number.textContent, 10);
            elements.forEach(function(element){
                console.log(element);
            });

            increase.addEventListener('click', function() {
                number_val += 1;
                number.textContent = number_val;
                console.log('increase가 클릭 됨')
            })
            decrease.addEventListener('click', function() {
                number_val -= 1;
                number.textContent = number_val;
                console.log('decrease가 클릭 됨')
            })

            /*
const number = document.getElementById("number");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");

increase.onclick = () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = current + 1;
};

decrease.onclick = () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = current - 1;
};*/