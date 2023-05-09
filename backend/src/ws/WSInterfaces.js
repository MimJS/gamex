module.exports.GameInitInterface = {
    $id: 'game:init', // id for $ref
    description: 'Game init event',
    payload: {
        // Json schema
        type: {
            type: 'string',
            const: 'game:init',
        },
    },
};
