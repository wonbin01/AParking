import pool from '../../configuration/db.js';

export async function saveCongestionStatus(buildingId, totalSlots, availableSlots, timeStamp) {
    const sql = `
    Insert into congestion_status 
    (building_id, total_slots, available_slots, time_info) 
    values(?,?,?,?)`;
    await pool.query(sql, [buildingId, totalSlots, availableSlots, timeStamp]);
}

export async function getCongestionStatus(building_id,timeStamp) {
    const sql = `
        SELECT *
        FROM congestion_status
        WHERE building_id = ?
          AND time_info >= DATE_FORMAT(?, '%Y-%m-%d %H:00:00')
          AND time_info <  DATE_ADD(DATE_FORMAT(?, '%Y-%m-%d %H:00:00'), INTERVAL 1 HOUR)
    `;
    const [congestionInfo] = await pool.query(sql, [building_id, timeStamp, timeStamp]);
    return congestionInfo;
}