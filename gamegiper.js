let a = [], mas = [`0`,`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`], b, i=1, j=1, hod;

function checkWin() {
    if ((mas[1] == mas[2]) && (mas[2] == mas[3]) || (mas[3] == mas[6]) && (mas[6] == mas[9]) ||
        (mas[7] == mas[8]) && (mas[8] == mas[9]) || (mas[1] == mas[4]) && (mas[4] == mas[7]) ||
        (mas[2] == mas[5]) && (mas[5] == mas[8]) || (mas[4] == mas[5]) && (mas[5] == mas[6]) ||
        (mas[1] == mas[5]) && (mas[5] == mas[9]) || (mas[3] == mas[5]) && (mas[5] == mas[7])) return 1;
}
hod = document.getElementById("hodd");
a[1]=document.getElementById("button1");
a[2]=document.getElementById("button2");
a[3]=document.getElementById("button3");
a[4]=document.getElementById("button4");
a[5]=document.getElementById("button5");
a[6]=document.getElementById("button6");
a[7]=document.getElementById("button7");
a[8]=document.getElementById("button8");
a[9]=document.getElementById("button9");

function qwerty(ind){
    if (j % 2 == 1) {
        hod.innerText="Ход игрока O";
        mas[ind] = `X`;
        a[ind].value = "X";
        a[ind].disabled = 1;
    }
    if (j % 2 == 0) {
        hod.innerText = "Ход игрока X";
        mas[ind] = `O`;
        a[ind].value = "O";
        a[ind].disabled = 1;
    }
    j++;
    if(checkWin()==1){
        for(i=1;i<10;i++){
            a[i].disabled = 1;
        }
        hod.innerText="Win!";
    }
}