// Billable Hours = 50%
//  700: 50% | 800: 75% | 900: 100%
// Delivery Success = 20% |
//  M: 50% | M+: 75% | E: 100%
// Internal Contributions = 30% |
//  3: 50% | 2: 75% | 1: 100%

var titleInput = 0,
    salaryInput = 0,
    hoursInput = 0,
    successInput = 0,
    contributionsInput = 0,
    totalPotential = 0,
    billablePotential = 0,
    deliveryPotential = 0,
    contributionsPotential = 0,
    billableFactors = 0,
    deliveryFactors = 0,
    contributionsFactors = 0;

var getFormValues = function(form){
    titleInput = form.elements['select-employee-title'].value;
    salaryInput = form.elements['input-period-salary'].value;
    hoursInput = form.elements['input-billable-hours'].value;
    successInput = form.elements['select-delivery-success'].value;
    contributionsInput = form.elements['select-internal-contributions'].value;
}

var updateTable = function(){
    totalPotential = salaryInput * titleInput;
    
    // calculate billable hours variables
    billablePotential = totalPotential * 0.5;
    if (hoursInput > 900)
        billableFactors = 100;
    else if (hoursInput >= 700 && hoursInput <= 900)
        billableFactors = (hoursInput - 500) / 4
    else
        billableFactors = 0
    
    // update billable hours row
    $('.billable-potential').html(formatDollar(billablePotential));
    $('.billable-factors').html(billableFactors + '%');
    $('.billable-actual').html(formatDollar(billablePotential * (billableFactors / 100)));
    
    // calculate delivery success variables
    deliveryPotential = totalPotential * 0.2;
    deliveryFactors = successInput * 100
    
    // update delivery success row
    $('.delivery-potential').html(formatDollar(deliveryPotential));
    $('.delivery-factors').html(deliveryFactors + '%');
    $('.delivery-actual').html(formatDollar(deliveryPotential * (deliveryFactors / 100)));
    
    // calculate internal contributions variables
    contributionsPotential = totalPotential * 0.3;
    contributionsFactors = contributionsInput * 100
    
    // update internal contributions row
    $('.contributions-potential').html(formatDollar(contributionsPotential));
    $('.contributions-factors').html(contributionsFactors + '%');
    $('.contributions-actual').html(formatDollar(contributionsPotential * (contributionsFactors / 100)));
    
    // update totals row
    $('.total-potential').html(formatDollar(totalPotential));
    $('.total-actual').html(formatDollar(
        (billablePotential * (billableFactors / 100))
      + (deliveryPotential * (deliveryFactors / 100))
      + (contributionsPotential * (contributionsFactors / 100))
    ));
}

var formatDollar= function(num) {
    var p = num.toFixed(2).split(".");
    return "$" + p[0].split("").reverse().reduce(function(acc, num, i, orig) {
        return  num + (i && !(i % 3) ? "," : "") + acc;
    }, "") + "." + p[1];
}

$(document).ready(function(){
    
    // capture bonus input form submit
    $('#bonus-input-form').on('submit', function(e){
        e.preventDefault();
        getFormValues(this);
        updateTable();
    });
});