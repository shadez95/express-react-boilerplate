import path from 'path';
import app from './config/express';
import routes from './routes/index.route';
import swagger from './config/swagger';
import * as errorHandler from './middlewares/errorHandler';
import joiErrorHandler from './middlewares/joiErrorHandler';

// eslint-disable-next-line global-require
if (process.env.NODE_ENV === 'development') require('./dev').default();

// Swagger API documentation
app.get('/swagger.json', (req, res) => {
  res.json(swagger);
});

// Router
app.use('/api', routes);

// Landing page
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Joi Error Handler
app.use(joiErrorHandler);

// Error Handler
app.use(errorHandler.notFoundErrorHandler);
app.use(errorHandler.errorHandler);

app.listen(app.get('port'), app.get('host'), () => {
  console.log(`Server running at http://${app.get('host')}:${app.get('port')}`);
});

export default app;
