// Fixes issues with tags

const stripped_logs = [
    'minecraft:stripped_cherry_log',
]

const stripped_wood = [
    'minecraft:stripped_cherry_wood',
]

ServerEvents.tags('item', event => {
    for (const log of stripped_logs) {
        event.add('c:stripped_logs', log)
    }

    for (const wood of stripped_wood) {
        event.add('c:stripped_wood', wood)
    }
})