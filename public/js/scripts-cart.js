var quantityInputs = document.getElementsByClassName("quantity");

for (var i = 0; i < quantityInputs.length; i++) {
  const quantity = quantityInputs[i];

  quantity.addEventListener("keypress", updatePrice);
  quantity.addEventListener("change", updatePrice);
}

function updatePrice() {
  let prices = 0;
  for (var i = 0; i < quantityInputs.length; i++) {
    const quantity = quantityInputs[i];

    if (quantity && quantity.value !== "") {
      prices += Number(quantity.value);
    }
  }
}
