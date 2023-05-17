const router = require("express").Router();
const { Comment } = require("../../models");
const Auth = require("../../utils/auth");
const sequelize = require('../../config/connection');

const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
  });
ac
//Create a comment
router.post("/", Auth, async (req, res) => {
    try {
      const newComment = await Comment.create({
        ...req.body,
        user_id: req.session.user_id,
      });
      console.log(newComment);
      res.status(200).json(newComment);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
    
  //Delete a comment
  router.delete("/:id", Auth, async (req, res) => {
    try {
        const commentData = await Comment.destroy({
          where: {
            id: req.params.id,
            user_id: req.session.user_id,
          },
        });
    
        if (commentData) {
          res.status(200).json(commentData);
        } else {
          res.status(404).json({ message: "No comment found!" });
        }
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    });
  
  module.exports = router;
  module.exports = sequelize;