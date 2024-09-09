
function init_tank(event, type, number) {
    let sortie = 'ad_astra:'+type+'_tank'
    let input = 'ad_astra:'+type+'_plate'
    let inter = 'kubejs:incomplete_'+type+'_tank'

    event.remove({output:sortie})
    event.recipes.create.sequenced_assembly(sortie, 'ad_astra:engine_frame', [
        event.recipes.createDeploying(inter, [inter, input]),
        event.recipes.createDeploying(inter, [inter, 'create:fluid_valve']),
        event.recipes.createDeploying(inter, [inter, 'create:fluid_tank']),
        event.recipes.createDeploying(inter, [inter, 'ad_astra:vent']),
        event.recipes.createDeploying(inter, [inter, input]),
    ]).transitionalItem(inter).loops(number)

}

function init_engine(event, type, number) {
    let sortie = 'ad_astra:'+type+'_engine'
    let input1 = 'ad_astra:'+type+'_tank'
    let input2 = 'ad_astra:'+type+'_plate'
    let inter = 'kubejs:incomplete_'+type+'_engine'

    event.remove({output:sortie})
    event.recipes.create.sequenced_assembly(sortie, 'ad_astra:engine_frame', [
        event.recipes.createDeploying(inter, [inter, input1]),
        event.recipes.createDeploying(inter, [inter, 'create:mechanical_pump']),
        event.recipes.createDeploying(inter, [inter, 'ad_astra:engine_fan']),
        event.recipes.createDeploying(inter, [inter, 'createaddition:electric_motor']),
        event.recipes.createDeploying(inter, [inter, input2]),
    ]).transitionalItem(inter).loops(number)

}

ServerEvents.recipes(event => {

    let inter = 'kubejs:incomplete_nasa_workbench'

    // Nasa Workbench
    event.remove({output:'ad_astra:nasa_workbench'})
    event.recipes.create.sequenced_assembly('ad_astra:nasa_workbench', 'computercraft:computer_advanced', [
        event.recipes.createDeploying(inter, [inter, 'create:mechanical_arm']),
        event.recipes.createDeploying(inter, [inter, 'thermal:netherite_gear']),
        event.recipes.createDeploying(inter, [inter, 'ad_astra:steel_cable']),
        event.recipes.createDeploying(inter, [inter, 'thermal:constantan_gear']),
        event.recipes.createDeploying(inter, [inter, 'ad_astra:steel_plate']),
    ]).transitionalItem(inter).loops(3)


    // Launch Pad
    event.remove({output:'ad_astra:launch_pad'})
    event.recipes.create.mechanical_crafting('ad_astra:launch_pad', [
        'AAAABAAAA',
        'ACDDBDDCA',
        'ADEEBEEDA',
        'ADEDBDEDA',
        'BBBBCBBBB',
        'ADEDBDEDA',
        'ADEEBEEDA',
        'ACDDBDDCA',
        'AAAABAAAA'
    ], {
        A: '#forge:stone',
        B: 'ad_astra:steel_cable',
        C: 'minecraft:netherite_ingot',
        D: 'ad_astra:steel_plate',
        E: 'ad_astra:iron_plate'
    })

    // Rocket part

    event.remove({output:'ad_astra:rocket_fin'})
    event.recipes.create.mechanical_crafting('ad_astra:rocket_fin', [
        '  A  ',
        ' ABA ',
        'AACAA',
        'AA AA',
        'A   A'
    ], {
        A: 'ad_astra:steel_plate',
        B: 'thermal:invar_gear',
        C: 'createaddition:electric_motor'
    })

    event.remove({output:'ad_astra:rocket_nose_cone'})
    event.recipes.create.mechanical_crafting('ad_astra:rocket_nose_cone', [
        '  Z  ',
        ' AAA ',
        ' ABA ',
        'ACECA',
        'ADEDA'
    ], {
        A: 'ad_astra:steel_plate',
        B: 'computercraft:computer_normal',
        C: 'ad_astra:engine_fan',
        D: 'ad_astra:vent',
        E: 'ad_astra:steel_cable',
        Z: 'minecraft:lightning_rod'
    })

    // Steel

    event.remove({type:'minecraft:blasting', output:'ad_astra:steel_ingot'})

    event.recipes.create.mixing(Fluid.of('tconstruct:molten_steel', 100), [Fluid.of('tconstruct:molten_iron',100), '#minecraft:coals']).superheated()
    event.recipes.create.mixing(Fluid.of('tconstruct:molten_steel', 1000), [Fluid.of('tconstruct:molten_iron',1000), '#forge:storage_blocks/coal']).superheated()
    
    // Tanks & Engines

    let types = [
        ['steel', 1],
        ['desh', 2],
        ['ostrum', 3],
        ['calorite', 4],
    ]

    types.forEach(element => {
        init_tank(event, element[0], element[1])
    });
    types.forEach(element => {
        init_engine(event, element[0], element[1])
    });

    // Oxygen tank

    event.remove({output:'ad_astra:oxygen_tank'})
    event.shaped('ad_astra:oxygen_tank', [
        'ABA',
        'ACA',
        'AAA'
    ], {
        A: 'ad_astra:steel_plate',
        B: 'create:fluid_valve',
        C: 'create:fluid_tank'
    })

    // Energizer

    event.remove({output:'ad_astra:energizer'})
    event.shaped('ad_astra:energizer', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'ad_astra:ostrum_plate',
        B: 'kubejs:diamond_crystal',
        C: 'thermal:invar_gear',
        D: 'thermal:flux_capacitor',
        E: 'ad_astra:desh_cable'
    })

    // Wheel

    event.remove({output:'ad_astra:wheel'})
    event.shaped('ad_astra:wheel', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: 'thermal:cured_rubber',
        B: 'ad_astra:steel_plate'
    })

    // Solar pannel

    event.remove({output:'ad_astra:solar_panel'})
    event.shaped('ad_astra:solar_panel', [
        'AAA',
        'BCB',
        'DED'
    ], {
        A: '#forge:glass_panes',
        B: 'thermal:lumium_plate',
        C: 'ad_astra:desh_cable',
        D: 'ad_astra:desh_plate',
        E: 'createaddition:modular_accumulator'
    })

    // Fuel Refinery

    event.remove({output:'ad_astra:fuel_refinery'})
    event.recipes.create.mechanical_crafting('ad_astra:fuel_refinery', [
        'AAHAA',
        'ABCBA',
        'DEFED',
        'ABGBA',
        'AAIAA'
    ], {
        A: 'ad_astra:steel_plate',
        B: 'ad_astra:steel_cable',
        C: 'create:whisk',
        D: 'create:fluid_valve',
        E: 'create:fluid_tank',
        F: 'create:smart_fluid_pipe',
        G: 'create:precision_mechanism',
        H: 'thermal:invar_gear',
        I: 'ad_astra:engine_fan'
    })

})