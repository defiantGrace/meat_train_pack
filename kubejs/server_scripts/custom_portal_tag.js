ServerEvents.tags('block', event => {
    event.removeAll('custom_nether_portals:obsidian')
    event.add('custom_nether_portals:obsidian', 'immersiveengineering:blastbrick_reinforced')
})
