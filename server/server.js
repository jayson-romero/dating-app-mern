import express from "express"
import connectDB from "./config/db.js"
import dotenv from "dotenv"
dotenv.config()
import Cors from "cors"
import Cards from "./models/cardsModel.js"

//App Configuration
const app = express()
const port = process.env.PORT || 8001

//DB Configuration
connectDB()

//Middleware
app.use(express.json())
app.use(Cors())

//API Endpoints
app.get("/", (req, res) => res.status(200).send("Hello, world!"))

app.post("/dating/cards", async (req, res) => {
	const { name, imgUrl } = req.body

	const card = await Cards.create({ name, imgUrl })
	if (card) {
		res.status(200).json({
			name: card.name,
			imgUrl: card.imgUrl,
		})
	} else {
		res.status(400)
		throw new Error("Invalid user data")
	}
})

app.get("/dating/cards", async (req, res) => {
	const cards = await Cards.find({})
	if (cards) {
		res.status(200).json(cards)
	} else {
		res.status(400)
		throw new Error("Invalid user data")
	}
})

//Listener
app.listen(port, () => console.log("Listen on port " + port))
