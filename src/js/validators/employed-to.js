// Generated by LiveScript 1.5.0
(function(){
  var moment, ref$, invalid, valid, validateEmploymentTo;
  moment = require('moment');
  ref$ = require('./resolutions'), invalid = ref$.invalid, valid = ref$.valid;
  validateEmploymentTo = function(input, arg$){
    var now, employmentToMonth, nextYear, year, employmentTo;
    now = arg$.now, employmentToMonth = arg$.employmentToMonth;
    nextYear = now.year() + 1;
    if (!/^(\d+)$/.test(input)) {
      return invalid("Ange när din projektanställning slutar, endast siffror (tex:  " + nextYear + ")");
    }
    year = parseInt(input, 10);
    if (year < 1000) {
      return invalid("Ange året med fyra siffror (tex: " + nextYear + ").");
    }
    if (!employmentToMonth) {
      return invalid('Månad måste anges');
    }
    employmentTo = moment({
      year: year,
      month: employmentToMonth
    });
    if (employmentTo.isBefore(now)) {
      return invalid('Slutdatumet måste vara ett framtida datum');
    }
    return valid();
  };
  module.exports = validateEmploymentTo;
}).call(this);
