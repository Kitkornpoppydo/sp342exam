function priceCalculate() {
  let ticknum = (document.getElementById("ticknum").value).trim();
  let num = document.getElementById("event");
  let eventId = parseInt(num.options[ticknum.selectedIndex].value);
  
  let total = ticknum+num;
  return 0;
}


