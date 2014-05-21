//var getAccruedMonthlyExpense = function (duration, monthlyCost, annualIncrease) {
//    var currentAnnualCost = monthlyCost*12;
//    var totalCost = 0;
//    for(var i=0;i<duration;i++){
//        totalCost += currentAnnualCost;
//        currentAnnualCost = (currentAnnualCost*(100+annualIncrease))/100;
//    }
//    return totalCost;
//}
//
////for Rent
//var durationYear = 10;
//var monthlyRent = 2300;
//var annualIncrease = 6;
//
//var totalLossFromRent = getAccruedMonthlyExpense(durationYear,monthlyRent,annualIncrease);
//console.log(totalLossFromRent);
//
//var discountRate = 0.75;
//var totalHousePrice = 650000;
//var annualHouseAppreciateRate = 8.8;
//var HoaFee = 100;
//var HoaAnnualIncrease = 8;
//var principle = 300000;
//var years = 30;
//var months = years*12;
//var interestRate = 4.35;
//var propertyTaxRate = 1.25
//var startDate = new Date();
//
//
//var amortizationSchedule = finance.calculateAmortization(principle, months, interestRate, startDate );
//
//var aggrInterest = 0;
//var aggrTax = 0;
//var aggrHOA = 0;
//var durationMonths = (durationYear*12)
//for(var i=0;i<durationMonths;i++){
//    aggrInterest += amortizationSchedule[i].paymentToInterest;
//}
//
//aggrTax = (totalHousePrice*propertyTaxRate/100)*durationYear;
//
//aggrHOA = getAccruedMonthlyExpense(durationYear,HoaFee,HoaAnnualIncrease);
//
//totalInterestNTax = (aggrTax + aggrInterest)*discountRate;
//
//finalHouseSoldPrice += totalHousePrice*(annualHouseAppreciateRate*durationYear);
//
//sellingCommission = finalHouseSoldPrice*6%;
//
//totalExpense = totalInterestNTax + aggrHOA + sellingCommission;
//
//profit = finalHouseSoldPrice - totalHousePrice;
//
//netOutcome = profit - totalExpense;
//if(netOutcome > 0){
//    gain = netOutcome;
//    loss = "none";
//} else {
//    gain = "none";
//    loss = netOutcome;
//}
//
//
//
//
//
//
//
//
//
