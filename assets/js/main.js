
document.getElementById('generate_ticket_button').addEventListener('click', genterateTicket);
function genterateTicket(e) {
    e.preventDefault();
    var nameInputEl = document.getElementById('name');
    var kmInputEl = document.getElementById('km');
    var ageGroupSelectEl = document.getElementById('age_group');
    var ticketEl = document.querySelector('.ticket_container');

    var fullPrice = kmInputEl.value * 0.21
    var discountText = 'Prezzo Pieno';
   
    if(ageGroupSelectEl.value == 'minorenne') {
        fullPrice -= fullPrice * 0.2;
        discountText = 'Sconto Minorenne';

    } else if (ageGroupSelectEl.value == 'over65') {
        fullPrice -= fullPrice * 0.4;
        discountText = 'Sconto Senior';

    }

    


    ticketEl
    .insertAdjacentHTML('beforeend', 
    `
        <div class="ticket">
            <div class="w-25 bg_grey">
                Nome Passeggero ${nameInputEl.value}
            </div>
            <div class="ticket__details w-75 d_flex">
                <div>
                    <h3>Offerta</h3>
                    <span>${discountText}</span>
                    
                </div>
                <div>
                    <h3>Carrozza</h3> 
                    <span>${randomNumber(1, 10)}</span> 
                </div>
                <div>
                    <h3>Codice CP</h3> 
                    <span>${randomNumber(90000, 100000)}</span>
                </div>
                <div>
                    <h3>Costo Biglietto</h3>
                    <span>${fullPrice.toFixed(2)} €</span>
                </div>
            </div>
        </div>
    
    `);
}


document.getElementById('cancel_ticket_button').addEventListener('click', function () {  
    document.getElementById('name').value = "";
    document.getElementById('km').value = "";
    document.getElementById('age_group').value = "";

})




//  Genera un numero random compreso tra un minimo e un massimo.
//  @param {number} min - numero minimo del range
//  @param {number} max  - numero massimo del range
// @returns {number} numero casuale

function randomNumber(min, max) {
    return Math.floor(Math.random() * ( max - min )) + min
}


