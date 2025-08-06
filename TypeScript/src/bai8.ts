function cong(a: number | string, b: number | string): number | string {
    let so1 = chuyenThanhSo(a);
    let so2 = chuyenThanhSo(b);
    if (so1 === null || so2 === null) return "Gia tri khong hop le";
    return so1 + so2;
}

function tru(a: number | string, b: number | string): number | string {
    let so1 = chuyenThanhSo(a);
    let so2 = chuyenThanhSo(b);
    if (so1 === null || so2 === null) return "Gia tri khong hop le";
    return so1 - so2;
}

function nhan(a: number | string, b: number | string): number | string {
    let so1 = chuyenThanhSo(a);
    let so2 = chuyenThanhSo(b);
    if (so1 === null || so2 === null) return "Gia tri khong hop le";
    return so1 * so2;
}

function chia(a: number | string, b: number | string): number | string {
    let so1 = chuyenThanhSo(a);
    let so2 = chuyenThanhSo(b);
    if (so1 === null || so2 === null) return "Gia tri khong hop le";
    if (so2 === 0) return "Khong the chia cho 0";
    return so1 / so2;
}
