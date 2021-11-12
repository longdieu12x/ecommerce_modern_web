const User = require("../models/User");
const router = require("express").Router();
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
	const newUser = new User({
		username: req.body.username,
		email: req.body.email,
		password: CryptoJS.AES.encrypt(
			req.body.password,
			process.env.PASS_SEC
		).toString(),
	});

	try {
		const savedUser = await newUser.save();
		res.status(201).json(savedUser);
	} catch (err) {
		res.status(500).json(err);
	}
});

//LOGIN

router.post("/login", async (req, res) => {
	try {
		const user = await User.findOne({
			username: req.body.username,
		});

		!user && res.status(401).json("Wrong User Name");

		const hashedPassword = CryptoJS.AES.decrypt(
			user.password,
			process.env.PASS_SEC
		);

		const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

		const accessToken = jwt.sign(
			{
				id: user.id,
				isAdmin: user.isAdmin,
			},
			process.env.JWT_SEC,
			{ expiresIn: "3d" }
		);

		const inputPassword = req.body.password;

		originalPassword != inputPassword && res.status(401).json("Wrong Password");
		const { password, ...others } = user._doc;
		console.log(user);
		res.status(200).json({ ...others, accessToken });
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;

// router.post("/register", async (req, res) => {
// 	const salt = await bcrypt.genSalt(10);
// 	const hashedPassword = await bcrypt.hash(req.body.password, salt);
// 	const newUser = new User({
// 		username: req.body.username,
// 		email: req.body.email,
// 		password: hashedPassword,
// 	});
// 	try {
// 		const savedUser = await newUser.save();
// 		res.status(201).json({ status: 1, message: "Register success!" });
// 	} catch (err) {
// 		res.status(500).json(err);
// 	}
// });

// router.post("/login", async (req, res) => {
// 	try {
// 		const user = await User.findOne({
// 			username: req.body.username,
// 		});
// 		!user && res.status(401).json("Wrong User Name");
// 		const validPassword = await bcrypt.compare(
// 			req.body.password,
// 			user.password
// 		);
// 		!validPassword && res.status(400).json("Wrong Password!");
// 		const { password, ...others } = user._doc;
// 		res.status(200).json({ ...others });
// 	} catch (err) {
// 		res.status(500).json(err);
// 	}
// });
