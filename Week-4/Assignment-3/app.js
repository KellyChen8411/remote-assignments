const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mysql = require('mysql');
const { body, validationResult } = require('express-validator');
const db = require('./database');
const bcrypt = require('bcrypt');

const app = express();
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded( { extended: true }));
app.use(cookieParser());

app.get('/user', (req, res)=>{
    res.render('user');
})

app.get('/member', (req, res)=>{
    const useremail = req.cookies.useremail;
    res.render('member', { useremail });
})

app.post('/signUP', [
        body("email")
        .notEmpty().withMessage('Email field is required.')
        .isEmail().withMessage('Email formate is incorrect.'),
        body("password")
        .notEmpty().withMessage('Password field is required.')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 chars long')
    ], (req, res)=>{
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                console.log(errors.array());
                return res.render('user', { errors: errors.array() });
            }
        
            const {email, password} = req.body;
            var sql = "SELECT * FROM user WHERE email=?";
            db.query(sql, [email], async function (err, result) {
                if (err) throw err;
        
                if(result.length === 0){
                    const salt = await bcrypt.genSalt(10);
                    const hashPassword = await bcrypt.hash(password, salt);
                    var userInfo = [[email, hashPassword]];
                    sql = "INSERT INTO user (email, password) VALUES ?";
                    db.query(sql, [userInfo],function (err, result){
                        if (err) throw err;
                        console.log(`${result.affectedRows} record inserted`);
                        res.cookie('useremail', email);
                        return res.redirect('/member');
                    })
                }else{
                    const userMsg = `User '${email}' has already exist. Please log in.`;
                    res.render('user', { userMsg });
                }
            });    
        }
)

app.post('/signIN', [
        body("email")
        .notEmpty().withMessage('Email field is required.')
        .isEmail().withMessage('Email formate is incorrect.'),
        body("password")
        .notEmpty().withMessage('Password field is required.')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 chars long')
    ],(req, res)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors.array());
            return res.render('user', { errors: errors.array() });
        }

        const {email, password} = req.body;
        var sql = "SELECT * FROM user WHERE email=?";
        db.query(sql, [email], async function (err, result){
            if (err) throw err;

            if(result.length === 0){
                const userMsg = "User not exist.";
                return res.render('user', { userMsg });
            }else{
                const user = result[0];
                const validPassword = await bcrypt.compare(password, user.password);
                if(validPassword){
                    res.cookie('useremail', email);
                    return res.redirect('/member');
                }else{
                    const userMsg = "Wrong password";
                    return res.render('user', { userMsg });
                }
            }
        })

    }
)

app.post("/logOut", (req, res)=>{
    res.clearCookie("useremail");
    res.redirect('/user');
})

app.listen(3000, () => {
    console.log(`Example app listening on port 3000`)
})