let invoice = {
    invoiceTo:"Juan Dela Cruz", 
    date:"2023-04-15", 
    address1: "810 Oroquieta Street Sta Cruz 1000", 
    address2:"Manila, Metro Manila, Philippines", 
    invoiceNumber:"6845",
    paymentMode:"COD"};

    document.getElementById('invoiceTo').innerHTML = 'Name: '+ invoice.invoiceTo;
    document.getElementById('address').innerHTML = 'Address: '+ invoice.address1.concat(' ',invoice.address2);
    document.getElementById('date').innerHTML = 'Date: '+ invoice.date.split('-', 3).reverse(invoice.date).join('/');
    document.getElementById('invoiceNumber').innerHTML = 'Number: '+ invoice.invoiceNumber.padStart(10, 0);
    document.getElementById('paymentMode').innerHTML = 'Payment: '+ invoice.paymentMode;

    let invoiceItems = [
                {description: "Mouse", Qty: 3, unitPrice: 200}, 
                {description: "Keyboard", Qty: 3, unitPrice: 400},
                {description: "Monitor", Qty: 6, unitPrice: 5400},
                {description: "CPU Tower Case", Qty: 3, unitPrice: 1200},
                {description: "Headset", Qty: 3, unitPrice: 500},
                {description: "UPS", Qty: 1, unitPrice: 4000}];

    let valueInside = ["description", "Qty", "unitPrice"];
    let unitPriceOfEachl = 0;
    let total = 0;

    invoiceItems.forEach((item) => {
        valueInside.forEach((itemValue) => {
            unitPriceOfEach = item.unitPrice;
            document.getElementById(itemValue).innerHTML += item[itemValue] + '</br>';
        });
        total += unitPriceOfEach;
    });
    document.getElementById('unitPrice').innerHTML += total;
    