

ServerEvents.recipes(event => {
     
//Stargate Base Block
    event.custom({
        type: "neepmeat:manufacture",
        base: {
            id: "neepmeat:machine_block"
        },
        steps:[
            {
                id: "neepmeat:combine",
                resource: "ae2:fluix_pearl"
            },
            {
                id: "neepmeat:inject",
                resource: "mekanismgenerators:fusion_fuel"
            },
            {
                id: "neepmeat:inject",
                resource: "mekanism:uranium_hexafluoride"
            },
            {
                id: "neepmeat:combine",
                resource: "create:electron_tube"
            },
            {
                id: "neepmeat:inject",
                resource: "neepmeat:blood"
            },
            {
                id: "neepmeat:combine",
                resource: "mekanism:ultimate_induction_cell"
            }
        ],
        result: {
            resource: "sgjourney:classic_stargate_base_block",
            amount: 1
        }
    })

//Stargate Chevron Blocks
    event.custom({
        type: "neepmeat:manufacture",
        base: {
            id: "neepmeat:machine_block"
        },
        steps:[
            {
                id: "neepmeat:combine",
                resource: "neepmeat:redstone_interface"
            },
            {
                id: "neepmeat:inject",
                resource: "mekanismgenerators:fusion_fuel"
            },
            {
                id: "neepmeat:inject",
                resource: "mekanism:uranium_hexafluoride"
            },
            {
                id: "neepmeat:combine",
                resource: "create:electron_tube"
            },
            {
                id: "neepmeat:inject",
                resource: "neepmeat:blood"
            },
            {
                id: "neepmeat:combine",
                resource: "mekanism:elite_induction_cell"
            }
        ],
        result: {
            resource: "sgjourney:classic_stargate_chevron_block",
            amount: 1
        }
    })

    event.custom({
        type: "neepmeat:manufacture",
        base: {
            id: "neepmeat:machine_block"
        },
        steps:[
            {
                id: "neepmeat:inject",
                resource: "mekanismgenerators:fusion_fuel"
            },
            {
                id: "neepmeat:inject",
                resource: "mekanism:uranium_hexafluoride"
            },
            {
                id: "neepmeat:combine",
                resource: "neepmeat:copper_coil"
            },
            {
                id: "neepmeat:inject",
                resource: "neepmeat:blood"
            },
            {
                id: "neepmeat:combine",
                resource: "mekanism:elite_universal_cable"
            }
        ],
        result: {
            resource: "sgjourney:classic_stargate_ring_block",
            amount: 1
        }
    })


})
