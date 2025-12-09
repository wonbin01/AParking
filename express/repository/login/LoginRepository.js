import pool from '../../configuration/db.js';

export async function findMemberByID(member_id) {
    const query = 'select * from members where member_id =?';
    const [rows] = await pool.query(query, [member_id]);
    return rows[0];
}

export async function findMemberByName(name) {
    const query ='select * from members where name=?';
    const [rows] = await pool.query(query, [name]);
    return rows[0];
}