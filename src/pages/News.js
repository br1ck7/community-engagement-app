import React from "react";
import NewsCarousel from "../components/NewsCarousel";
import Article from "../components/Article";

function News() {
	const articles = [
		{
			id: 1,
			title: "The Future of Artificial Intelligence",
			author: "John Smith",
			publication_date: "2023-01-15",
			content:
				"In the rapidly evolving landscape of technology, Artificial Intelligence (AI) stands out as a transformative force. As we delve into the 21st century, breakthroughs in machine learning and deep learning are reshaping industries and redefining human capabilities. This article explores the potential impact of AI on various sectors, ranging from healthcare and finance to education and entertainment. It discusses the ethical considerations associated with the widespread adoption of AI, touching upon issues such as privacy, bias, and job displacement. As AI continues to advance, understanding its implications and harnessing its potential responsibly becomes crucial for shaping a future where technology serves humanity.",
		},
		{
			id: 2,
			title: "Exploring the Wonders of Space Travel",
			author: "Jane Doe",
			publication_date: "2023-02-28",
			content:
				"The cosmos has always been a subject of fascination and exploration for humanity. From the early days of stargazing to the remarkable achievements of space agencies, the journey of space travel has been awe-inspiring. This article delves into the history and future possibilities of space exploration. It highlights key milestones, including the first moon landing and the ongoing efforts to explore Mars. The article also addresses the challenges and risks associated with space travel, from the vast distances to the impact on the human body. As technology advances, the dream of human colonization of other planets becomes a tangible prospect, opening new frontiers for discovery.",
		},
		{
			id: 3,
			title: "Healthy Eating Habits for a Balanced Life",
			author: "Emily Johnson",
			publication_date: "2023-03-10",
			content:
				"Maintaining a balanced and nutritious diet is the cornerstone of a healthy lifestyle. This article explores the importance of different food groups and provides practical tips for adopting and sustaining healthy eating habits. From the benefits of incorporating fruits and vegetables into daily meals to the role of proteins and carbohydrates in supporting overall well-being, readers will gain insights into making informed dietary choices. The article also emphasizes the long-term impact of good nutrition on physical and mental health, underscoring the connection between a well-balanced diet and a fulfilling, active life.",
		},
		{
			id: 4,
			title: "Climate Change: A Global Challenge",
			author: "Michael Anderson",
			publication_date: "2023-04-22",
			content:
				"Climate change is one of the most pressing challenges facing our planet. This article delves into the causes and consequences of global climate change. It explores the scientific evidence behind rising temperatures, extreme weather events, and the melting of polar ice caps. Beyond the environmental impact, the article discusses how climate change poses threats to ecosystems, agriculture, and vulnerable communities worldwide. Urgent global cooperation is required to mitigate the effects of climate change, and the article concludes by highlighting the importance of sustainable practices, renewable energy, and international collaboration in addressing this critical issue.",
		},
		{
			id: 5,
			title: "The Rise of Electric Vehicles",
			author: "David Wilson",
			publication_date: "2023-05-18",
			content:
				"Electric vehicles (EVs) are at the forefront of a transportation revolution. This article explores the factors driving the rise of electric vehicles and their potential to reshape the automotive industry. From advancements in battery technology, enabling longer ranges and faster charging times, to the growth of charging infrastructure, the transition to electric mobility is gaining momentum. The article discusses the environmental benefits of EVs, such as reduced emissions and dependence on fossil fuels. As governments and industries worldwide embrace sustainability, the rise of electric vehicles represents a significant step towards a cleaner and more energy-efficient future.",
		},
	];
	return (
		<>
			<div>
				<NewsCarousel />
				{articles.map((article) => (
					<Article
						key={article.id}
						title={article.title}
						author={article.author}
						publication_date={article.publication_date}
						content={article.content}
					/>
				))}
			</div>
		</>
	);
}

export default News;
