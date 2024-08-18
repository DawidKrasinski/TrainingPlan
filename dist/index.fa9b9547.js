function dodajKilogramy() {
    let KG = document.getElementById("KG_kalkulator").innerText;
    KG = parseInt(KG, 10);
    document.getElementById("KG_kalkulator").innerHTML = KG + 1;
}
function odejmijKilogramy() {
    let KG = document.getElementById("KG_kalkulator").innerText;
    KG = parseInt(KG, 10);
    if (KG <= 0) document.getElementById("KG_kalkulator").innerHTML = 0;
    else document.getElementById("KG_kalkulator").innerHTML = KG - 1;
}
function dodajPowtorzenia() {
    let REP = document.getElementById("REP_kalkulator").innerText;
    REP = parseInt(REP, 10);
    if (REP >= 8) document.getElementById("REP_kalkulator").innerHTML = 8;
    else document.getElementById("REP_kalkulator").innerHTML = REP + 1;
}
function odejmijPowtorzenia() {
    let REP = document.getElementById("REP_kalkulator").innerText;
    REP = parseInt(REP, 10);
    if (REP <= 0) document.getElementById("REP_kalkulator").innerHTML = 0;
    else document.getElementById("REP_kalkulator").innerHTML = REP - 1;
}
function dodajMase() {
    let MASA = document.getElementById("MASA_kalkulator").innerText;
    MASA = parseInt(MASA, 10);
    document.getElementById("MASA_kalkulator").innerHTML = MASA + 1;
}
function odejmijMase() {
    let MASA = document.getElementById("MASA_kalkulator").innerText;
    MASA = parseInt(MASA, 10);
    if (MASA <= 0) document.getElementById("MASA_kalkulator").innerHTML = 0;
    else document.getElementById("MASA_kalkulator").innerHTML = MASA - 1;
}
/*function obliczKalkulator()
 {
     let KG = document.getElementById("KG_kalkulator").innerText;
     let REP = document.getElementById("REP_kalkulator").innerText;
     let MASA = document.getElementById("MASA_kalkulator").innerText;
     let mnoznik = 0;

     KG = parseInt(KG, 10);
     REP = parseInt(REP, 10);
     MASA = parseInt(MASA, 10);


     document.getElementById("1RM_wynik").innerHTML = Number.parseInt(KG*mnoznik*10, 10)/10;

     if(MASA > 0) document.getElementById("BW_wynik").innerHTML = Number.parseInt(KG*mnoznik/MASA*1000, 10)/10;
     else document.getElementById("BW_wynik").innerHTML = 0;

 }

 function wprowadzMaseKalkulator()
 {
     let podanaMasa = prompt("Podaj swoją mase ciała");
     podanaMasa = parseInt(podanaMasa);

     if(podanaMasa <= 0) document.getElementById("MASA_kalkulator").innerHTML = 0;
     else if(Number.isNaN(podanaMasa)) document.getElementById("MASA_kalkulator").innerHTML = 0;
     else document.getElementById("MASA_kalkulator").innerHTML = podanaMasa;
 }

 function wprowadzKilogramyKalkulator()
 {
     let podaneKG = prompt("Podaj jaki ciężar podniosłeś");
     podaneKG = parseInt(podaneKG);

     if(podaneKG <= 0) document.getElementById("KG_kalkulator").innerHTML = 0;
     else if(Number.isNaN(podaneKG)) document.getElementById("KG_kalkulator").innerHTML = 0;
     else document.getElementById("KG_kalkulator").innerHTML = podaneKG;
 }

 function wprowadzPowtorzeniaKalkulator()
 {
     let podaneREP = prompt("Podaj ile powtórzeń zrobiłeś");
     podaneREP = parseInt(podaneREP);

     if(podaneREP <= 0) document.getElementById("REP_kalkulator").innerHTML = 0;
     else if(podaneREP >= 8) document.getElementById("REP_kalkulator").innerHTML = 8;
     else if(Number.isNaN(podaneREP)) document.getElementById("REP_kalkulator").innerHTML = 0;
     else document.getElementById("REP_kalkulator").innerHTML = podaneREP;
 }*/ const exercisePlan = {
    "2024-08-05": [
        {
            name: "Przysiady",
            reps: 8
        }
    ]
};
function dateToString(date) {
    return date.toISOString().split("T")[0];
}
const ONE_DAY_IN_MS = 86400000;
function renderCalendar() {
    const calendarNode = document.getElementById("calendar");
    const today = new Date();
    let calendarHTML = "";
    for(let i = 0; i < 4; i++){
        const day = dateToString(new Date(today.getTime() + ONE_DAY_IN_MS * i));
        const plan = exercisePlan[day];
        calendarHTML += `<div class="day">
             ${day}
             ${plan ? `<ul>
                 ${plan.map((exercise)=>`<li>${exercise.name} - ${exercise.reps}</li>`)}
             </ul>` : "Brak planu"}
             <button>Dodaj tessr</button>
         </div>`;
    }
    calendarNode.innerHTML = calendarHTML;
}
document.addEventListener("DOMContentLoaded", ()=>{
    renderCalendar();
    const weightInput = document.getElementById("KG_kalkulator");
    const decrementWeightButton = document.getElementById("decrementWeightButton");
    const incrementWeightButton = document.getElementById("incrementWeightButton");
    function calcRepMax() {
        let REP = document.getElementById("REP_kalkulator").innerText;
        let MASA = document.getElementById("MASA_kalkulator").innerText;
        REP = parseInt(REP, 10);
        MASA = parseInt(MASA, 10);
        const ratios = {
            1: 1,
            2: 1.07,
            3: 1.12,
            4: 1.15,
            5: 1.18,
            6: 1.21,
            7: 1.24,
            8: 1.27
        };
        const rep = parseInt(REP);
        const ratio = ratios[rep] || 0;
        const weight = parseInt(weightInput.value);
        document.getElementById("1RM_wynik").innerHTML = Number.parseInt(weight * ratio * 10, 10) / 10;
        if (MASA > 0) document.getElementById("BW_wynik").innerHTML = Number.parseInt(weight * ratio / MASA * 1000, 10) / 10;
        else document.getElementById("BW_wynik").innerHTML = 0;
    }
    weightInput.addEventListener("input", ()=>{
        calcRepMax();
    });
    incrementWeightButton.addEventListener("click", ()=>{
        weightInput.value++;
        calcRepMax();
    });
    decrementWeightButton.addEventListener("click", ()=>{
        const newValue = weightInput.value - 1;
        if (newValue <= 0) return;
        weightInput.value = newValue;
        calcRepMax();
    });
});

//# sourceMappingURL=index.fa9b9547.js.map
