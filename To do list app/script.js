const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');
const ul = document.querySelector('ul');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        const taskSpan = document.createElement('span');
        const removeBtn = document.createElement('button');

        taskSpan.textContent = input.value;
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn');

        li.appendChild(taskSpan);
        li.appendChild(removeBtn);
        ul.appendChild(li);

        input.value = '';
    }
});

ul.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-btn')) {
        const li = e.target.parentElement;
        ul.removeChild(li);
    }
});
