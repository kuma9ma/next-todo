import { log } from "console";
import { createConnection } from "mysql2/promise";

export async function getConnection() {
    console.log('hello');
    return await createConnection({
        host: "coconara.cip2sylpslou.ap-northeast-1.rds.amazonaws.com",
        user: "admin",
        password: "kokonara",
        database: "todo-app"
    });
}

export async function query(sql: string) : Promise<any> {
    const conn = await getConnection();
    try {
        const abc = await conn.query(sql);
        return abc;
    } catch (error) {
        console.log(error);
    } finally {
        conn.end();
    }
}


