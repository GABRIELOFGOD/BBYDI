const express = require('express');
const { postBlogContoller } = require('../controller/blog.controller');

const router = express.Router();

router.route('/post').post(postBlogContoller)

module.exports = router;
