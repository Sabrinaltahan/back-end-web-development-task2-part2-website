
const apiUrl = 'https://back-end-web-development-task2-part1-api.onrender.com/courses';

function fetchCourses() {
    fetch(`${apiUrl}`)
        .then(response => response.json())
        .then(courses => {
            const courseList = document.getElementById('courseList');
            courseList.innerHTML = '';

            courses.forEach(course => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${course.id}</td>
                    <td>${course.course_code}</td>
                    <td>${course.course_name}</td>
                    <td><a href="${course.syllabus}">Link</a></td>
                    <td>${course.progression}</td>
                    <td>
                        <button onclick="goUpdateCourse(${course.id})">Update</button>
                        <button onclick="deleteCourse(${course.id})">Delete</button>
                    </td>
                `;
                courseList.appendChild(tr);
            });
        })
        .catch(error => console.error('Error fetching courses:', error));
}


function addCourse(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const courseData = {
        courseCode: formData.get('courseCode'),
        courseName: formData.get('courseName'),
        syllabus: formData.get('syllabus'),
        progression: formData.get('progression')
    };

    fetch(`${apiUrl}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(courseData) 
    })
    .then(() => {
        window.location.href = 'index.html'; 
    })
    .catch(error => console.error('Error adding course:', error));
}



function deleteCourse(id) {
    fetch(`${apiUrl}/${id}`, {
        method: 'DELETE'
    })
    .then(() => {
        fetchCourses(); 
    })
    .catch(error => console.error('Error deleting course:', error));
}


function goUpdateCourse(id) {
    window.location.href = `update.html?id=${id}`;
}


function fetchCourseDetails(id) {
    fetch(`${apiUrl}/${id}`)
        .then(response => response.json())
        .then(course => {
            document.getElementById('courseCode').value = course.course_code;
            document.getElementById('courseName').value = course.course_name;
            document.getElementById('syllabus').value = course.syllabus;
            document.getElementById('progression').value = course.progression;
        })
        .catch(error => console.error('Error fetching course details:', error));
}


window.addEventListener('load', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('id');
    if (courseId) {
        fetchCourseDetails(courseId);
    }
});


function updateCourse(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const courseId = new URLSearchParams(window.location.search).get('id');

    fetch(`${apiUrl}/${courseId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formData))
    })
    .then(() => {
        window.location.href = 'index.html';
    })
    .catch(error => console.error('Error updating course:', error));
}


// Fetch courses when the page loads
window.addEventListener('load', fetchCourses);
