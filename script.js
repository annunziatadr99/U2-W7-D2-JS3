const counterElement = document.getElementById('counter');
        let count = 0;

        function updateCounter() {
            count++;
            counterElement.textContent = count;
        }
        setInterval(updateCounter, 1000);



        class RegistrazioneEvent{
            constructor(name){
                this.eventName = name;
            }
        }
        window.addEventListener("DOMContentLoaded"), function () {
            const events = [];
          
            const form = document.querySelector("form");
            const button = document.querySelectorAll("button");
          
            
            const inputImg = document.getElementById("event-name");

            button.onsubmit = function (e) {
                e.preventDefault();}
        
        }