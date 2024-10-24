// exports.seed = async function(knex) {
//     // Limpa os dados existentes nas tabelas antes de inserir novos
//     await knex('tags').del();
//     await knex('dishes').del();
  
//     // Insere pratos na tabela `dishes`
//     const dishes = await knex('dishes').insert([
//       { 
//         name: 'Spaghetti Carbonara',
//         description: 'Traditional Italian pasta with creamy egg and pancetta sauce.',
//         image: '/images/carbonara.jpg',
//         price: 25.50,
//         category: 'Pasta'
//       },
//       { 
//         name: 'Margherita Pizza',
//         description: 'Classic pizza topped with fresh tomatoes, mozzarella, and basil.',
//         image: '/images/margherita.jpg',
//         price: 30.00,
//         category: 'Pizza'
//       },
//       {
//         name: 'Caesar Salad',
//         description: 'Crisp romaine lettuce, croutons, and Caesar dressing, topped with parmesan.',
//         image: '/images/caesar_salad.jpg',
//         price: 18.75,
//         category: 'Salad'
//       },
//     ]).returning('id'); 
  
//     // Associa ingredientes (tags) aos pratos usando o `dish_id`
//     await knex('tags').insert([
//       { name: 'Egg', dish_id: dishes[0].id }, // Ingrediente para Spaghetti Carbonara
//       { name: 'Pancetta', dish_id: dishes[0].id },
//       { name: 'Mozzarella', dish_id: dishes[1].id }, // Ingrediente para Margherita Pizza
//       { name: 'Tomato', dish_id: dishes[1].id },
//       { name: 'Basil', dish_id: dishes[1].id },
//       { name: 'Romaine Lettuce', dish_id: dishes[2].id }, // Ingrediente para Caesar Salad
//       { name: 'Croutons', dish_id: dishes[2].id },
//       { name: 'Parmesan', dish_id: dishes[2].id },
//     ]);
//   };
  