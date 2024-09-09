
function init_metal_gear(event, is_metal, material, mod) {
    let sortie = 'thermal:'+material+'_gear'
    let entree = mod+':'+material

    event.remove({output: sortie})

    if (is_metal) {
        entree = entree+'_ingot'
    }

    event.remove({input: 'thermal:'+material+'_dust', output: entree})

    event.shaped('2x '+sortie, [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: entree,
        B:'create:cogwheel'
    })
}

// function ingot_to_nugget(event, material, mod) {
//     if (mod == 'minecraft')
//         return

//     let sortie = 'thermal:'+material+'_ingot'

//     event.replaceOutput(
//         {input: '#forge:dusts', not:{input:'thermal:'+material+'_dust'}, output: sortie},
//         sortie,
//         'thermal:'+material+'_nugget'
//     )
// }

ServerEvents.recipes(event => {

    // Thermal Gears

    let materials = [
        [true,'gold','minecraft'],
        [true,'iron','minecraft'],
        [true,'copper','minecraft'],
        [true,'netherite','minecraft'],
        [false,'diamond','minecraft'],
        [false,'emerald','minecraft'],
        [false,'quartz','minecraft'],
        [true,'signalum','thermal'],
        [true,'lumium','thermal'],
        [true,'enderium','thermal'],
        [true,'tin','thermal'],
        [true,'lead','thermal'],
        [true,'silver','thermal'],
        [true,'nickel','thermal'],
        [true,'bronze','thermal'],
        [true,'electrum','thermal'],
        [true,'invar','thermal'],
        [true,'constantan','thermal'],
    ]
    
    materials.forEach(element => {
        init_metal_gear(event, element[0], element[1], element[2])
        //ingot_to_nugget(event, element[1], element[2])
    });

    event.remove({output: 'thermal:lapis_gear'})

    event.shaped('2x thermal:lapis_gear', [
        'ABA'
    ], {
        A: 'minecraft:lapis_lazuli',
        B:'create:cogwheel'
    })

    // Redstone Servo
    event.remove({output: 'thermal:redstone_servo'})
    event.shaped('thermal:redstone_servo', [
        'ABA',
        ' C ',
        'ABA'
    ], {
        A:'thermal:signalum_gear',
        B:'thermal:rf_coil',
        C:'thermal:silver_ingot'
    })


})