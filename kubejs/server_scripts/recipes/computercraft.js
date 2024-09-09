
ServerEvents.recipes(event => {

    // Monitors
    event.remove({output:'computercraft:monitor_normal'})
    event.shaped('computercraft:monitor_normal', [
        'ABA',
        'CDC',
        'ACA'
    ], {
        A: '#forge:stone',
        B: 'create:electron_tube',
        C: 'create:andesite_casing',
        D: 'minecraft:glass_pane'
    })

    event.remove({output:'computercraft:monitor_advanced'})
    event.shaped('computercraft:monitor_advanced', [
        'ABA',
        'CDC',
        'ACA'
    ], {
        A: '#forge:stone',
        B: 'create:electron_tube',
        C: 'create:brass_casing',
        D: 'minecraft:glass_pane'
    })

    // Portable computers
    event.remove({output:'computercraft:pocket_computer_normal'})
    event.shaped('computercraft:pocket_computer_normal', [
        'AAA',
        'BCB',
        'ADA'
    ], {
        A: 'minecraft:smooth_stone_slab',
        B: 'create:andesite_casing',
        C: 'computercraft:computer_normal',
        D: 'thermal:flux_capacitor'
    })
    
    event.remove({output:'computercraft:pocket_computer_advanced'})
    event.shaped('computercraft:pocket_computer_advanced', [
        'AAA',
        'BCB',
        'ADA'
    ], {
        A: 'minecraft:smooth_stone_slab',
        B: 'create:brass_casing',
        C: 'computercraft:computer_advanced',
        D: 'thermal:flux_capacitor'
    })

    // Modems
    event.remove({output:'computercraft:wireless_modem_normal'})
    event.shaped('computercraft:wireless_modem_normal', [
        'ABA',
        'CDC',
        'CCC'
    ], {
        A: 'thermal:signalum_gear',
        B: 'create:eletron_tube',
        C: 'minecraft:iron_ingot',
        D: 'thermal:upgrade_augment_1'
    })

    event.remove({output:'computercraft:wireless_modem_advanced'})
    event.shaped('computercraft:wireless_modem_advanced', [
        'ABA',
        'CDC',
        'CCC'
    ], {
        A: 'thermal:lumium_gear',
        B: 'create:eletron_tube',
        C: 'minecraft:gold_ingot',
        D: 'thermal:upgrade_augment_2'
    })

    // Computer
    event.remove({output:'computercraft:computer_normal'})
    event.recipes.create.mechanical_crafting('computercraft:computer_normal', [
        'AAAAA',
        'ABCBA',
        'ADEDA',
        'ABFBA',
        'GGHGG'
    ], {
        A: 'create:andesite_casing',
        B: '#forge:glass',
        C: 'create:electron_tube',
        D: 'thermal:diamond_gear',
        E: 'thermal:upgrade_augment_2',
        F: 'thermal:redstone_servo',
        G: '#forge:stone',
        H: 'thermal:flux_capacitor'
    })

    event.remove({output:'computercraft:computer_advanced'})
    event.recipes.create.mechanical_crafting('computercraft:computer_advanced', [
        'AAAAA',
        'ABCBA',
        'ADEDA',
        'ABFBA',
        'GGHGG'
    ], {
        A: 'create:brass_casing',
        B: '#forge:glass',
        C: 'create:electron_tube',
        D: 'thermal:netherite_gear',
        E: 'thermal:upgrade_augment_3',
        F: 'thermal:redstone_servo',
        G: '#forge:stone',
        H: 'thermal:flux_capacitor'
    })

})