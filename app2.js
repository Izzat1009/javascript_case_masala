// case 1
let day = 6;
switch (day){

   case 1:
   console.log("Dushanba")
   break;
   case 2:
      console.log("Seshanba")
      break;
      case 3:
         console.log("Chorshanba")
         break;
         case 4:
            console.log("Payshanba")
            break;
            case 5:
               console.log("Juma")
               break
               case 6:
                  console.log("Shanba")
                  break
                  case 7:
                     console.log("Yakshanba")
                     break
                     case 8:
                        console.log("Xato")
}

// Case2
let k = 4;
switch (k) {
    case 1:
        console.log("Yomon");
        break;
    case 2:
        console.log("Qoniqarsiz");
        break;
    case 3:
        console.log("Qoniqarli");
        break;
    case 4:
        console.log("Yaxshi");
        break;
    case 5:
        console.log("A'lo");
        break;
    default:
        console.log("Xato: Baho 1-5 oralig'ida bo'lishi kerak");
}

// Case3
let month = 11; 
switch (month) {
    case 12:
    case 1:
    case 2:
        console.log("Qish");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Bahor");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Yoz");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Kuz");
        break;
    default:
        console.log("Xato: oy raqami 1-12 oralig'ida bo'lishi kerak");
}

// Case4
month = 2; 
switch (month) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        console.log(31 + " kun");
        break;
    case 4: case 6: case 9: case 11:
        console.log(30 + " kun");
        break;
    case 2:
        console.log(28 + " kun");
        break;
    default:
        console.log("Xato: oy raqami 1-12 oralig'ida bo'lishi kerak");
}

// Case5
let A = 10, B = 5, amal = 2; 
switch (amal) {
    case 1:
        console.log(A + B); // Qo'shish
        break;
    case 2:
        console.log(A - B); // Ayirish
        break;
    case 3:
        console.log(A / B); // Bo'lish
        break;
    case 4:
        console.log(A * B); // Ko'paytirish
        break;
    default:
        console.log("Xato: amal 1-4 oralig'ida bo'lishi kerak");
}

// Case6
let uzunlikBirligi = 3, uzunlikQiymati = 250; 
switch (uzunlikBirligi) {
    case 1: // desimetr
        console.log(uzunlikQiymati / 10 + " metr");
        break;
    case 2: // kilometr
        console.log(uzunlikQiymati * 1000 + " metr");
        break;
    case 3: // metr
        console.log(uzunlikQiymati + " metr");
        break;
    case 4: // millimetr
        console.log(uzunlikQiymati / 1000 + " metr");
        break;
    case 5: // santimetr
        console.log(uzunlikQiymati / 100 + " metr");
        break;
    default:
        console.log("Xato: uzunlik birligi 1-5 oralig'ida bo'lishi kerak");
}

// Case7
let ogirlikBirligi = 4, ogirlikQiymati = 2; 
switch (ogirlikBirligi) {
    case 1: // kilogramm
        console.log(ogirlikQiymati + " kg");
        break;
    case 2: // milligramm
        console.log(ogirlikQiymati / 1000000 + " kg");
        break;
    case 3: // gramm
        console.log(ogirlikQiymati / 1000 + " kg");
        break;
    case 4: // tonna
        console.log(ogirlikQiymati * 1000 + " kg");
        break;
    case 5: // sentner
        console.log(ogirlikQiymati * 100 + " kg");
        break;
    default:
        console.log("Xato: og'irlik birligi 1-5 oralig'ida bo'lishi kerak");
}

// Case8
let D = 29, M = 2; 
switch (M) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        console.log("Sanasi: " + D + "-" + M);
        break;
    case 4: case 6: case 9: case 11:
        if (D > 30) console.log("Xato: Bu oyning kuni 30 dan oshmaydi");
        else console.log("Sanasi: " + D + "-" + M);
        break;
    case 2:
        if (D > 28) console.

log("Xato: Fevralda 28 kun bor (kabisa emas)");
        else console.log("Sanasi: " + D + "-2");
        break;
    default:
        console.log("Xato: oy raqami 1-12 oralig'ida bo'lishi kerak");
}

// Case9
D = 28, M = 2;
switch (M) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        if (D < 31) D++;
        else { D = 1; M++; }
        break;
    case 4: case 6: case 9: case 11:
        if (D < 30) D++;
        else { D = 1; M++; }
        break;
    case 2:
        if (D < 28) D++;
        else { D = 1; M++; }
        break;
}
if (M > 12) M = 1;
console.log("Keyingi sana: " + D + "-" + M);

// Case10
let yonalish = "s", K = 1; 
switch (yonalish) {
    case "s":
        if (K === 0) console.log("Harakat davom ettirildi: Shimol");
        else if (K === 1) console.log("Chapga burildi: G'arb");
        else if (K === 2) console.log("O'ngga burildi: Sharq");
        break;
    case "t":
        if (K === 0) console.log("Harakat davom ettirildi: Janub");
        else if (K === 1) console.log("Chapga burildi: Sharq");
        else if (K === 2) console.log("O'ngga burildi: G'arb");
        break;
    case "q":
        if (K === 0) console.log("Harakat davom ettirildi: Sharq");
        else if (K === 1) console.log("Chapga burildi: Shimol");
        else if (K === 2) console.log("O'ngga burildi: Janub");
        break;
    case "g":
        if (K === 0) console.log("Harakat davom ettirildi: G'arb");
        else if (K === 1) console.log("Chapga burildi: Janub");
        else if (K === 2) console.log("O'ngga burildi: Shimol");
        break;
    default:
        console.log("Xato: Noto'g'ri yo'nalish yoki komanda");
}