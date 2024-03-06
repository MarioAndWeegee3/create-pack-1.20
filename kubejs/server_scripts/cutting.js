// Adds new recipes utilizing the saw

const wood_types = [
    {
        log: 'minecraft:cherry_log',
        stripped_log: 'minecraft:stripped_cherry_log',
        wood: 'minecraft:cherry_wood',
        stripped_wood: 'minecraft:stripped_cherry_wood',
        planks: 'minecraft:cherry_planks',
    }
]

function woodCutting(event, output, input) {
    let results

    switch (typeof output) {
        case "string":
            results = [
                {
                    count: 1,
                    item: output,
                }
            ]
            break
        case "object":
            results = [output]
            break
        default:
            results = []
    }

    event.custom({
        type: 'create:cutting',
        ingredients: [
            {
                item: input,
            },
        ],
        processingTime: 50,
        results: results,
    })
}

ServerEvents.recipes(event => {
    for (const w of wood_types) {
        // log => stripped log
        woodCutting(
            event,
            w.stripped_log,
            w.log,
            50,
        )
        // wood => stripped wood
        woodCutting(
            event,
            w.stripped_wood,
            w.wood,
            50,
        )
        // stripped log => 6 planks
        woodCutting(
            event,
            {
                count: 6,
                item: w.planks,
            },
            w.stripped_log,
            50,
        )
        // stripped wood => 6 planks
        woodCutting(
            event,
            {
                count: 6,
                item: w.planks,
            },
            w.stripped_wood,
            50,
        )
    }
})
