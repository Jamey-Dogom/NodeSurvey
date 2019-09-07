const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({
    extended: true
}));

app.get('/', (request, response) => {

    response.render('index');
})

app.post('/result', (request, response) => {
    console.log(request.body.location);
    var response_info = [{
        name: request.body.name,
        location: request.body.location,
        language: request.body.language,
        comment: request.body.comment
    } ]
    response.render('show', {results: response_info});
})

app.listen(8000, () => console.log("litty on the 8000"));