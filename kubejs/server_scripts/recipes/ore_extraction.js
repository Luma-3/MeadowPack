
function process_raw_ore(event, ore, mod) {
	let sortieCrush = '3x create:crushed_raw_'+ore
	let sortieMill = ['5x thermal:'+ore+'_dust', Item.of('thermal:'+ore+'_dust').withChance(0.95), Item.of('thermal:'+ore+'_dust').withChance(0.25)]
	let entree = mod+':raw_'+ore
	
	event.recipes.create.crushing(sortieCrush, entree)
	event.recipes.create.milling(sortieMill, entree)
}

function process_crushed_ore(event, ore, mod, residue) {
	let sortieCrush = '2x thermal:'+ore+'_dust'
	let sortieMill = ['2x thermal:'+ore+'_dust', Item.of('thermal:'+ore+'_dust').withChance(0.95)]
	let entree = 'create:crushed_raw_'+ore;

	// Particular Cases //
	if (ore == 'zinc')
		{
			sortieCrush = '2x kubejs:zinc_dust'
			sortieMill = ['2x kubejs:zinc_dust', Item.of('kubejs:zinc_dust').withChance(0.95)]
		}
	// //

	// Remove Splashing //
	if (mod == 'create' || mod == 'minecraft')
		{event.remove({id: 'create:splashing/crushed_raw_'+ore})}
	else
		{event.remove({id: 'create:splashing/'+mod+'/crushed_raw_'+ore})}

	// Add Residue for Crushing //
	if (residue)
		{event.recipes.create.crushing([sortieCrush, Item.of(residue).withChance(0.25)], entree)}
	else
		{event.recipes.create.crushing(sortieCrush, entree)}

	event.recipes.create.milling(sortieMill, entree)
}

function melting(event, input, output, amount, temperature, time) {
	event.custom({
		type: 'tconstruct:melting',
		ingredient: {
			item: input
		},
		result: {
			fluid: 'tconstruct:molten_'+output,
			amount: amount
		},
		temperature: temperature,
		time: time
	});
}

function cook_ore(event, ore, mod, temp, time) {
	let entreeRaw = mod+':raw_'+ore
	let entreeCrushed = 'create:crushed_raw_'+ore
	let entreeDust = 'thermal:'+ore+'_dust'
	let ingot = mod+':'+ore+'_ingot'

	event.remove({id:'tconstruct:smeltery/melting/metal/'+ore+'/raw'})
	event.remove({id:'tconstruct:smeltery/melting/metal/'+ore+'/dust'})
	event.remove([{type:'minecraft:smelting', output: ingot}, {type:'minecraft:blasting', output: ingot}])

	if (ore == 'zinc')
		{entreeDust = 'kubejs:zinc_dust'}

	melting(event, entreeRaw, ore, 45, temp, time)
	melting(event, entreeCrushed, ore, 20, temp, time/3)
	melting(event, entreeDust, ore, 10, temp, time/9)
}

function process_diamond_ore(event) {
	// Crushing Raw
	event.recipes.create.crushing('4x kubejs:diamond_shard', 'kubejs:diamond_clump')
	event.recipes.create.milling(['5x thermal:diamond_dust', Item.of('thermal:diamond_dust').withChance(0.75), Item.of('thermal:diamond_dust').withChance(0.30)],  'kubejs:diamond_clump')

	// Milling Shards
	event.recipes.create.crushing(['2x thermal:diamond_dust', Item.of('thermal:emerald_dust').withChance(0.50)], 'kubejs:diamond_shard')
	event.recipes.create.milling(['2x thermal:diamond_dust', Item.of('thermal:diamond_dust').withChance(0.50)], 'kubejs:diamond_shard')

	// Melting
	melting(event, 'kubejs:diamond_clump', 'diamond', 50, 1450, 80)
	melting(event, 'kubejs:diamond_shard', 'diamond', 15, 1450, 80/4)
	melting(event, 'thermal:diamond_dust', 'diamond', 10, 1450, 80/10)
	melting(event, 'kubejs:diamond_crystal', 'diamond', 100, 1450, 80)
	melting(event, 'thermal:emerald_dust', 'emerald', 10, 934, 80/10) //For Emerald Dust

	// Casting
	event.custom({
		type: 'tconstruct:casting_table',
		cast: { tag: 'tconstruct:casts/multi_use/gem'},
		cooling_time: 80,
		fluid: {
			amount: 100,
			fluid: 'tconstruct:molten_diamond'
		},
		result: 'kubejs:diamond_crystal'
	})
	event.custom({
		type: 'tconstruct:casting_table',
		cast: { tag: 'tconstruct:casts/single_use/gem'},
		cast_consumed: true,
		cooling_time: 80,
		fluid: {
			amount: 100,
			fluid: 'tconstruct:molten_diamond'
		},
		result: 'kubejs:diamond_crystal'
	})
	event.remove({id: 'tconstruct:smeltery/casting/diamond/gem_gold_cast'})
	event.remove({id: 'tconstruct:smeltery/casting/diamond/gem_sand_cast'})

	// Press
	event.recipes.create.pressing('minecraft:diamond', 'kubejs:diamond_crystal')

	//Crushing Gem
	crushing_ingots(event, 'diamond', 'minecraft')
	crushing_ingots(event, 'emerald', 'minecraft')
}

function specific_cases(event){
	
	//#region Invar
	event.remove({id: 'tconstruct:smeltery/melting/metal/invar/dust'})
	melting(event, 'thermal:invar_dust', 'invar', 10, 900, 60/9)
	crushing_ingots(event, 'invar', 'thermal')
	//#endregion

	//#region Constantan
	event.remove({id: 'tconstruct:smeltery/melting/metal/constantan/dust'})
	melting(event, 'thermal:constantan_dust', 'constantan', 10, 920, 64/9)
	crushing_ingots(event, 'constantan', 'thermal')
	//#endregion

	//#region Enderium
	event.remove({output: 'thermal:enderium_dust'})
	event.recipes.create.crushing('thermal:ender_pearl_dust', 'minecraft:ender_pearl')
	event.recipes.create.milling(['thermal:ender_pearl_dust', Item.of('thermal:ender_pearl_dust').withChance(0.25)], 'minecraft:ender_pearl')

	event.shaped('6x thermal:enderium_dust', 
		[
			'LLL',
			'DEE'
		],{
			L: 'thermal:lead_dust',
			D: 'thermal:diamond_dust',
			E: 'thermal:ender_pearl_dust'
		})
	event.remove({id: 'tconstruct:smeltery/melting/metal/enderium/dust'})
	melting(event, 'thermal:enderium_dust', 'enderium', 10, 1350, 76/9)
	crushing_ingots(event, 'enderium', 'thermal')
	//#endregion

	//#region Bronze
	event.remove({id: 'tconstruct:smeltery/melting/metal/bronze/dust'})
	melting(event, 'thermal:bronze_dust', 'bronze', 10, 700, 56/9)
	crushing_ingots(event, 'bronze', 'thermal')
	//#endregion

	//#region Signalum
	event.remove({id: 'tconstruct:smeltery/melting/metal/signalum/dust'})
	melting(event, 'thermal:signalum_dust', 'signalum', 10, 1125, 68/9)
	crushing_ingots(event, 'signalum', 'thermal')
	//#endregion

	//#region Electrum
	event.remove({id: 'tconstruct:smeltery/melting/metal/electrum/dust'})
	melting(event, 'thermal:electrum_dust', 'electrum', 10, 760, 56/9)
	crushing_ingots(event, 'electrum', 'thermal')
	//#endregion

	//#region Lumium
	event.remove({id: 'tconstruct:smeltery/melting/metal/lumium/dust'})
	melting(event, 'thermal:lumium_dust', 'lumium', 10, 1050, 68/9)
	crushing_ingots(event, 'lumium', 'thermal')
	//#endregion

	//#region GunPowder & Niter
	event.remove({id: 'thermal:storage/gunpowder_block'})
	event.remove({input: 'thermal:gunpowder_block'})
	event.recipes.create.crushing('thermal:niter_dust', 'thermal:niter')
	event.recipes.create.milling(['thermal:niter_dust', Item.of('thermal:niter_dust').withChance(0.25)], 'thermal:niter')
	//#endregion

	//#region Ad_Astra Ingots
	//#region Desh
	event.remove({id: 'create:blasting/desh_ingot_from_crushed'})
	event.remove({id: 'ad_astra:recipes/desh_ingot_from_blasting_raw_desh'})
	event.remove({id: 'create:smelting/desh_ingot_from_crushed'})
	event.remove({id: 'ad_astra:recipes/desh_ingot_from_smelting_raw_desh'})


	//#endregion

	//#region Ostrum
	event.remove({id: 'create:blasting/ostrum_ingot_from_crushed'})
	event.remove({id: 'ad_astra:recipes/ostrum_ingot_from_blasting_raw_ostrum'})
	event.remove({id: 'create:smelting/ostrum_ingot_from_crushed'})
	event.remove({id: 'ad_astra:recipes/ostrum_ingot_from_smelting_raw_ostrum'})


	//#endregion

	//#region Calorite
	event.remove({id: 'create:blasting/calorite_ingot_from_crushed'})
	event.remove({id: 'ad_astra:recipes/calorite_ingot_from_blasting_raw_calorite'})
	event.remove({id: 'create:smelting/calorite_ingot_from_crushed'})
	event.remove({id: 'ad_astra:recipes/calorite_ingot_from_smelting_raw_calorite'})

	
	//#endregion
	//#endregion
}

function crushing_ingots(event, ore, mod){
	let amount = 9
	let ingot = mod+':'+ore
	if (ore != 'emerald' && ore != 'diamond')
		{
			ingot = ingot+'_ingot'
			amount = amount-1
		}

	let dust = 'thermal:'+ore+'_dust'
	if (ore == 'zinc')
		{dust = 'kubejs:zinc_dust'}

	event.recipes.create.crushing(amount+'x '+dust, ingot)
	event.recipes.create.milling([amount+'x '+dust, Item.of(dust).withChance(0.50)], ingot)
}

ServerEvents.recipes(event => {
	
	event.remove({input: '#forge:ores'})
	event.remove({output:'#create:crushed_raw_materials'})
	let ores = [ // [0 = Ore] [1 = mod] [2 = Residue] [3 = MeltingTemp] [4 = MeltingTime]
		['iron', 'minecraft', 'minecraft:redstone', 800, 88],
		['copper', 'minecraft', 'minecraft:clay_ball', 500, 72],
		['gold', 'minecraft', 'minecraft:quartz', 700, 84],
		['tin', 'thermal', '', 225, 56],
		['lead', 'thermal', '', 330, 64],
		['silver', 'thermal', '', 790, 88],
		['nickel', 'thermal', '', 950, 96],
		['zinc', 'create', 'minecraft:gunpowder', 420, 68]
	]

	ores.forEach(element => {
		process_raw_ore(event, element[0], element[1])
		process_crushed_ore(event, element[0], element[1], element[2])
		cook_ore(event, element[0], element[1], element[3], element[4])
		crushing_ingots(event, element[0], element[1])
	});

	process_diamond_ore(event)
	specific_cases(event)
})