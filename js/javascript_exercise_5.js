let invoice = {
    invoiceTo:"Juan Dela Cruz", 
    date:"2023-04-15", 
    address1: "810 Oroquieta Street Sta Cruz 1000", 
    address2:"Manila, Metro Manila, Philippines", 
    invoiceNumber:"6845",
    paymentMode:"COD"};

    document.getElementById('invoice_to').innerHTML = 'Name: '+ invoice.invoiceTo;
    document.getElementById('invoice_address').innerHTML = 'Address: '+ invoice.address1.concat(' ',invoice.address2);
    document.getElementById('invoice_date').innerHTML = 'Date: '+ invoice.date.split('-', 3).reverse(invoice.date).join('/');
    document.getElementById('invoice_num').innerHTML = 'Number: '+ invoice.invoiceNumber.padStart(10, 0);
    document.getElementById('invoice_payment_mode').innerHTML = 'Payment: '+ invoice.paymentMode;

                let invoiceItems = [{description: "Mouse", Qty: 3, unitPrice: 200}, 
                    {description: "Keyboard", Qty: 3, unitPrice: 400},
                    {description: "Monitor", Qty: 6, unitPrice: 5400},
                    {description: "CPU Tower Case", Qty: 3, unitPrice: 1200},
                    {description: "Headset", Qty: 3, unitPrice: 500},
                    {description: "UPS", Qty: 1, unitPrice: 4000},];
                
                    let totalPrice = 0;
                    invoiceItems.forEach((item)=>{

                        let amount = item.Qty * item.unitPrice;
                        totalPrice += amount; 
                        let newRow = `<tr>`;
                            newRow += `<td>${item.description}</td>`;
                            newRow += `<td>${item.Qty}</td>`;
                            newRow += `<td>${item.unitPrice}</td>`;
                            newRow += `<td>${amount}</td>`;
                            newRow += `</tr>`;
                        
                        document.getElementById("invoice_items").innerHTML += newRow;
                        
                    });

                            newRow = `<tr>`;
                            newRow += `<td>${'Total'}</td>`;
                            newRow += `<td></td>`;
                            newRow += `<td></td>`;
                            newRow += `<td>${totalPrice}</td>`
                            newRow += `</tr>`;
                            document.getElementById("invoice_items").innerHTML += newRow;
    