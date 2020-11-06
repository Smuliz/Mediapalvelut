const express = require('express')
const router = express.Router()
const pool = require('./db')

router.get('/api/hello', (req, res) => {
	res.json('hello world')
});

// GET all posts
router.get('/api/get/allposts', (req,res,next) => {
	pool.query(`SELECT * FROM POSTS ORDER BY date_created DESC`,
	(query_error, query_response) => {
		res.json(query_response.rows)
	})
});

//GET one post by post_id
router.get('/api/get/onepost', (req, res, next) => {
	const post_id = req.query.post_id;

	pool.query(`SELECT * FROM posts WHERE post_id=$1`,
	[ post_id ], (query_error, query_response) => {
		res.json(query.response.rows)
	})
});

//POST a new post 
router.post('/api/post/posttodb', (req ,res, next) => {
	const arvot = [
		req.body.title,
		req.body.post_body,
		req.body.user_id,
		req.body.username
	]

	pool.query(`INSERT INTO posts(title, post_body, user_id, author, date_created)
	VALUES($1, $2, $3, $4, NOW())`,
	arvot, (query_error, query_response) => {
		if (query_error){
			return next(query_error);
		} 
		res.json(query_response.rows)
	})
});

//UPDATE one post by post_id
router.put('/api/put/updatepost', (req,res,next) => {
	const arvot = [
		req.body.title,
		req.body.post_body,
		req.body.user_id,
		req.body.post_id,
		req.body.username
	]

	pool.query(`UPDATE posts SET title = $1, post_body=$2, user_id=$3, author=$5, date_created= NOW() WHERE post_id=$4`,
	arvot,
	(query_error, query_response) => {
		console.log(query_response);
		console.log(query_error);
	})
});

//DELETE one post by post_id
router.delete('/api/delete/post', (req,res,next) => {
	const post_id = req.body.post_id;
	pool.query(`DELETE FROM posts WHERE post_id = $1`, [post_id],
	(query_error, query_response) => {
		res.json(query_response.rows)
		console.log("Query error while deleting: " + query_error);
	})
});



module.exports = router