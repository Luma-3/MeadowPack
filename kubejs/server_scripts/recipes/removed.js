
ServerEvents.recipes(event => {
    let removed_items = [
        "thermal:rf_coil_augment",
        "thermal:rf_coil_xfer_augment",
        "thermal:rf_coil_storage_augment",
        "thermal:fluid_tank_augment",
        "thermal:item_filter_augment",
        "thermal:fluid_filter_augment",
        "thermal:area_radius_augment",
        "thermal:potion_amplifier_augment",
        "thermal:potion_duration_augment",
        "thermal:xp_storage_augment",
        "thermal:earth_charge",
        "thermal:phytogro",
        "thermal:compost",
        "thermal:satchel",
        "thermal:flux_drill",
        "thermal:flux_saw",
        "thermal:flux_magnet",
        "thermal:fluid_reservoir",
        "thermal:potion_infuser",
        "thermal:sawdust",
        "thermal:coal_coke",
        "thermal:bitumen",
        "thermal:tar",
        "thermal:rosin",
        "thermal:cinnabar",
        "thermal:apatite",
        "thermal:saw_blade",
        "thermal:drill_head",
        "thermal:hazmat_fabric",
        "thermal:diving_fabric",
        "thermal:blizz_powder",
        "thermal:blizz_rod",
        "thermal:blitz_powder",
        "thermal:blitz_rod",
        "thermal:basalz_powder",
        "thermal:basalz_rod",
        "thermal:redprint",
        "thermal:xp_crystal",
        "thermal:syrup_bottle",
        "thermal:charge_bench",
        "thermal:tinker_bench",
        "thermal:device_potion_diffuser",
        "thermal:potion_quiver",
        'thermal:white_rockwool',


        //minecraft tools
        'minecraft:wooden_hoe', 'minecraft:stone_hoe', 'minecraft:iron_hoe',
        'minecraft:wooden_pickaxe', 'minecraft:stone_pickaxe', 'minecraft:iron_pickaxe',
        'minecraft:wooden_axe', 'minecraft:stone_axe', 'minecraft:iron_axe',
        'minecraft:wooden_sword', 'minecraft:stone_sword', 'minecraft:iron_sword',
        'minecraft:wooden_shovel', 'minecraft:stone_shovel', 'minecraft:iron_shovel',


        'thermal:copper_nugget',
        'thermal:diving_boots',
        'thermal:hazmat_leggings',
        'thermal:hazmat_boots',
        'thermal:diving_helmet',
        'thermal:diving_chestplate',
        'thermal:diving_leggings',
        'tconstruct:copper_nugget',
        'thermal:rosin_block',
        'thermal:apatite_block',
        'thermal:crude_oil_bucket',
        'thermal:syrup_bucket',
        'thermal:sap_bucket',
        'thermal:creosote_bucket',
        'thermal:cinnabar_dust',
        'computercraft:computer_command',
        'tconstruct:slime_helmet',
        'tconstruct:slime_chestplate',
        'tconstruct:ender_slime_spawn_egg',
        'tconstruct:terracube_spawn_egg',
        'tconstruct:sky_slime_spawn_egg',
        'tconstruct:sky_staff',
        'tconstruct:ender_staff',
        'tconstruct:ichor_staff',
        'tconstruct:earth_staff',
        'tconstruct:slime_boots',
        'tconstruct:slime_leggings',
        'thermal:basalz_spawn_egg',
        'thermal:blizz_spawn_egg',
        'thermal:blitz_spawn_egg',
        'thermal:rf_potato',
        'thermal:wrench',
        'thermal:ice_charge',
        'thermal:lightning_charge',
        'thermal:hazmat_helmet',
        'thermal:hazmat_chestplate',
        'thermal:refined_fuel_bucket',
        'thermal:light_oil_bucket',
        'thermal:heavy_oil_bucket',
        'thermal:bitumen_block',
        'thermal:apatite_dust',
        'thermal:sawdust_block',
        'thermal:gunpowder_block',
        'createaddition:diamond_grit',
        'thermal:cinnabar_block',
        'thermal:coal_coke_block',
        'thermal:tar_block',
        'thermal:resin_bucket',
        'ad_astra:zombified_pygro_spawn_egg',
        'ad_astra:pygro_brute_spawn_egg',
        'ad_astra:mogler_spawn_egg',
        'ad_astra:zombified_mogler_spawn_egg',
        'ad_astra:sulfur_creeper_spawn_egg',
        'ad_astra:glacian_ram_spawn_egg',
        'ad_astra:lunarian_wandering_trader_spawn_egg',
        'thermal:detonator',
        'thermal:lock',
        'ad_astra:pygro_spawn_egg',
        'ad_astra:martian_raptor_spawn_egg',
        'ad_astra:star_crawler_spawn_egg',
        'ad_astra:corrupted_lunarian_spawn_egg',
        'ad_astra:lunarian_spawn_egg',
        'ad_astra:water_pump',
        'ad_astra:compressor',
        'ad_astra:coal_generator',
        'ad_astra:hammer',
    ]

    removed_items.forEach(element => {
        event.remove([{output:element}, {input:element}])
    });
})