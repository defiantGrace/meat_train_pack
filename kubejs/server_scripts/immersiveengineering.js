ServerEvents.recipes(event => {
    event.replaceInput(
        { output: 'immersiveengineering:blastbrick', input: 'minecraft:brick'},
        'minecraft:nether_brick',
        'minecraft:bricks'
    )

    event.replaceInput(
        { output: 'immersiveengineering:reinforced_blastbrick'},
        "#forge:plates/steel",
        'sgjourney:naquadah'
    )
})