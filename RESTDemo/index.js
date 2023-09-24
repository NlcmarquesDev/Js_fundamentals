const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');
const methodOverride = require('method-override');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
//GET /comments - list all comments
//POST /comments - create a new comment
//GET /comments/:id - get one specific comment (using id) 
//PATCH /comments/:id - update one specific comment (using id) 
//DELETE /comments/:id - delete one specific comment (using id)



let comments = [
  {
    id:uuid(),
    username: 'Todd',
    text: "lorem Ipsum is simply   dummy text  of verdana et just ver    dolor   ",
  },
  {
    id:uuid(),
    username: 'Skyler',
    text: "lorem Ipsum is simply  ffffff dummy text  of verdana et just ver    dolor   ",
  },
  {
    id:uuid(),
    username: 'Sk8erBoi',
    text: "lorem Ipsum is simply   aaaaaaadummy text  of verdana et just ver    dolor   ",
  },
  {
    id:uuid(),
    username: 'onlysaywoof',
    text: "lorem Ipsum is simply   dusadccdscmmy text  of verdana et just ver    dolor   ",
  },
];
app.get('/', (req, res) => { 
  res.render('home');
});

//ROUTE FOR ALL COMMENTs
app.get('/comments', (req, res) => { 
  res.render('comments/index', {comments})
});

//ROUTE FOR TO ADD NEW COMMENT
app.get('/comments/new', (req, res) => { 
  res.render('comments/new');
});

//ROUTE FOR TO SAVE NEW COMMENT
app.post('/comments', (req, res) => { 
  const { username, text } = req.body;
  comments.push({ id:uuid(),username, text });
  res.redirect('/comments');
  console.log(comments);
  
});
//ROUTE FOR GO TO SINGLE COMMENT
app.get('/comments/:id', (req, res) => { 
  const { id } = req.params;
  const comment = comments.find(c => c.id === id)
  res.render('comments/show', { comment})
});
//ROUTE FOR TO EDIT A COMMENT
app.patch('/comments/:id', (req, res) => { 
  const { id } = req.params;
  const newCommentText = req.body.text;
  res.redirect('/comments')
  const foundComment = comments.find(c => c.id === id)
  foundComment.text = newCommentText; 
  console.log('all fix');
  res.send("All Good!");
})
//ROUTE FOR TO EDIT A COMMENT
app.get('/comments/:id/edit', (req, res) => {
  const { id } = req.params;
  const comment = comments.find(c => c.id === id)
  res.render('comments/edit', { comment})

 });
//ROUTE FOR DELETE A COMMENT
app.delete('/comments/:id', (req, res) => { 
  const { id } = req.params;
  comments = comments.filter(c => c.id !== id);
  res.redirect('/comments');
})

app.listen(3000, () => { 
  console.log('listening on port 3000');
})