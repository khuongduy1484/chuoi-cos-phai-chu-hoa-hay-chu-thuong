
function Kiem_tra_chu_viet_hoa() {
    let name = 'phan khuong duy';
    let parr = /^[A-z\s] /
    let a = parr.test(name);
    if (a ==true){
        alert("String is first character is uppercase");
    }else {
        alert("Strings first character is not uppercase");
    }
}
Kiem_tra_chu_viet_hoa();