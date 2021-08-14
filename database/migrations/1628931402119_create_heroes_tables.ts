import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CreateHeroesTables extends BaseSchema {
  protected tableName = 'heroes'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary();
      table.string('name', 255).notNullable();

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true }).nullable();
      table.timestamp('updated_at', { useTz: true }).nullable();
    })
  }

  public async down () {
    this.schema.dropSchemaIfExists(this.tableName)
  }
}
