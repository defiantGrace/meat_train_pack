ServerEvents.recipes(event => {
    

    //remove the sin
    event.remove({output:'minecraft:iron_nugget',input:'minecraft:gravel'})

    //andesite casing replacement
    event.remove({output: 'create:andesite_casing'})
    event.custom({
        type: "create:item_application",
        ingredients: [
            {
                tag: "forge:treated_wood"
            },
            {
                item:'create:andesite_alloy'
            }
        ],
        results: [
            {
                item: "create:andesite_casing"
            }
        ]
    })

    //brass casing replacement
    event.remove({output: 'create:brass_casing'})
    event.custom({
        type: "create:item_application",
        ingredients: [
            {
                item: 'minecraft:stripped_crimson_stem'
            },
            {
                tag: "forge:ingots/brass"
            }
        ],
        results: [
            {
                item: "create:brass_casing"
            }
        ]
    })

    //replace andesite alloy with scorchia
    event.replaceInput(
        { output: 'create:andesite_alloy'},
        'minecraft:andesite',
        'create:scorchia'
    )

    //add brain to electron tubes
    event.shaped(
        Item.of('create:electron_tube', 1),
        [
            ' A ',
            ' B ',
            ' C '
        ],
        {
            A: 'create:polished_rose_quartz',
            B: 'neepmeat:enlightened_brain',
            C: "#forge:plates/iron"
        }
    )

    //rework brass alloying
    event.remove({output:'create:brass_ingot', input:'create:zinc_ingot'})
    event.remove({id:'immersiveengineering:alloysmelter/brass'})
    event.remove({id:'immersiveengineering:arcfurnace/alloy_brass'})
    event.custom({
        type: "immersiveengineering:arc_furnace",
        input: {
            tag: "forge:ingots/copper"
        },
        additives: [
            {
                tag: "forge:ingots/zinc"
            },
            {
                item: 'neepmeat:whisper_flour'
            }
        ],
        results: [
            {
                count: 2,
                base_ingredient: {
                    item: 'create:brass_ingot'
                }
            }
        ],
        time: 100,
        energy: 51200
    })
    event.recipes.createMixing('create:brass_ingot',
        [
            "#forge:ingots/copper",
            "#forge:ingots/zinc",
            'neepmeat:whisper_flour'
        ]).superheated()
    //brainwashing
    event.recipes.createSplashing('neepmeat:brain_rough','neepmeat:enlightened_brain')
})