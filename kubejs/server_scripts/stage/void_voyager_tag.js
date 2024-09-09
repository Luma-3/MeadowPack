ServerEvents.tags('item', event => {

	let allow_items = [
		'ad_astra:desh_nugget',
		'ad_astra:ostrum_nugget',
		'ad_astra:wheel',
		'ad_astra:ostrum_engine',
		'ad_astra:desh_engine',
		'ad_astra:desh_cable',
		'ad_astra:ostrum_fluid_pipe',
		'ad_astra:ostrum_plate',
		'ad_astra:desh_tank',
		'ad_astra:ostrum_tank',
		'ad_astra:tier_3_rocket',
		'ad_astra:tier_2_rocket',
		'ad_astra:ostrum_ingot',
		'ad_astra:calorite_nugget',
		'ad_astra:raw_calorite',
		'ad_astra:raw_ostrum',
		'ad_astra:calorite_ingot',
		'createastracompat:crushed_calorite_ore',
		'createastracompat:crushed_ostrum_ore',
		'ad_astra:tier_1_rover',
		'kubejs:incomplete_ostrum_tank',
		'kubejs:incomplete_ostrum_engine',
		'kubejs:incomplete_desh_tank',
		'kubejs:incomplete_desh_engine',
		'kubejs:ostrum_dust', 
		'kubejs:calorite_dust'
	]

	event.add("mid_meadow:void_voyager", allow_items)
})