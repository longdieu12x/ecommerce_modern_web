const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const helmet = require("helmet");
const morgan = require("morgan");
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

app.listen(PORT, () => {
	console.log("Backend server is running on", PORT);
});
