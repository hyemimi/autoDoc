
/** 유효성 검사 정규식 */

const RRN_VALIDATION = /\d{2}([0]\d|[1][0-2])([0][1-9]|[1-2]\d|[3][0-1])[-][1-4]\d{6}/;
const PHONE_VALIDATION = /^[0][0-9]{2}[-][0-9]{4}[-][0-9]{4}$/;
const EMAIL_VALIDATION = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const EMERGENCY_VALIDATION = /^[0][0-9]{2}[-][0-9]{4}[-][0-9]{4}$/;

export { RRN_VALIDATION, PHONE_VALIDATION, EMAIL_VALIDATION, EMERGENCY_VALIDATION };