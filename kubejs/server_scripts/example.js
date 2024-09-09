// ServerEvents.recipes(event => {

// 	function removeSmelting(output, includeBlasting) {

// 		event.remove({ type: 'minecraft:smelting', output: output })

// 		if (includeBlasting) {
// 			event.remove({ type: 'minecraft:blasting', output: output })
// 		}
// 	}

// 	function removeCrushing(output) {
// 		event.remove({ type: 'create:crushing', output: output })
// 	}

// 	function removeMeltingTconstruct(array) {
// 		array.forEach(element => {
// 			event.remove({id : element})
// 		})
// 	}

// 	function removeOldProcessing(output_smelting, output_crushing) {
// 		removeSmelting(output_smelting, true)
// 		removeCrushing(output_crushing)
		
// 	}

// 	let removeMeltingList = [
// 		'tconstruct:smeltery/melting/metal/iron/dust',
// 		'tconstruct:smeltery/melting/metal/iron/raw',
// 		'tconstruct:smeltery/melting/metal/gold/dust',
// 		'tconstruct:smeltery/melting/metal/gold/raw',
// 		'tconstruct:smeltery/melting/metal/copper/dust',
// 		'tconstruct:smeltery/melting/metal/copper/raw',
// 		'tconstruct:smeltery/melting/metal/osmium/dust',
// 		'tconstruct:smeltery/melting/metal/osmium/raw',
// 		'tconstruct:smeltery/melting/metal/uranium/dust',
// 		'tconstruct:smeltery/melting/metal/uranium/raw',
// 		'tconstruct:smeltery/melting/metal/lead/dust',
// 		'tconstruct:smeltery/melting/metal/lead/raw',
// 		'tconstruct:smeltery/melting/metal/silver/dust',
// 		'tconstruct:smeltery/melting/metal/silver/raw',
// 		'tconstruct:smeltery/melting/metal/nickel/dust',
// 		'tconstruct:smeltery/melting/metal/nickel/raw',
// 		'tconstruct:smeltery/melting/metal/tin/dust',
// 		'tconstruct:smeltery/melting/metal/tin/raw'
// 	]

// 	let removeOldProcessingList = [
// 		['minecraft:iron_ingot', 'create:crushed_raw_iron'],
// 		['minecraft:gold_ingot', 'create:crushed_raw_gold'],
// 		['minecraft:copper_ingot', 'create:crushed_raw_copper'],
// 		['mekanism:osmium_ingot', 'create:crushed_raw_osmium'],
// 		['mekanism:uranium_ingot', 'create:crushed_raw_uranium'],
// 		['thermal:lead_ingot', 'create:crushed_raw_lead'],
// 		['thermal:silver_ingot', 'create:crushed_raw_silver'],
// 		['thermal:nickel_ingot', 'create:crushed_raw_nickel'],
// 		['thermal:tin_ingot', 'create:crushed_raw_tin']
// 	]
	
// 	removeMeltingTconstruct(removeMeltingList)

// 	removeOldProcessingList.forEach(array => {
// 		removeOldProcessing(array[0], array[1])
// 	})
// })


// // Function to add new recipes for processing ores
// ServerEvents.recipes(event => {

// 	function milling(output, count, output2, count2, chance, xp_count, xp_chance, input) {
// 		let outputItem = [];
// 		if (output) {
// 			outputItem.push(Item.of(output, count));
// 		}
// 		if (output2) {
// 			outputItem.push(Item.of(output2, count2).withChance(chance));
// 		}
// 		outputItem.push(Item.of('create:experience_nugget', xp_count).withChance(xp_chance));
// 		event.recipes.create.milling(outputItem, input);
// 	}

// 	function crushing(output, count, output2, count2, chance, xp_count, xp_chance, input) {
// 		let outputItem = [];
// 		if (output) {
// 			outputItem.push(Item.of(output, count));
// 		}
// 		if (output2) {
// 			outputItem.push(Item.of(output2, count2).withChance(chance));
// 		}
// 		outputItem.push(Item.of('create:experience_nugget', xp_count).withChance(xp_chance));
// 		event.recipes.create.crushing(outputItem, input);
// 	}

// 	function washing(output, count, chance, secondaryOutput, count2, chanceSecondary, input) {
// 		let outputItem = [Item.of(output, count).withChance(chance)];
// 		if (secondaryOutput) {
// 			outputItem.push(Item.of(secondaryOutput, count2).withChance(chanceSecondary));
// 		}
// 		event.recipes.create.splashing(outputItem, input);
// 	}
	
// 	function melting(input, output, amount, temperature, time) {
// 		event.custom({
// 			type: 'tconstruct:melting',
// 			ingredient: {
// 				item: input
// 			},
// 			result: {
// 				fluid: 'tconstruct:molten_' + output,
// 				amount: amount
// 			},
// 			temperature: temperature,
// 			time: time
// 		});
// 	}

// 	function processRawOre(rawOre, crushedOre, dirtyDust, dust, secondaryOutput, type) {
// 		// Raw ore -> crushed ore
// 		milling(crushedOre, 1, crushedOre, 1, 0.25, 1, 0.5, rawOre);
// 		crushing(crushedOre, 2, crushedOre, 1, 0.75, 2, 0.75, rawOre);
// 		melting(rawOre, type, 10, 800, 160);

// 		// Crushed ore -> dirty dust
// 		milling(null, 0, dirtyDust, 1, 0.5, 1, 0.75, crushedOre);
// 		crushing(null, 0, dirtyDust, 1, 0.85, 1, 0.5, crushedOre);
// 		melting(crushedOre, type, 10, 800, 100);

// 		// Dirty dust -> dust
// 		washing(dust, 1, 1, secondaryOutput, 1, 0.15, dirtyDust);
// 		melting(dirtyDust, type, 20, 800, 80);

// 		// Dust -> ingot
// 		melting(dust, type, 30, 800, 60);
// 	}


// 	let ores = [
// 		['minecraft:raw_iron', 'create:crushed_raw_iron', 'mekanism:dirty_dust_iron', 'thermal:dust_iron', 'minecraft:redstone', 'iron'],
// 		['minecraft:raw_gold', 'create:crushed_raw_gold', 'mekanism:dirty_dust_gold', 'thermal:dust_gold', 'minecraft:quartz', 'gold'],
// 		['minecraft:raw_copper', 'create:crushed_raw_copper', 'mekanism:dirty_dust_copper', 'thermal:dust_copper', 'minecraft:clay_ball', 'copper'],
// 		['mekaism:raw_osmium', 'create:crushed_raw_osmium', 'mekanism:dirty_dust_osmium', 'mekanism:dust_osmium', 'mekanism:fluorite_gem', 'osmium'],
// 		['mekanism:raw_uranium', 'create:crushed_raw_uranium', 'mekanism:dirty_dust_uranium', 'mekanism:dust_uranium', 'mekanism:yellowcake', 'uranium'],
// 		['thermal:raw_lead', 'create:crushed_raw_lead', 'mekanism:dirty_dust_lead', 'thermal:lead_dust', 'thermal:sulfur_dust', 'lead'],
// 		['thermal:raw_silver', 'create:crushed_raw_silver', 'mekanism:dirty_dust_silver', 'thermal:silver_dust', 'thermal:lead_dust', 'silver'],
// 		['thermal:raw_nickel', 'create:crushed_raw_nickel', 'mekanism:dirty_dust_nickel', 'thermal:nickel_dust', 'thermal:platinum_dust', 'nickel'],
// 		['thermal:raw_tin', 'create:crushed_raw_tin', 'mekanism:dirty_dust_tin', 'thermal:tin_dust', 'thermal:aluminum_dust', 'tin'],
// 	];

// 	ores.forEach(array => {
// 		processRawOre(array[0], array[1], array[2], array[3], array[4], array[5]);
// 	});
// });
