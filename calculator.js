const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Addition
app.post('/add', (req, res) => {
  const { a, b } = req.body;
  res.json({ result: a + b });
});

// Subtraction
app.post('/subtract', (req, res) => {
  const { a, b } = req.body;
  res.json({ result: a - b });
});

// Multiplication
app.post('/multiply', (req, res) => {
  const { a, b } = req.body;
  res.json({ result: a * b });
});

// Division
app.post('/divide', (req, res) => {
  const { a, b } = req.body;
  if (b === 0) {
    return res.status(400).json({ error: 'Division by zero not allowed' });
  }
  res.json({ result: a / b });
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'UP' });
});

app.listen(port, () => {
  console.log(`Calculator app running on http://0.0.0.0:${port}`);
});