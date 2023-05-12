const router = require("express").Router();
const { Post, User, Comment } = require("../../models");
const Auth = require("../../utils/auth");
const sequelize = require('../../config/connection');

//create a post
router.post("/", async (req, res) => {
    console.log("create comment")
    try {
      const newComment = await Comment.create({
        ...req.body,
        user_id: req.session.user_id,
      });
      console.log(newComment)
      res.status(200).json(newComment);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  //delete a post
  router.delete("/:id",Auth, async (req, res) => {
    try {
      const postComment = await Comment.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (commentData) {
        res.status(200).json(commentData);
      } else {
        res.status(404).json({ message: "No comment found with this id!" });
        return;
      }
  
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;