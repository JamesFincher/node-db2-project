// STRETCH
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex('cars').del()
    await knex('cars').insert([
      {
        id: 1, 
        vin: '1HD1KEM1XDB602203',
        make: "Toyota",
        model: "Prius",
        mileage: "50400",
        title: "Clay Blackiston",
        transmission: "Manual"
      },
      {
        id: 2, 
        vin: '1J4GZ58S9VC710649',
        make: "Tesla",
        model: "Model 3",
        mileage: "300",
        title: "Abby Glasgow",
        transmission: "N/A- Electric"
      },
      {
        id: 3, 
        vin: 'WVWAF93D258002461',
        make: "Porsche",
        model: "Cayan",
        mileage: "15000",
        title: "Tom Glasgow",
        transmission: "Automatic"
      }
    ]);
  };