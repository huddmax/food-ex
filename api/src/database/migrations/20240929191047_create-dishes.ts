import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("dishes", (table) => {
        table.increments("id").primary(),
        table.string("name").notNullable(),
        table.decimal("price", 10, 2).notNullable(),
        table.text("description").notNullable(),
        table.text("image"),
        table.enum("category", ["meals", "desserts", "drinks"]).notNullable();

    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("dishes");
}

