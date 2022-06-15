const students = [
    {
        name: 'Martin',
        lastName: 'Lant',
        marks: [9, 8, null, 7, 5],
    },

    {
        name: 'Francesco',
        lastName: 'Portus',
        marks: [5, 4, 2, 3, 2],
    },

    {
        name: 'Bill',
        lastName: 'Merdoc',
        marks: [10, null, null, null, 10],

    },

    {
        name: 'John',
        lastName: 'Entman',
        marks: [9, 8, 9, 7, 5],

    },
];

const container = document.querySelector('.container');

const render = (students) => {
    // if (!students.length) return;
    const fragment = document.createDocumentFragment();
    students.forEach(({name, lastName, marks}) => {
        const div = document.createElement('div');

        let visitedLectures = marks.filter(mark => {
            return mark !== null;
        });

        const averageMarks = marks.reduce((a, b) => {
            if (b === null) {
              return a + 0;
            } else {
                return a + b;
            }}, 0) / marks.length;

        console.log(averageMarks)

        div.classList.add('student-card');
        div.innerHTML = `
            <div class="name">${name}</div>
            <div class="last-name">${lastName}</div>
            <div class="visited-lectures">${visitedLectures.length}</div>
            <div class="average">${averageMarks}</div>
        `;
        fragment.appendChild(div);
    });
    container.appendChild(fragment)
}
render(students);

console.log(table);
console.log(students);