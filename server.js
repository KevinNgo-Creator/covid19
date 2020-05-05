const express = require('express')
const PORT = process.env.PORT || 3006;
const app = express();
app.use(express.static('./build'));
app.listen(PORT, () => {
  console.log(`😎 Server is listening on port ${PORT}`);
});

// const mysql = require('mysql')