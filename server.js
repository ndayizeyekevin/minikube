const express = require('express');
const path = require('path');
const fs = require('fs').promises;
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from project root and public/
app.use(express.static(path.join(__dirname)));
app.use(express.static(path.join(__dirname, 'public')));

// Simple routes to serve the static HTML pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/students', (req, res) => {
  res.sendFile(path.join(__dirname, 'students.html'));
});

app.get('/assignments', (req, res) => {
  res.sendFile(path.join(__dirname, 'assignments.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact.html'));
});

// POST handler for contact form submissions
app.post('/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !message) {
      return res.redirect('/contact.html?error=1');
    }

    const messagesPath = path.join(__dirname, 'messages.json');
    let messages = [];
    try {
      const existing = await fs.readFile(messagesPath, 'utf8');
      messages = JSON.parse(existing || '[]');
    } catch (e) {
      // if file doesn't exist we'll create it
      messages = [];
    }

    messages.push({ name, email, subject: subject || '', message, createdAt: new Date().toISOString() });
    await fs.writeFile(messagesPath, JSON.stringify(messages, null, 2), 'utf8');

    return res.redirect('/contact.html?sent=1');
  } catch (err) {
    console.error('Error saving contact message:', err);
    return res.redirect('/contact.html?error=1');
  }
});

// 404 handler - serve static 404 page
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '404.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Class website is running at http://localhost:${PORT}`);
});
