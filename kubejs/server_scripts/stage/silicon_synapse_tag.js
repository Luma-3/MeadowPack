ServerEvents.tags('item', event => {

	let allow_items = [
		'computercraft:pocket_computer_normal',
		'computercraft:computer_normal',
		'computercraft:printed_page',
		'computercraft:printed_pages',
		'computercraft:printed_book',
		'computercraft:wired_modem',
		'computercraft:cable',
		'computercraft:wired_modem_full',
		'computercraft:disk_drive',
		'computercraft:speaker',
		'computercraft:printer',
		'computercraft:monitor_normal',
		'computercraft:turtle_normal',
		'computercraft:disk',
		'thermal:lead_block',
		'thermal:lead_gear',
		'thermal:lead_dust',
		'thermal:lead_nugget',
		'thermal:lead_ingot',
		'thermal:raw_lead',
		'thermal:lead_ore',
		'thermal:deepslate_lead_ore',
		'create:crushed_raw_lead',
		'thermal:raw_lead_block',
		'thermal:flux_capacitor',
		'thermal:upgrade_augment_2',
		'thermal:upgrade_augment_1',
		'thermal:rf_coil',
		'thermal:redstone_servo'
	]

	event.add("mid_meadow:silicon_synapse", allow_items)
})