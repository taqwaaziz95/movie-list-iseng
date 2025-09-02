const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { config } = require('./config/env');
const { errorHandler } = require('./middleware/error');
const authRoutes = require('./modules/auth/auth.routes');
const movieRoutes = require('./modules/movies/movie.routes');

const app = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: config.corsOrigin,
  credentials: true
}));

app.get('/api/health', (req, res) => res.json({ ok: true, env: config.nodeEnv }));

app.use('/api/auth', authRoutes);
app.use('/api/movies', movieRoutes);

app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Server running on http://localhost:${config.port}`);
});
