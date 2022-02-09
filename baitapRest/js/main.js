let tinhDTB = (...diem) => {
  let tong = 0;
  diem.map((score) => {
    tong += score;
  });
  return tong / diem.length;
};
let tinhK1 = () => {
  let isValid = true;
  let d1 = Number(document.getElementById("inpToan").value);
  isValid &= check(d1, "Diem toan ko hop le");
  let d2 = Number(document.getElementById("inpLy").value);
  isValid &= check(d2, "diem ly ko hop le");
  let d3 = Number(document.getElementById("inpHoa").value);
  isValid &= check(d3, "Diem hoa ko hop le");
  console.log(isValid);
  if (isValid) {
    let kq = tinhDTB(d1, d2, d3);
    document.getElementById("tbKhoi1").innerHTML = kq;
  }
};
let tinhK2 = () => {
  let isValid = true;
  let d1 = Number(document.getElementById("inpVan").value);
  isValid &= check(d1, "Diem Van ko hop le");
  let d2 = Number(document.getElementById("inpSu").value);
  isValid &= check(d2, "Diem Su ko hop le");
  let d3 = Number(document.getElementById("inpDia").value);
  isValid &= check(d3, "Diem Dia ko hop le");
  let d4 = Number(document.getElementById("inpEnglish").value);
  isValid &= check(d4, "Diem Anh ko hop le");
  if (isValid) {
    let kq = tinhDTB(d1, d2, d3, d4);
    document.getElementById("tbKhoi2").innerHTML = kq;
  }
};
document.getElementById("btnKhoi1").onclick = tinhK1;
document.getElementById("btnKhoi2").onclick = tinhK2;
let check = (diem, mes) => {
  if (diem < 0 || diem > 10) {
    alert(mes);
    return false;
  } else return true;
};
