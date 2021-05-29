const express = require('express');
const helmet = require('helmet');
const cartoonsRoutes = require('./routes/cartoons');

const app = express();

app.use(helmet());
app.use((request, response, next) => {
    console.log('this is a middleware');
    next();
});
app.use('/cartoons', cartoonsRoutes);

app.get('/test', (request, response) => {
    response.send('this is test, congratulations');
});

app.listen(4000, () => {
    console.log('listen in port 4000');
});
