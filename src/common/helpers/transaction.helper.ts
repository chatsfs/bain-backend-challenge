import { Connection } from 'typeorm';

export async function startTransaction(connection: Connection) {
    const queryRunner = connection.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    return queryRunner;
}
