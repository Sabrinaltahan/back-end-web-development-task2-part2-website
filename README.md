## Project Structure

The project structure is organized as follows:
- `index.html`: Home page for displaying a list of work experiences and providing links to other pages.
- `add.html`: Page for adding a new work experience to the system.
- `update.html`: Page for updating an existing work experience.
- `about.html`: Page providing information about the project.
- `styles.css`: CSS file for styling HTML pages.
- `script.js`: JavaScript file containing client-side functions for interacting with the API and handling page behavior.
- `README.md`: This file, providing an overview of the project.

## Pages

### Home Page (`index.html`)
Displays a list of work experiences retrieved from the API. Allows users to view work experience details, update existing entries, and delete entries.

### Add Page (`add.html`)
Provides a form for adding a new work experience to the system. Users can input the company name, job title, location, start date, end date, and description.

### Update Page (`update.html`)
Allows users to update the details of an existing work experience. Retrieves the current details of the experience from the API and pre-fills the form fields for editing.

### About Page (`about.html`)
Provides information about the project, including its purpose, features, and technologies used.

## API

The project utilizes a RESTful API for CRUD operations on work experiences. The API endpoints are as follows:
- GET `/workexperience`: Retrieve all work experiences.
- GET `/workexperience/:id`: Retrieve a specific work experience by ID.
- POST `/workexperience`: Add a new work experience.
- PUT `/workexperience/:id`: Update an existing work experience.
- DELETE `/workexperience/:id`: Delete a work experience.

API Base URL: [http://localhost:3000/workexperience](http://localhost:3000/workexperience)

## Database

The project uses a MySQL database to store work experience data. The database schema consists of a single table:

```
workexperience
+-------------+--------------+------+-----+---------+----------------+
| Field       | Type         | Null | Key | Default | Extra          |
+-------------+--------------+------+-----+---------+----------------+
| id          | INT          | NO   | PRI | NULL    | auto_increment |
| companyname | VARCHAR(255) | YES  |     | NULL    |                |
| jobtitle    | VARCHAR(255) | YES  |     | NULL    |                |
| location    | VARCHAR(255) | YES  |     | NULL    |                |
| startdate   | DATE         | YES  |     | NULL    |                |
| enddate     | DATE         | YES  |     | NULL    |                |
| description | TEXT         | YES  |     | NULL    |                |
+-------------+--------------+------+-----+---------+----------------+
```

## JavaScript Functions

### `addCourse(event)`
Handles form submission for adding a new work experience. Sends a POST request to the API to add the experience.

### `fetchCourseDetails(id)`
Fetches details of a work experience by its ID from the API. Pre-fills the form fields on the update page with the retrieved data.

### `updateCourse(event)`
Handles form submission for updating an existing work experience. Sends a PUT request to the API to update the experience.