import "./DatingCards.css"
import { useState, useEffect } from "react"
import DatingCard from "react-tinder-card"
import axios from "axios"
import LoadingComponent from "../Loading/LoadingComponent"
import ErrorComponent from "../Error/ErrorComponent"

const DatingCards = () => {
	const [people, setPeople] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true)
			try {
				const res = await axios.get(
					"https://dating-app-server.onrender.com/dating/cards"
				)
				setPeople(res.data)
				setLoading(false)
			} catch (error) {
				setLoading(false)
				setError(error.message)
			}
		}
		fetchData()
	}, [])

	const swiped = (direction, nameToDelete) => {
		console.log("receiving " + nameToDelete)
	}
	const outOfFrame = (name) => {
		console.log(name + " left the screen!!")
	}

	if (loading) {
		return <LoadingComponent />
	}
	if (error) {
		return <ErrorComponent message={error} />
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
