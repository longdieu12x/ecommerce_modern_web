const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const cartRoute = require("./routes/cart");
const productRoute = require("./routes/product");
const stripeRoute = require("./routes/stripe");
const orderRoute = require("./routes/order");
const cors = require("cors");
dotenv.config();
const app = express();

const corsOptions = {
	origin: "*",
	credentials: true, //access-control-allow-credentials:true
	optionSuccessStatus: 200,
};
mongoose
	.connect(process.env.MONGO_URL)
	.then(() => {
		console.log("Connecting to MongoDB");
	})
	.catch((err) => {
		console.log(err);
	});
const PORT = process.env.PORT || 8080;
app.use(express.json());
// app.use(helmet());
// app.use(morgan("common"));
app.use(cors(corsOptions));

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

app.listen(PORT, () => {
	console.log("Backend server is running on", PORT);
});
