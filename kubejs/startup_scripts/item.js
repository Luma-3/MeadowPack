StartupEvents.registry('item', event => {

	function createItem(name, id) {
		event.create(id).texture('kubejs:item/' + id).displayName(name)
	}

	createItem('Diamond Shard', 'diamond_shard')
	createItem('Diamond Crystal', 'diamond_crystal')
	createItem('Diamond Clump', 'diamond_clump')

	createItem('Desh Dust', 'desh_dust')
	createItem('Calorite Dust', 'calorite_dust')
	createItem('Ostrum Dust', 'ostrum_dust')
	createItem('Zinc Dust', 'zinc_dust')

	createItem('Incomplete Calorite Engine', 'incomplete_calorite_engine')
	createItem('Incomplete Desh Engine', 'incomplete_desh_engine')
	createItem('Incomplete Ostrum Engine', 'incomplete_ostrum_engine')
	createItem('Incomplete Steel Engine', 'incomplete_steel_engine')
	createItem('Incomplete Calorite Tank', 'incomplete_calorite_tank')
	createItem('Incomplete Desh Tank', 'incomplete_desh_tank')
	createItem('Incomplete Ostrum Tank', 'incomplete_ostrum_tank')
	createItem('Incomplete Steel Tank', 'incomplete_steel_tank')
})