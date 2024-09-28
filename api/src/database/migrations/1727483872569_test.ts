import { ColumnDefinitions, MigrationBuilder } from 'node-pg-migrate';

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
   pgm.createTable('users', {
        id: 'id',
        name: { type: 'varchar(1000)', notNull: true },
        createdAt: {
          type: 'timestamp',
          notNull: true,
          default: pgm.func('current_timestamp'),
        },
      });
      pgm.createTable('posts', {
        id: 'id',
        userId: {
          type: 'integer',
          notNull: true,
          references: '"users"',
          onDelete: 'CASCADE',
        },
        body: { type: 'text', notNull: true },
        createdAt: {
          type: 'timestamp',
          notNull: true,
          default: pgm.func('current_timestamp'),
        },
      });
      pgm.createIndex('posts', 'userId');
}

export async function down(pgm: MigrationBuilder): Promise<void> {}







// exports.up = (pgm) => {
//     pgm.createTable('users', {
//       id: 'id',
//       name: { type: 'varchar(1000)', notNull: true },
//       createdAt: {
//         type: 'timestamp',
//         notNull: true,
//         default: pgm.func('current_timestamp'),
//       },
//     });
//     pgm.createTable('posts', {
//       id: 'id',
//       userId: {
//         type: 'integer',
//         notNull: true,
//         references: '"users"',
//         onDelete: 'cascade',
//       },
//       body: { type: 'text', notNull: true },
//       createdAt: {
//         type: 'timestamp',
//         notNull: true,
//         default: pgm.func('current_timestamp'),
//       },
//     });
//     pgm.createIndex('posts', 'userId');
//   };