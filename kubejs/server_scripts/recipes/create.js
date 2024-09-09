
ServerEvents.recipes(event => {

    // Mechanical belt
    event.remove({output: 'create:belt_connector'})
    event.shaped('3x create:belt_connector', [
        'AAA',
        'BBB',
        'AAA'
    ], {
        A: 'thermal:cured_rubber',
        B: 'minecraft:iron_nugget'
    })
    
    // Rotation Speed Controller
    event.remove({output: 'create:rotation_speed_controller'})
    event.shaped('create:rotation_speed_controller', [
        ' A ',
        'BCB',
        'DDD'
    ], {
        A: 'thermal:electrum_gear',
        B: 'create:cogwheel',
        C: 'create:precision_mechanism',
        D: 'create:brass_casing'
    })

    // Display link
    event.remove({output: 'create:display_link'})
    event.shaped('create:display_link', [
        'A',
        'B',
        'C'
    ], {
        A: 'create:electron_tube',
        B: 'create:brass_casing',
        C: 'create:copper_sheet'
    })

    event.remove({output: 'create:steam_engine'})
    event.recipes.create.mechanical_crafting('create:steam_engine', [
        'ABA',
        ' C ',
        'DCD',
        'DED',
        'DFD',
    ], {
        A: 'create:brass_ingot',
        B: 'create:gearbox',
        C: 'create:shaft',
        D: 'create:copper_casing',
        E: 'create:fluid_tank',
        F: 'create:fluid_valve'
    })

    // Mechanical Arm
    let inter = 'kubejs:incomplete_mechanical_arm'

    event.remove({output: 'create:mechanical_arm'})
    event.recipes.create.sequenced_assembly('create:mechanical_arm', 'create:brass_casing', [
        event.recipes.createDeploying(inter, [inter, 'create:precision_mechanism']),
        event.recipes.createDeploying(inter, [inter, 'thermal:electrum_gear']),
        event.recipes.createDeploying(inter, [inter, 'create:brass_sheet']),
        event.recipes.createDeploying(inter, [inter, 'thermal:electrum_gear']),
        event.recipes.createDeploying(inter, [inter, 'create:brass_hand'])
    ]).transitionalItem(inter).loops(1)

    // addon interior Chairs
    let dye = [
        'white',
        'orange',
        'magenta',
        'light_blue',
        'yellow',
        'lime',
        'pink',
        'gray',
        'light_gray',
        'cyan',
        'purple',
        'blue',
        'brown',
        'green',
        'red',
        'black'
    ]

    // Interior Chair Dye
    dye.forEach(color => {
        event.remove({id: 'interiors:crafting/floor_chair/'+color+'_floor_chair_from_other_floor_chair'})
        event.remove({id: 'interiors:crafting/chair/'+color+'_chair_from_other_chair'})
        
        event.recipes.shapeless('interiors:'+color+'_floor_chair', ['#interiors:floor_chairs', 'minecraft:'+color+'_dye'])
        event.recipes.shapeless('interiors:'+color+'_chair', ['#interiors:chairs', 'minecraft:'+color+'_dye'])
    });

})  