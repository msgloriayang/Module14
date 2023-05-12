const router = require("express").Router();
const { Post, User, Comment } = require("../../models");
const Auth = require("../../utils/auth");
const sequelize = require('../../config/connection');

router.get('/',(req,res)=>
{
    Comment.findAll(
    {

        }
    )
    .then(data=>res.json(data))
    .catch(err => 
    {
        console.log(err);
        res.status(500).json(err);
    });
});


router.get('/:id',(req,res)=>
{
    Comment.findOne(
    {
        where: 
        {
            id : req.params.id
        }
    })
    .then(data=>res.json(data))
    .catch(err => 
    {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/',(req,res)=>
{
    Comment.create(
        {
            comment_text: req.body.comment_text,
            user_id:req.session.user_id,
            post_id: req.body.post_id
        })
    .then(data=>res.json(data))
    .catch(err => 
    {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put('/:id',(req,res)=>
{
    Comment.update(req.body,
        {
            where:
            {
                id: req.params.id
            }
        })
    .then(data=>res.json(data))
    .catch(err => 
    {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id',(req,res)=>
{
    Comment.destroy({
            where:
            {
                id: req.params.id
            }
        })
    .then(data=>res.json(data))
    .catch(err => 
    {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;