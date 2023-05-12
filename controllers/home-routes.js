const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const isAuth = require("../utils/auth");

