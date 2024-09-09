ServerEvents.tags('item', event => {

	let allow_items = [
		'computercraft:wireless_modem_advanced',
		'computercraft:wireless_modem_normal',
		'computercraft:monitor_advanced',
		'computercraft:turtle_advanced',
		'computercraft:pocket_computer_advanced',
		'computercraft:computer_advanced',
		'thermal:tin_nugget',
		'thermal:tin_dust',
		'create:crushed_raw_tin',
		'thermal:tin_ingot',
		'thermal:raw_tin',
		'thermal:raw_tin_block',
		'thermal:tin_block',
		'thermal:deepslate_tin_ore',
		'thermal:tin_ore',
		'thermal:tin_gear',
		'thermal:upgrade_augment_3',
		'thermal:enderium_gear',
		'thermal:enderium_dust',
		'thermal:enderium_nugget',
		'thermal:enderium_ingot',
		'thermal:ender_pearl_dust',
		'thermal:enderium_glass',
		'thermal:enderium_block',
		'thermal:lumium_plate',
		'thermal:lumium_block',
		'thermal:lumium_ingot',
		'thermal:lumium_nugget',
		'thermal:lumium_dust',
		'thermal:lumium_gear',
		'thermal:lumium_glass',
	]

	event.add("mid_meadow:robotic_resurgence", allow_items)
})