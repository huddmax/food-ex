import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("dishes").insert([
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
            description: "Massa fresca com camarões e pesto.",
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
    ]);
}
