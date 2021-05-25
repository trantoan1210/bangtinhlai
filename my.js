function nhap2(){
    let tien = document.getElementById('tien').value;
    let lai = +document.getElementById('lai').value;
    let thoigian = +document.getElementById('thoigian').value;
  ketqua = tien*[(1 + (lai/100))**thoigian]
  document.getElementById('ketqua').innerHTML = ketqua;
}