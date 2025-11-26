import { findMemberByName } from "../../repository/login/LoginRepository.js";
import { saveStatus } from "../../repository/parkingfee/ParkingFee.js";

export async function saveParkingStatus(userName) { //입차 하는 경우
    const member= await findMemberByName(userName);
    const car_number=member.car_number;
    await saveStatus(car_number); //입차버튼을 누르는 경우 DB에 저장
}

export async function getParkingFeePreview(userName) {
    const member = await findMemberByName(userName);
    const car_number = member.car_number;
    // 여기서 주차 요금 미리보기 로직 추가
}