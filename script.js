const exercisePlan = {
     '2024-08-05': [
         {
             name: 'Przysiady',
             reps: 8
         }
     ]
 }

 function dateToString (date) {
     return date.toISOString().split('T')[0]
 }
 const ONE_DAY_IN_MS = 24 * 60 * 60 *1000
 function renderCalendar () {
     const calendarNode = document.getElementById('calendar')
     const today = new Date()
     let calendarHTML = ''
     for (let i = 0; i < 8; i++) {
         const day = dateToString(new Date(today.getTime() + ONE_DAY_IN_MS * i))
         const plan = exercisePlan[day]
         calendarHTML += `<div class="day">
             ${day}
             ${plan ? `<ul>
                 ${plan.map(exercise => `<li>${exercise.name} - ${exercise.reps}</li>`)
                 }
             </ul>` : 'Brak planu'}
             <button>Dodaj</button>
         </div>`
     }
     calendarNode.innerHTML = calendarHTML
 }


 document.addEventListener('DOMContentLoaded', () => { 
    renderCalendar()
     const weightInput = document.querySelector('#KG_calculator')
     const repInput = document.querySelector('#REP_calculator')
     const masaInput = document.querySelector('#BodyWeight_calculator')

     function calcRepMax () { 
         const ratios = {
             1: 1,
             2: 1.07,
             3: 1.12,
             4: 1.15,
             5: 1.18,
             6: 1.21,
             7: 1.24,
             8: 1.27
         }

         let rep = parseInt(repInput.value)
         const ratio = ratios[rep] || 0
         const weight = parseInt(weightInput.value)
         const masa = parseInt(masaInput.value)
        
         document.getElementById("1RM_wynik").innerHTML = Number.parseInt(weight*ratio*10, 10)/10;

         if(masa > 0) document.getElementById("BW_wynik").innerHTML = Number.parseInt(weight*ratio/masa*1000, 10)/10; 
         else document.getElementById("BW_wynik").innerHTML = 0;
     }

     weightInput.addEventListener('input', () => {
         calcRepMax()
     })

     repInput.addEventListener('input', () => {
        calcRepMax()
    })

    masaInput.addEventListener('input', () => {
        calcRepMax()
    })
 })
    
