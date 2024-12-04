const calendarContainer = document.getElementById('calendar');

for (let i = 1; i <= 24; i++) {
  let box = document.createElement('li');
  box.classList.add('calendar-box');
  let number = document.createElement('p');
  number.classList.add('calendar-box__number');
  number.innerHTML = i;
  let footer = document.createElement('div');
  footer.classList.add('calendar-box__footer')
  const icon = document.createElement('i');
  icon.classList.add('fas', 'fa-gift');
  let description = document.createElement('p');
  description.innerHTML = "Open me!";
  box.appendChild(number);
  box.appendChild(footer)
  footer.appendChild(icon)
  footer.appendChild(description)
  calendarContainer.appendChild(box);
}