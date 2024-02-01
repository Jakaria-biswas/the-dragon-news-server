const express = require("express");
const cors = require("cors");
const app = express();
const port =  process.env.PORT || 4000;

// middle ware

app.use(cors())




app.get("/", (req,res) => {
      res.send("the dragon news is working")
});

const category = require("./data/category.json");
const news = require("./data/news.json");

// get category
app.get("/category", (req, res) => {
     res.send(category)
} )

// get all news 

app.get("/news", (req, res) => {
     res.send(news)
})
/// get single new by the new _id;

app.get("/news/:id", (req, res) => {
       
       const id = req.params.id;
       const selectedNews = news.find(n => n._id == id)
       res.send(selectedNews)
});

/// get news category id that's mean it will be more
app.get('/category/:id', (req, res) => {
      const id = parseInt(req.params.id);
      if(id === 0){
         res.send(news)
      }else{
        const categoryNews = news.filter(n => parseInt(n.category_id) === id);
      res.send(categoryNews)
      }
      

   console.log(id)





})

app.listen(port, () => {
       console.log("server is working")
})