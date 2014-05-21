function MainCtrl($scope) {
    var getAccruedMonthlyExpense = function (duration, monthlyCost, annualIncrease) {
        var currentAnnualCost = monthlyCost*12;
        var totalCost = 0;
        for(var i=0;i<duration;i++){
            totalCost += currentAnnualCost;
            currentAnnualCost = (currentAnnualCost*(100+annualIncrease))/100;
        }
        return totalCost;
    }
    
    $scope.totalLossFromRent = 0;
    $scope.netOutcome = 0;
    //for Rent
    $scope.durationYear = 10;
    $scope.monthlyRent = 2300;
    $scope.annualIncrease = 6;
    $scope.monthlyBill = 0;
    
    var totalLossFromRent = getAccruedMonthlyExpense($scope.durationYear,$scope.monthlyRent,$scope.annualIncrease);
    console.log(totalLossFromRent);

    $scope.discountRate = 0.75;
    $scope.totalHousePrice = 650000;
    $scope.familyInvested = 300000;
    $scope.annualHouseAppreciateRate = 8.8;
    $scope.HoaFee = 100;
    $scope.HoaAnnualIncrease = 8;
    $scope.principle = $scope.totalHousePrice - $scope.familyInvested;
    $scope.years = 30;
    $scope.months = $scope.years*12;
    $scope.interestRate = 4.35;
    $scope.propertyTaxRate = 1.25
    $scope.startDate = new Date();

    $scope.calculate = function(){
        $scope.principle = $scope.totalHousePrice - $scope.familyInvested;
        var amortizationSchedule = finance.calculateAmortization($scope.principle, $scope.months, $scope.interestRate, $scope.startDate );
        //console.log(amortizationSchedule);
        $scope.aggrInterest = 0;
        $scope.aggrTax = 0;
        $scope.aggrHOA = 0;
        $scope.durationMonths = ($scope.durationYear*12)
        $scope.monthlyBill = Number($scope.HoaFee) + Number(amortizationSchedule[0].payment) + (($scope.totalHousePrice*$scope.propertyTaxRate/100)/12) ;
        console.log("monthly");
        console.log($scope.monthlyBill);
        for(var i=0;i<$scope.durationMonths;i++){
            $scope.aggrInterest += amortizationSchedule[i].paymentToInterest;
        }
        console.log($scope.aggrInterest);
        $scope.aggrTax = ($scope.totalHousePrice*$scope.propertyTaxRate/100)*$scope.durationYear;
        console.log( $scope.aggrTax);
        $scope.aggrHOA = getAccruedMonthlyExpense($scope.durationYear,$scope.HoaFee,$scope.HoaAnnualIncrease);
        console.log( $scope.aggrHOA);
        $scope.totalInterestNTax = ($scope.aggrTax + $scope.aggrInterest)*$scope.discountRate;
        console.log( $scope.totalInterestNTax);
        $scope.finalHouseSoldPrice = $scope.totalHousePrice*(1+ ($scope.annualHouseAppreciateRate*$scope.durationYear)/100);
        console.log("finel house price");
        console.log($scope.finalHouseSoldPrice);
        $scope.sellingCommission = $scope.finalHouseSoldPrice*0.06;
        console.log( $scope.sellingCommission);
        $scope.totalExpense = $scope.totalInterestNTax + $scope.aggrHOA + $scope.sellingCommission;
        console.log( $scope.totalExpense);
        $scope.profit = $scope.finalHouseSoldPrice - $scope.totalHousePrice;
        console.log("profit");
        console.log( $scope.profit);
        $scope.netOutcome = $scope.profit - $scope.totalExpense;
        if($scope.netOutcome > 0){
            $scope.gain = true;
        } else {
            $scope.gain = false;
        }
        
        $scope.totalLossFromRent = getAccruedMonthlyExpense($scope.durationYear,$scope.monthlyRent,$scope.annualIncrease);
        
    };
    
}