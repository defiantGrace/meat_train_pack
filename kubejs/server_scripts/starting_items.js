PlayerEvents.loggedIn( event => {
    const player = event.player
    if (!player.stages.has('starting_items')) {
        player.stages.add('starting_items')
        player.give(Item.of('bedrockores:bedrock_miner', 1))
        player.give(Item.of('powah:furnator_starter', 1))
    }
})