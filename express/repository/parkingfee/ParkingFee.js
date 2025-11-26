import pool from '../../configuration/db.js';

export async function findActiveParking(car_number) {
  const sql = `
    SELECT * FROM parking_status
    WHERE car_number = ? AND paid = false
  `;
  const [rows] = await pool.query(sql, [car_number]);
  return rows[0];
}

export async function saveStatus(car_number) {
    const existing = await findActiveParking(car_number);
    if(existing) {
        throw new Error('이미 입차된 상태입니다.');
    }
    const sql= `Insert into parking_status(car_number, entry_time,paid) values(?, NOW(), false)`;
    await pool.query(sql, [car_number]);
}