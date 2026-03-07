function currentBill(ccf) {

let bill = 6;

if(ccf <= 3){
bill += ccf * 2.66;
}
else if(ccf <= 7){
bill += 3 * 2.66;
bill += (ccf - 3) * 3.86;
}
else{
bill += 3 * 2.66;
bill += 4 * 3.86;
bill += (ccf - 7) * 5.26;
}

return bill;
}

function calculate(){

let levy = parseFloat(document.getElementById("frontageLevy").value);
let threshold = parseFloat(document.getElementById("threshold").value);
let surchargeRate = parseFloat(document.getElementById("surchargeRate").value);
let dividendType = document.getElementById("dividendType").value;
let dividendAmount = parseFloat(document.getElementById("dividendAmount").value);

let frontage = parseFloat(document.getElementById("frontage").value);
let usage = parseFloat(document.getElementById("usage").value);

let current = currentBill(usage);

let baseMeterFee = 6.00;
let frontageCharge = frontage * levy;

let surcharge = 0;
if (usage > threshold) {
  surcharge = (usage - threshold) * surchargeRate;
}

let dividend = 0;
if (dividendType === "flat") {
  dividend = dividendAmount;
} else {
  dividend = frontage * dividendAmount;
}

let newBill = baseMeterFee + frontageCharge + surcharge - dividend;

document.getElementById("currentBill").innerText = current.toFixed(2);
document.getElementById("frontageCharge").innerText = frontageCharge.toFixed(2);
document.getElementById("surcharge").innerText = surcharge.toFixed(2);
document.getElementById("dividend").innerText = dividend.toFixed(2);
document.getElementById("newBill").innerText = newBill.toFixed(2);
}
