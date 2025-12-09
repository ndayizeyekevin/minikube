# Class Website - Web Development 101

A professional class website built with HTML, CSS, and JavaScript featuring student information, assignments, and course details.

## Project Structure

```
b-tech/
├── index.html              # Home page with class information
├── students.html           # Student roster with search functionality
├── assignments.html        # Assignment list with filtering
├── about.html              # Course information and instructor details
├── 404.html                # Error page
├── styles.css              # Styling for all pages
├── script.js               # JavaScript for interactivity
├── public/                 # Static files directory
│   ├── styles.css
│   └── script.js
├── package.json            # Node.js project configuration (optional)
└── server.js               # Node.js/Express server (optional)
```

## Features

### Pages
- **Home Page**: Displays class information including semester, schedule, location, and enrollment
- **Students Page**: Shows enrolled students with search functionality
- **Assignments Page**: Lists assignments with status filtering (All, Pending, Completed)
- **About Page**: Course description, goals, and instructor information

### Interactive Features
- **Search Functionality**: Search students by name or email on the students page
- **Assignment Filtering**: Filter assignments by status (All, Pending, Completed)
- **Responsive Design**: Mobile-friendly layout that adapts to different screen sizes
- **Smooth Animations**: Fade-in and slide-up animations for visual appeal
- **Navigation Highlighting**: Current page highlighting in the navigation bar

## How to Use

### Static HTML Version (No Server Required)
Simply open the HTML files directly in your browser:
- Double-click `index.html` to start
- Use the navigation menu to browse between pages

### Dynamic Version with Node.js Server
If you want to run the project with a Node.js server:

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

3. Open your browser and navigate to:
```
http://localhost:3000
```

## Browser Compatibility

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Customization

### Modify Class Information
Edit the HTML files to update:
- Class name and details in `index.html`
- Student information in `students.html`
- Assignment details in `assignments.html`
- Course information in `about.html`

### Styling
Modify `styles.css` to change:
- Color scheme (currently using purple gradient #667eea to #764ba2)
- Typography and font sizes
- Layout and spacing
- Animations and transitions

### JavaScript Features
Modify `script.js` to:
- Add new search/filter functionality
- Enhance animations
- Add form validation
- Integrate with a backend API

## Technology Stack

- **HTML5**: Semantic markup and page structure
- **CSS3**: Modern styling with flexbox and grid
- **JavaScript (ES6+)**: DOM manipulation and interactivity
- **Node.js** (optional): Server runtime
- **Express.js** (optional): Web framework
- **EJS** (optional): Template engine

## Features to Add

- User authentication
- Database integration for dynamic data
- Assignment submission system
- Grade tracking
- Announcements board
- Class calendar
- Email notifications

## License

ISC

## Author

Your Name

---

**Created**: December 2025
