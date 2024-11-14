import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("tags", (table) => {
        table.increments("id").primary(),
        table.text("name").notNullable(),
            
        table.integer("dish_id").references("id").inTable("dishes").notNullable().onDelete("CASCADE");
    })
}


export async function down(knex: Knex): Promise<void> {
}

