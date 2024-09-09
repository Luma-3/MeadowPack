ServerEvents.tags('item', event => {

	let allow_items = [
		'ad_astra:jet_suit',
		'ad_astra:jet_suit_pants',
		'ad_astra:jet_suit_boots',
		'ad_astra:energizer',
		'ad_astra:cryo_freezer',
		'ad_astra:oxygen_sensor',
		'ad_astra:calorite_plate',
		'ad_astra:calorite_engine',
		'ad_astra:calorite_tank',
		'ad_astra:tier_4_rocket',
		'ad_astra:cryo_fuel_bucket',
		'ad_astra:jet_suit_helmet',
		'kubejs:incomplete_calorite_tank',
		'kubejs:incomplete_calorite_engine'
	]

	event.add("mid_meadow:galactic_gateway", allow_items)
})