document.addEventListener('DOMContentLoaded', () => { 
    renderCalendar()
})

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