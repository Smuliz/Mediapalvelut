const express = require('express')
const router = express.Router()
const pool = require('./db')
const multer = require('multer');
const upload = multer({dest:'uploads/'})
var fs = require('fs');


// POST picture
router.post('/api/post/picture', upload.single('uploaded_file'), function(req,res,next) {
	fs.readFile(req.file, (err, imgData) => {
		pool.query('INSERT INTO pictures(picture_image) VALUES($1)', imgData)
		.then(() => {
			console.log("jee")
		})
		.catch(error => {
			console.log("ERROR: " + error.message);
		})
	})
	//const file = req.file;
	//const body = req.body;
	//var imgData = Buffer.from(file.buffer);
	//imgData === Buffer.from(imgData.toString('base64'), 'base64').toString() // true
	//const buffer = new Buffer.from(file.buffer);
	//buffer === Buffer.from(file.toString('base64'), 'base64').toString() // true;

	console.log("pic upload: " + file.buffer.toString() + " / " + body + " / " + buffer);
})

// GET all posts
router.get('/api/get/allposts', (req,res,next) => {
	try {
	pool.query(`SELECT * FROM POSTS ORDER BY date_created DESC`,
	(query_error, query_response) => {
		res.json(query_response.rows)
	})
} catch (e) {
	console.log("Error: " +  e.message);
}
});



//GET one post by post_id
router.get('/api/get/onepost', (req, res, next) => {
	try {
	const post_id = req.query.post_id;
	console.log("POST_ID IN ROUTER GET ONE POST" + post_id);

	pool.query(`SELECT * FROM posts WHERE post_id=$1`,
	[ post_id ], (query_error, query_response) => {
		console.log("Query_resp " + query_response);
		if (query_response != undefined) {
			res.json(query_response.rows);
		}
		
	})
} catch (e) {
	console.log("Error: " + e.message);
}
});

//POST a new post 
router.post('/api/post/posttodb', (req ,res, next) => {
	try {
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
} catch(e) {
	console.log("Error: " + e.message);
}
});

//UPDATE one post by post_id
router.put('/api/put/updatepost', (req,res,next) => {
	try {
	const arvot = [
		req.body.title,
		req.body.post_body,
		req.body.user_id,
		req.body.post_id,
		req.body.username
	]
	console.log("arvot updatepost: " + arvot);

	pool.query(`UPDATE posts SET title=$1, post_body=$2, user_id=$3, author=$5, date_created=NOW() WHERE post_id=$4`,
	arvot)
	res.status(200).send({error: "not really"});
	
	

} catch (e) {
	console.log("Error: " + e.message);
}
});
/*
(query_error, query_response) => {
		console.log(query_response);
		console.log(query_error);
	})
*/

//DELETE one post by post_id
router.delete('/api/delete/post', (req,res,next) => {
	try {
	const post_id = req.body.post_id;
	pool.query(`DELETE FROM posts WHERE post_id = $1`, [post_id],
	(query_error, query_response) => {
		res.json(query_response.rows)
		console.log("Query error while deleting: " + query_error);
	})
} catch (e) {
	console.log("Error: " + e.message);
}
});

//LOGIN
router.post('/api/post/login', (req,res,next) => {
	try {
		const username = req.body.username;
		const password = req.body.password;
		console.log("username: " + username + "Pass: " + password);
		pool.query(`SELECT * FROM login WHERE username = $1 AND password = $2`, [username, password],
		(query_error, query_response) => {
			console.log("query_response " + JSON.stringify(query_response.rows));
			res.json(query_response.rows)
			console.log("Query error while trying to login: " + query_error);
		})
	} catch(e) {
		console.log("Error while login: " + e.message);
	}
});



module.exports = router