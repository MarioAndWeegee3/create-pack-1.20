/**
 * This script adds the ability to craft shulker shells using
 * popped chorus fruits.
 */

ServerEvents.recipes(event => {
    event.custom({
        type: 'create:pressing',
        ingredients: [
            {
                item: 'minecraft:popped_chorus_fruit',
            },
        ],
        results: [
            {
                item: 'minecraft:shulker_shell',
            },
        ],
    })
})