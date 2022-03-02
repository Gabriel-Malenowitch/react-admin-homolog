function getRndInteger(min: number, max: number) {
	return Math.floor(Math.random() * (max - min) ) + min;
}

export function LineChartDataGenerator(limit: number){
	const data = [];
	for(let i = 0; i < limit; i++){
		data.push({
			name: `Page ${i}`,
			uv: getRndInteger(0, 20),
			pv: getRndInteger(0, 20),
			amt: getRndInteger(1500, 2000),
		});
	}
	return data;
}

