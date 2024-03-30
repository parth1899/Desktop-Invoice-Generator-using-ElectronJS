$(document).ready(async () => { //it waits for html to load
    var total_price = 0;
    $('#save_customer').click(async () => {
        var company_name = $('#customer_company_name').val();
        var address = $('#customer_address').val();
        var phone = $('#customer_phone').val();
        var gstin = $('#customer_gstin').val();
        var pan = $('#customer_pan').val();
        var cin = $('#customer_cin').val();
        var poNo = $('#customer_poNo').val();
        total_price = parseInt($('#total_price').val());
        await window.electron.send('createCustomer', { company_name: company_name, address: address, phone: phone, gstin: gstin, pan: pan, cin: cin, poNo: poNo, total_price: total_price });
    });

    try {
        const data = await window.electron.invoke('fetchData');
        await data.forEach(customerData => {
            const $clientBox = $('<div>').addClass('box');
            const $companyname = $('<h2>').addClass("company_name").text(customerData.company_name);
            $companyname.appendTo($clientBox);
            const $clientDetailsHeader = $('<h3>').addClass('show-details').text('Client Details');
            $clientBox.append($clientDetailsHeader);

            const $milestoneDetails = $('<div>').addClass('milestone-details');

            $('<p>').html(`<strong>Address:</strong> <span id="client_address">${customerData.address}</span>`).appendTo($milestoneDetails);
            $('<p>').html(`<strong>GSTIN:</strong> <span id="client_gstin">${customerData.gstin}</span>`).appendTo($milestoneDetails);
            $('<p>').html(`<strong>PAN:</strong> <span id="client_pan">${customerData.pan}</span>`).appendTo($milestoneDetails);
            $('<p>').html(`<strong>Corporate Identification Number (CIN):</strong> <span id="client_cin">${customerData.cin}</span>`).appendTo($milestoneDetails);
            $('<p>').html(`<strong>Purchase Order Number (PAN):</strong> <span id="client_poNo">${customerData.pono}</span>`).appendTo($milestoneDetails);
            $('<p>').html(`<strong>Total Price (Without GST):</strong> <span id="total_price">${customerData.total_price}</span>`).appendTo($milestoneDetails);

            $clientBox.append($milestoneDetails);
            $('#clientDataContainer').append($clientBox);

            $clientDetailsHeader.on('click', function () {
                $milestoneDetails.toggle();
            });
        });
    } catch (error) {
        console.log(error);
    }

    try {
        $('#milestone_table').hide();
        $('#customer_form').show();

        $('#save_customer').click(async (e) => {
            e.preventDefault();
            $('#milestone_table').show();
            $('#customer_form').hide();
        });
        $('#back_btn').click(async (e) => {
            e.preventDefault();
            $('#milestone_table').hide();
            $('#customer_form').show();
        });


        const tax = $('#taxes_select').val();
        const tax_options = $('#tax_type_select').val();
        if (tax === true) {
            $('#tax_type').show();
        }

        $('#taxes_select').change(function () {
            const tax = $(this).val();
            if (tax === "True") {
                $('#tax_type').show();
            } else {
                $('#tax_type').hide();
            }
        });
        $('#tax_type_select').change(function () {
            const tax_options = $(this).val();
        })
        console.log(tax_type)
        const table = $("#dataTable");


        let rowDataArray = [];

        // Function to check if claim percentage exceeds 100%
        function calculateTotalClaimPercentage() {
            let totalClaimPercentage = 0;
            rowDataArray.forEach(function (rowData) {
                totalClaimPercentage += rowData.claimPercentage;
                console.log(totalClaimPercentage)
            });
            return totalClaimPercentage;
        }

        // Function to toggle addRowBtn based on total claim percentage
        function toggleAddRowButton() {
            const totalClaimPercentage = calculateTotalClaimPercentage();
            if (totalClaimPercentage === 100) {
                $("#addRowBtn").prop("disabled", true);
            } else {
                $("#addRowBtn").prop("disabled", false);
            }
        }

        // Event listener for Save button click
        $("#dataTable").on("click", ".saveBtn", function () {
            const row = $(this).closest("tr"); // Get the closest row to the clicked button

            // Get milestone name, claim percentage, and amount from the row
            const milestone = row.find(".milestoneCell").text();
            const claimPercentage = parseFloat(row.find(".claimPercentageCell").text());
            const amount = parseFloat(row.find(".amountCell").text());

            // Create an object representing row data
            const rowData = {
                milestone: milestone,
                claimPercentage: claimPercentage,
                amount: amount.toFixed(2)
            };

            // Push the row data object into the array
            rowDataArray.push(rowData);
            toggleAddRowButton();
            console.log(rowDataArray)
        });

        $("#addRowBtn").click(function () {
            // Create a new row
            const newRow = $("<tr>");

            // Add cells to the new row
            const milestoneCell = $("<td>").addClass("milestoneCell").text("Milestone Name");
            const claimPercentageCell = $("<td>").addClass("claimPercentageCell").text("Claim Percentage");
            const amountCell = $("<td>").addClass("amountCell").text("Amount").prop("disabled", true); // Initially disabled
            const saveBtn = $("<button>").addClass("saveBtn").text("Save");

            // Make cells mutable
            milestoneCell.attr("contenteditable", true);
            claimPercentageCell.attr("contenteditable", true);

            // Event listener for claimPercentageCell changes
            claimPercentageCell.on("input", function () {
                const claimPercentage = parseFloat($(this).text());
                if (!isNaN(claimPercentage)) { // If claim percentage is a valid number
                    const amount = claimPercentage * total_price / 100;
                    amountCell.text(amount.toFixed(2)).prop("disabled", false); // Enable and display amount// Check claim percentage and toggle addRowBtn
                } else {
                    amountCell.text("Amount").prop("disabled", true); // Disable amount if claim percentage is not valid
                }
            });

            newRow.append(milestoneCell, claimPercentageCell, amountCell, $("<td>").append(saveBtn));

            // Append the new row to the table
            $("#dataTable tbody").append(newRow);

            // Check claim percentage and toggle addRowBtn
        });

    } catch (error) {

    }
});