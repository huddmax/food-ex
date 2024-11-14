import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    const dishes = await knex("dishes").insert([
        {
            name: "Salada Ravanello",
            description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.",
            price: 49.97,
            image: "saladaRavanello.png",
            category: "meals",
        },
        {
            name: "Torradas de Parma",
            description: "Presunto de parma e rúcula em um pão com fermentação natural.",
            price: 25.97,
            image: "torradasDeParma.png",
            category: "meals",
        },
        {
            name: "Spaguetti Gambe",
            description: "Massa fresca com camarões e pesto.",
            price: 79.97,
            image: "spaguettiGambe.png",
            category: "meals",
        },
        {
            name: "Salada Molla",
            description: "Salada de folhas verdes com tomate, pepino e cebola roxa.",
            price: 69.97,
            image: "saladaMolla.png",
            category: "meals",
        },
        {
            name: "Prugna Pie",
            description: "Torta de ameixa com massa amanteigada, polvilho em açúcar.",
            price: 79.97,
            image: "prugnaPie.png",
            category: "desserts",
        },
        {
            name: "Peachy Pastrie",
            description: "Delicioso folheado de pêssego com folhas de hortelã.",
            price: 32.97,
            image: "peachyPastrie.png",
            category: "desserts",
        },
        {
            name: "Macarons",
            description: "Farinha de amêndoas, manteiga, claras e açúcar.",
            price: 79.97,
            image: "macarons.png",
            category: "desserts",
        },
        {
            name: "Bolo de damasco",
            description: "Damascos frescos em uma massa sem glúten.",
            price: 19.97,
            image: "boloDeDamasco.png",
            category: "desserts",
        },
        {
            name: "Espresso",
            description: "Café cremoso feito na temperatura e pressões perfeitas.",
            price: 15.97,
            image: "espresso.png",
            category: "drinks",
        },
        {
            name: "Suco de Maracujá",
            description: "Suco de maracujá gelado, cremoso, docinho.",
            price: 13.97,
            image: "sucoDeMaracuja.png",
            category: "drinks",
        },
        {
            name: "Tè d'autunno",
            description: "Chá de anis, canela e limão. Sinta o outono italiano.",
            price: 19.97,
            image: "teDAutunno.png",
            category: "drinks",
        },
        {
            name: "Pomo Bourbon",
            description: "Maçã, whisky, canela. On the rocks.",
            price: 69.69,
            image: "pomoBourbon.png",
            category: "drinks",
        },
    ]).returning("id");

    const tagsData = [
        { name: "alface", dish_id: dishes[0].id },
        { name: "cebola", dish_id: dishes[0].id },
        { name: "pão naan", dish_id: dishes[0].id },
        { name: "pepino", dish_id: dishes[0].id },
        { name: "rabanete", dish_id: dishes[0].id },
        { name: "tomate", dish_id: dishes[0].id },

        // Torradas de Parma
        { name: "parma", dish_id: dishes[1].id },
        { name: "rúcula", dish_id: dishes[1].id },
        { name: "pão", dish_id: dishes[1].id },

        // Spaguetti Gambe
        { name: "spaguetti", dish_id: dishes[2].id },
        { name: "camarões", dish_id: dishes[2].id },
        { name: "pesto", dish_id: dishes[2].id },

        // Salada Molla
        { name: "alface", dish_id: dishes[3].id },
        { name: "tomate", dish_id: dishes[3].id },
        { name: "pepino", dish_id: dishes[3].id },
        { name: "cebola", dish_id: dishes[3].id },
        { name: "molho", dish_id: dishes[3].id },
        { name: "pimenta", dish_id: dishes[3].id },

        // Prugna Pie
        { name: "ameixa", dish_id: dishes[4].id },
        { name: "massa", dish_id: dishes[4].id },
        { name: "açúcar", dish_id: dishes[4].id },

        // Peachy Pastrie
        { name: "pêssego", dish_id: dishes[5].id },
        { name: "hortelã", dish_id: dishes[5].id },
        { name: "folheado", dish_id: dishes[5].id },

        // Macarons
        { name: "amêndoas", dish_id: dishes[6].id },
        { name: "manteiga", dish_id: dishes[6].id },
        { name: "clara", dish_id: dishes[6].id },
        { name: "açúcar", dish_id: dishes[6].id },

        // Bolo de damasco
        { name: "damasco", dish_id: dishes[7].id },
        { name: "massa", dish_id: dishes[7].id },

        // Espresso
        { name: "café", dish_id: dishes[8].id },
        { name: "cremoso", dish_id: dishes[8].id },

        // Suco de Maracujá
        { name: "maracujá", dish_id: dishes[9].id },
        { name: "açucar", dish_id: dishes[9].id },
        { name: "água", dish_id: dishes[9].id },

        // Tè d'autunno
        { name: "anis", dish_id: dishes[10].id },
        { name: "canela", dish_id: dishes[10].id },
        { name: "limão", dish_id: dishes[10].id },

        // Pomo Bourbon
        { name: "maçã", dish_id: dishes[11].id },
        { name: "whisky", dish_id: dishes[11].id },
        { name: "canela", dish_id: dishes[11].id },
    ];
    

    await knex("tags").insert(tagsData);
}

