import "./DatingCards.css"
import { useState, useEffect } from "react"
import DatingCard from "react-tinder-card"
import axios from "axios"

const DatingCards = () => {
	const [people, setPeople] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const res = await axios.get(
				"https://dating-mern-backend-449658771c25.herokuapp.com/dating/cards"
			)
			setPeople(res.data)
		}
		fetchData()
	}, [])

	const swiped = (direction, nameToDelete) => {
		console.log("receiving " + nameToDelete)
	}
	const outOfFrame = (name) => {
		console.log(name + " left the screen!!")
	}

	return (
		<div className="datingCards">
			<div className="datingCards__container">
				{people.map((person) => (
					<DatingCard
						className="swipe"
						key={person.name}
						preventSwipe={["up", "down"]}
						onSwipe={(dir) => swiped(dir, person.name)}
						onCardLeftScreen={() => outOfFrame(person.name)}
					>
						<div
							style={{ backgroundImage: `url(${person.imgUrl})` }}
							className="card"
						>
							<h3>{person.name}</h3>
						</div>
					</DatingCard>
				))}
			</div>
		</div>
	)
}

export default DatingCards
