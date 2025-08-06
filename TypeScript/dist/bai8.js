"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function cong(a, b) {
    let so1 = chuyenThanhSo(a);
    let so2 = chuyenThanhSo(b);
    if (so1 === null || so2 === null)
        return "Gia tri khong hop le";
    return so1 + so2;
}
function tru(a, b) {
    let so1 = chuyenThanhSo(a);
    let so2 = chuyenThanhSo(b);
    if (so1 === null || so2 === null)
        return "Gia tri khong hop le";
    return so1 - so2;
}
function nhan(a, b) {
    let so1 = chuyenThanhSo(a);
    let so2 = chuyenThanhSo(b);
    if (so1 === null || so2 === null)
        return "Gia tri khong hop le";
    return so1 * so2;
}
function chia(a, b) {
    let so1 = chuyenThanhSo(a);
    let so2 = chuyenThanhSo(b);
    if (so1 === null || so2 === null)
        return "Gia tri khong hop le";
    if (so2 === 0)
        return "Khong the chia cho 0";
    return so1 / so2;
}
