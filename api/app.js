const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: "API is working 🚀" });
});

app.listen(5001, () => console.log("API running"));
