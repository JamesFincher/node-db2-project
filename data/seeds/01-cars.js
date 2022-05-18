// STRETCH
const cars = [
    {
        vin: '11111111111111111',
        make: 'toyota',
        model: 'prius',
        milage: 215000,
        title: 'clean',
        transmission: 'manual'
    },
    {
        vin: '2222222222222222',
        make: 'toyota',
        model: 'corolla',
        milage: 32312,
        title: 'clean',
    },
    {
        vin: '33333333333333333',
        make: 'ford',
        model: 'focus',
        milage: 32312,
    }
    
]


exports.seed = async function (knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}