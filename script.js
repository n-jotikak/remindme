const REMINDER = [
  {
    title: 'prepare exam',
    note: 'review javascript for final exam',
    date: '2023-06-24',
    startTime: '20:00',
    endTime: '22:00',
    priority: 'B'
  },
  {
    title: 'take final exam',
    note: 'final exam of the term',
    date: '2023-06-25',
    startTime: '14:00',
    endTime: '15:30',
    priority: 'A'
  },
  {
    title: 'have party',
    note: 'celebrate after finish the term',
    date: '2023-06-25',
    startTime: '19:00',
    endTime: '21:00',
    priority: 'C'
  },
]


// STEP1: select all the DOM elements you need
let counter = REMINDER.length
const remindersWrapper = document.querySelector('.reminders-wrapper')
const reminderForm = document.querySelector('#reminderForm')
const title = document.querySelector('#title')
const note = document.querySelector('#note')
const date = document.querySelector('#date')
const startTime = document.querySelector('#startTime')
const endTime = document.querySelector('#endTime')
const amountOfReminders = document.querySelector('#amountOfReminders')
amountOfReminders.textContent = counter


for (let i = 0; i< REMINDER.length; i++){
  let reminder = REMINDER[i]

  remindersWrapper.innerHTML+=`
  <div class="reminder">
    <div class="row">
      <h4>${reminder.title}</h4>
      <span class="priority">${reminder.priority}</span>
    </div>
    <p>${reminder.note}</p>
    <p>Date: ${reminder.date}</p>
    <div class="row">
      <p>Start Time: ${reminder.startTime}</p>
      <p>End Time: ${reminder.endTime}</p>
    </div>
  </div>  


  
  `


}


// STEP2: get the data from the array of objects REMINDERS
// to create the card and add them to reminders-wrapper
// + should also display the total of reminders by getting 
// the value from array's length (at first there are 3 reminders)







// STEP3: add event listener to the form
reminderForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('you are trying to add a new reminder')

    remindersWrapper.innerHTML +=`
    <div class="reminder">
      <div class="row">
        <h4>${title.value}</h4>
        <span class="priority">${priority.value}</span>
      </div>
      <p>${note.value}</p>
      <p>Date: ${date.value}</p>
      <div class="row">
        <p>Start Time: ${startTime.value}</p>
        <p>End Time: ${endTime.value}</p>
      </div>
    </div>  
    `

    title.value = 0
    priority.value = 0
    note.value = 0
    date.value = 0
    startTime.value = 0
    endTime.value = 9

    counter = counter+1
    console.log(counter)
    amountOfReminders.textContent = counter

    // STEP4: add new reminder to reminders-wrapper with the input data user typed in the form




    // STEP5: clear the text from all input elements


    // STEP6: increase the total of reminders and display it in amountOfReminders


})