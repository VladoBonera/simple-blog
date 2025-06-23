const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Връзка към MongoDB контейнера
mongoose.connect('mongodb://mongo:27017/blog', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('🟢 Свързан с MongoDB'))
.catch((err) => console.error('🔴 Грешка при свързване с MongoDB:', err));

// Тестов маршрут за начална страница
app.get('/', (req, res) => {
  res.send('✅ Сървърът работи и е свързан с MongoDB!');
});

// Примерен маршрут (може да се замени с реална логика)
app.get('/api/posts', (req, res) => {
  res.json([{ title: 'Примерна публикация', content: 'Текст на публикацията' }]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Сървърът слуша на http://localhost:${PORT}`);
});