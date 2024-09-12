PlayerEvents.loggedIn(event => {
	let knownStages = [
		"sudden_start",			// 0
		"foundry_foundation",	// 1
		"mechanical_madness",	// 2
		"railroad_rage",		// 3
		"automation_age",		// 4
		"silicon_synapse",		// 5
		"robotic_resurgence",	// 6
		"planet_pioneers",		// 7
		"void_voyager",			// 8
		"galactic_gateway"		// 9
	]

	let CurrentStage = 0

	for (let i = 0; i <= CurrentStage; i++) {
		if (!event.player.stages.has(knownStages[i])) {
			event.player.stages.add(knownStages[i])
		}
	}
})