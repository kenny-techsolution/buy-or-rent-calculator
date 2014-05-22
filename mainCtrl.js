function MainCtrl($scope) {
    var getAccruedMonthlyExpense = function (duration, monthlyCost, annualIncrease) {
        var currentAnnualCost = Math.floor(monthlyCost*12);
        var totalCost = 0;
        for(var i=0;i<duration;i++){
            totalCost += currentAnnualCost;
            currentAnnualCost = (currentAnnualCost*(100+Number(annualIncrease)))/100;
            currentAnnualCost = Math.floor(currentAnnualCost);
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

        $scope.aggrInterest = 0;
        $scope.aggrTax = 0;
        $scope.aggrHOA = 0;
        $scope.durationMonths = ($scope.durationYear*12)
        $scope.monthlyBill = Number($scope.HoaFee) + Number(amortizationSchedule[0].payment) + (($scope.totalHousePrice*$scope.propertyTaxRate/100)/12) ;

        for(var i=0;i<$scope.durationMonths;i++){
            $scope.aggrInterest += amortizationSchedule[i].paymentToInterest;
        }

        $scope.aggrTax = ($scope.totalHousePrice*$scope.propertyTaxRate/100)*$scope.durationYear;

        $scope.aggrHOA = getAccruedMonthlyExpense($scope.durationYear,$scope.HoaFee,$scope.HoaAnnualIncrease);

        $scope.totalInterestNTax = ($scope.aggrTax + $scope.aggrInterest)*$scope.discountRate;

        $scope.finalHouseSoldPrice = $scope.totalHousePrice*(1+ ($scope.annualHouseAppreciateRate*$scope.durationYear)/100);

        $scope.sellingCommission = $scope.finalHouseSoldPrice*0.06;

        $scope.totalExpense = $scope.totalInterestNTax + $scope.aggrHOA + $scope.sellingCommission;

        $scope.profit = $scope.finalHouseSoldPrice - $scope.totalHousePrice;

        $scope.netOutcome = $scope.profit - $scope.totalExpense;
        if($scope.netOutcome > 0){
            $scope.gain = true;
        } else {
            $scope.gain = false;
        }
        
        $scope.totalLossFromRent = getAccruedMonthlyExpense($scope.durationYear,$scope.monthlyRent,$scope.annualIncrease);
        
    };
    
}