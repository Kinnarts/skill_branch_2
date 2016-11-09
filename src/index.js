import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.json({
    hello: 'JS World',
  });
});

app.get('/task2A', (req, res) => {
  const sum = (+req.query.a || 0) + (+req.query.b || 0)
  res.send(sum.toString());
});

app.get('/fullname', (req, res) => {
  if (!req.query.fullname || (req.query.fullname.trim().split(/\s+/).length > 3) || !req.query.fullname.match(/^[\u00C0-\u017Fa-zA-Zа-яА-Я\s\']+$/)) {
  res.send('Invalid fullname');
  } else {
    const fullname = req.query.fullname.trim().split(/\s+/);
    var fio = toTitleCase(fullname.pop());
    if (fullname.length != 0) {
      fullname.forEach(function(item){
        fio += ' ' + item[0].toUpperCase() + '.'
      });
    }
    res.send(fio);
  }
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});

function toTitleCase(str)
{
  return str.replace(/.*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}