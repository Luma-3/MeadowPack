ServerEvents.recipes(event => {

    event.remove({id: 'createaddition:compat/tconstruct/manyullyn'})
    event.recipes.create.mixing(Fluid.of('tconstruct:molten_manyullyn', 360), ['3x tconstruct:cobalt_ingot', 'minecraft:netherite_ingot']).superheated()

    event.remove({id: 'tconstruct:smeltery/alloys/molten_manyullyn'})
    event.custom({
        type:'tconstruct:alloy',
        inputs: [
            {fluid: 'tconstruct:molten_cobalt', amount: 270},
            {fluid: 'tconstruct:molten_netherite', amount: 90}
        ],
        result: { fluid: 'tconstruct:molten_manyullyn', amount: 360},
        temperature: 1200
    })

})