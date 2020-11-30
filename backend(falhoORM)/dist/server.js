"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// import routes from './routes';
// import './database';
var app = express_1.default();
// app.use(routes);
app.get('/', function (request, response) {
    return response.json({ message: 'oi' });
});
app.listen(3333, function () {
    // eslint-disable-next-line no-console
    console.log('Server started in port 3333');
});
