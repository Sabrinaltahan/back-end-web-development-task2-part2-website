

## Project Structure

The project structure is organized as follows:
- `index.html`: Home page for displaying a list of courses and providing links to other pages.
- `add.html`: Page for adding a new course to the system.
- `update.html`: Page for updating an existing course.
- `about.html`: Page providing information about the project.
- `styles.css`: CSS file for styling HTML pages.
- `script.js`: JavaScript file containing client-side functions for interacting with the API and handling page behavior.
- `README.md`: This file, providing an overview of the project.

## Pages

### Home Page (`index.html`)
Displays a list of courses retrieved from the API. Allows users to view course details, update existing courses, and delete courses.

### Add Page (`add.html`)
Provides a form for adding a new course to the system. Users can input the course code, name, syllabus, and progression.

### Update Page (`update.html`)
Allows users to update the details of an existing course. Retrieves the current details of the course from the API and pre-fills the form fields for editing.

### About Page (`about.html`)
Provides information about the project, including its purpose, features, and technologies used.

## API

The project utilizes a RESTful API for CRUD operations on courses. The API endpoints are as follows:
- GET `/courses`: Retrieve all courses.
- GET `/courses/:id`: Retrieve a specific course by ID.
- POST `/courses`: Add a new course.
- PUT `/courses/:id`: Update an existing course.
- DELETE `/courses/:id`: Delete a course.

API Base URL: [http://localhost:3000/courses](http://localhost:3000/courses)

## Database

The project uses a MySQL database to store course data. The database schema consists of a single table:

```
courses
+-------------+--------------+------+-----+---------+----------------+
| Field       | Type         | Null | Key | Default | Extra          |
+-------------+--------------+------+-----+---------+----------------+
| id          | INT          | NO   | PRI | NULL    | auto_increment |
| course_code | VARCHAR(255) | YES  |     | NULL    |                |
| course_name | VARCHAR(255) | YES  |     | NULL    |                |
| syllabus    | VARCHAR(255) | YES  |     | NULL    |                |
| progression | VARCHAR(255) | YES  |     | NULL    |                |
+-------------+--------------+------+-----+---------+----------------+
```

## JavaScript Functions

### `addCourse(event)`
Handles form submission for adding a new course. Sends a POST request to the API to add the course.

### `fetchCourseDetails(id)`
Fetches details of a course by its ID from the API. Pre-fills the form fields on the update page with the retrieved data.

### `updateCourse(event)`
Handles form submission for updating an existing course. Sends a PUT request to the API to update the course.
