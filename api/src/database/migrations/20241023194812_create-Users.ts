import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("users", (table) => {
        table.increments("id").primary().notNullable();
        table.string('name').notNullable();
        table.string('email').notNullable().unique();
        table.string('password', 255).notNullable();
            
        table.enu('role', ['customer', 'admin']).defaultTo('customer').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
        table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();

    })
}


export async function down(knex: Knex): Promise<void> {
}

