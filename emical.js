
function emi(){

    var loan = parseInt(document.getElementById('loan').value);
    document.getElementById('o1').innerHTML=('Loan: '+loan);

    var int = parseFloat(document.getElementById('int').value);
    var r = (int/12)/100;

    var ten = parseInt(document.getElementById('year').value);
    var mon = ten*12;

    var emi = (loan * r * Math.pow((1+r),mon))/(Math.pow((1+r),mon)-1);
    var total_int = (emi*mon) - loan;
    var total_pay = total_int + loan;
    
    document.getElementById('o2').innerHTML=('Total Interest: ₹'+Math.round(total_int));
    document.getElementById('o3').innerHTML='EMI: ₹'+Math.round(emi);
    document.getElementById('o4').innerHTML='Total Payment: ₹'+Math.round(total_pay);
}



