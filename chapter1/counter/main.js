            var number = document.querySelector('#number');
            var increase = document.querySelector('#increase');
            var decrease = document.querySelector('#decrease');
            /*
            console.log(number);
            console.log(increase);
            console.log(decrease);
            */
            var elements = [number, increase, decrease];
            elements.forEach(function(element){
                console.log(element);
            });
            var number_val = parseInt(number.textContent, 10);
            var increase_eve = document.getElementById("increase")
            var decrease_eve = document.getElementById("decrease")

            increase_eve.addEventListener('click', function() {
                number_val += 1;
                number.textContent = number_val;
                console.log('increase가 클릭 됨')
            })
            decrease_eve.addEventListener('click', function() {
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