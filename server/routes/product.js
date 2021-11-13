const router = require("express").Router();
const Product = require("../models/Product");
const {
	verifyToken,
	verifyTokenAndAuthorization,
	verifyTokenAndAdmin,
} = require("./verifyToken");

// CREATE PRODUCT
router.post("/", verifyTokenAndAdmin, async (req, res) => {
	const newProduct = new Product(req.body);
	try {
		const savedProduct = await newProduct.save();
		res.status(200).json({
			message: "Create product successfully!",
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

// UPDATE PRODUCT
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
	try {
		const updatedProduct = await Product.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true }
		);
		res.status(200).json({
			message: "Update product successfully",
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

// DELETE PRODUCT
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
	try {
		await Product.findByIdAndDelete(req.params.id);
		res.status(201).json("Product has been deleted!");
	} catch (err) {
		res.status(500).json(err);
	}
});

// GET PRODUCT DETAIL
router.get("/find/:id", async (req, res) => {
	try {
		const product = await Product.findById(req.params.id);
		res.status(201).json({ ...product._doc });
	} catch (err) {
		res.status(500).json(err);
	}
});

//GET ALL PRODUCTS
router.get("/", async (req, res) => {
	const qNew = req.query.new;
	const qCategory = req.query.category;
	try {
		let products;

		if (qNew) {
			products = await Product.find().sort({ _id: -1 }).limit(5);
		} else if (qCategory) {
			products = await Product.find({
				categories: {
					$in: [qCategory],
				},
			})
				.sort({ _id: -1 })
				.limit(5);
		} else {
			products = await Product.find();
		}
		res.status(201).json(products);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
