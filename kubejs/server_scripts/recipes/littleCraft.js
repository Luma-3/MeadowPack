
ServerEvents.recipes(event => {
	
	///////////////////////////
	// // RUBBERS RECIPES // //

	// Tree_Oil Recipe
	event.recipes.create.mixing(Fluid.of('thermal:tree_oil', 125), [
		Fluid.of('water', 125),
		'farmersdelight:straw'
	])
	event.recipes.create.mixing(Fluid.of('thermal:tree_oil', 125), [
		Fluid.of('water', 125),
		'farmersdelight:tree_bark'
	])

	// Latex Recipe
	event.recipes.create.mixing(Fluid.of('thermal:latex', 500), [
		Fluid.of('water', 250),
		Fluid.of('thermal:tree_oil', 250),
		'thermal:sulfur_dust'
	]).heated()
	
	// Sulfure Dust Recipes
	event.remove({output: 'thermal:sulfur_dust'})
	event.recipes.create.crushing([
		Item.of('thermal:sulfur_dust'),
		Item.of('thermal:sulfur_dust').withChance(0.25),
		Item.of('thermal:niter_dust').withChance(0.10)
	], 'thermal:sulfur')
	event.recipes.create.milling([
		Item.of('thermal:sulfur_dust'),
		Item.of('thermal:sulfur_dust').withChance(0.75)
	], 'thermal:sulfur')

	// Rubber Recipes
	event.remove({output: 'thermal:rubber'})
	event.shapeless('4x thermal:rubber', 'thermal:rubber_block')
	event.custom({
		type: 'tconstruct:casting_table',
		cooling_time: 60,
		fluid: {
			amount: 250,
			fluid: 'thermal:tree_oil'
		},
		result: 'thermal:rubber'
	})
	event.custom({
		type: 'tconstruct:casting_table',
		cooling_time: 100,
		fluid: {
			amount: 125,
			fluid: 'thermal:latex'
		},
		result: 'thermal:rubber'
	})
	

	//////////////////////////////////////////
	// // KELP -> RUBBER CHANGES RECIPES // //
	
	// Brass Tunnel
	event.remove({id: 'create:crafting/logistics/brass_tunnel'})
	event.shaped('create:brass_tunnel', [
		'E ',
		'BB',
		'RR'
	], {
		E: 'create:electron_tube',
		B: 'create:brass_ingot',
		R: 'thermal:cured_rubber'
	})

	// Brass Funnel
	event.remove({id: 'create:crafting/logistics/brass_funnel'})
	event.shaped('create:brass_funnel', [
		'E',
		'B',
		'R'
	], {
		E: 'create:electron_tube',
		B: 'create:brass_ingot',
		R: 'thermal:cured_rubber'
	})

	// Andesite Tunnel
	event.remove({id: 'create:crafting/logistics/andesite_tunnel'})
	event.shaped('create:andesite_tunnel', [
		'AA',
		'RR'
	], {
		A: 'create:andesite_alloy',
		R: 'thermal:cured_rubber'
	})

	// Andesite Funnel
	event.remove({id: 'create:crafting/logistics/andesite_funnel'})
	event.shaped('create:andesite_funnel', [
		'A',
		'R'
	], {
		A: 'create:andesite_alloy',
		R: 'thermal:cured_rubber'
	})

	// Spout
	event.remove({id: 'create:crafting/kinetics/spout'})
	event.shaped('create:spout', [
		'C',
		'R'
	], {
		C: 'create:copper_casing',
		R: 'thermal:cured_rubber'
	})

	// Printer
	event.remove({id: 'create_enchantment_industry:crafting/printer'})
	event.shaped('create_enchantment_industry:printer', [
		'C',
		'R',
		'I'
	], {
		C: 'create:copper_casing',
		R: 'thermal:cured_rubber',
		I: '#forge:plates/iron'
	})


	//////////////////////////////
	// // THERMAL EXPLOSIVES // //
	event.shaped('thermal:ice_grenade', [
		'GIG',
		'IFI',
		'GIG'
	], {
		G: 'minecraft:gunpowder',
		I: '#chipped:ice',
		F: 'minecraft:iron_ingot'
	})
	event.shaped('thermal:ice_tnt', [
		'GIG',
		'IGI',
		'GIG'
	], {
		G: 'minecraft:gunpowder',
		I: '#chipped:ice'
	})

	event.shaped('thermal:lightning_grenade', [
		'GIG',
		'IFI',
		'GIG'
	], {
		G: 'minecraft:gunpowder',
		I: '#forge:nuggets/electrum',
		F: 'minecraft:iron_ingot'
	})
	event.shaped('thermal:lightning_tnt', [
		'GIG',
		'IGI',
		'GIG'
	], {
		G: 'minecraft:gunpowder',
		I: '#forge:nuggets/electrum'
	})

	event.shaped('thermal:earth_grenade', [
		'GIG',
		'IFI',
		'GIG'
	], {
		G: 'minecraft:gunpowder',
		I: '#forge:deepslate',
		F: 'minecraft:iron_ingot'
	})
	event.shaped('thermal:earth_tnt', [
		'GIG',
		'IGI',
		'GIG'
	], {
		G: 'minecraft:gunpowder',
		I: '#forge:deepslate'
	})

	////////////////////////////
	// // Necessary Crafts // //
	event.shaped('3x minecraft:leather', [
		'LLL',
		'LLL',
		'LLL'
	], {
		L: 'butchercraft:leather_scrap'
	})
})