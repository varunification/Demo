

    document.getElementById('btnExportPDF').addEventListener('click', function() {
        var doc = new jsPDF('portrait');
        const tableElement = document.getElementById('mytable1');
        const tableElement2 = document.getElementById('mytable3');
        const tableElement3 = document.getElementById('mytable4');
        const tableElement4 = document.getElementById('mytable5');
        var img = new Image();
        img.src = 'images/big_image.jpg'
        var img2 = new Image();
        img2.src = 'images/small_image.PNG'
        // Generate the PDF with the table
        doc.autoTable({
            html: tableElement,
            startY: 20, // Y position of the table
            margin: { top: 20 }, // Margin from the top of the page
            theme: 'grid', // Optional table style
            headStyles: { fillColor: [200, 200, 200] }, // Optional table header style
            tableWidth: '50'
        });
        doc.autoTable({
            html: tableElement2,
            startY: 40, // Y position of the table
            margin: { top: 20 }, // Margin from the top of the page
            theme: 'grid', // Optional table style
            headStyles: { fillColor: [200, 200, 200] }, // Optional table header style
            tableWidth: '50'
        });


        doc.addImage(img, 'JPEG', 30, 60, 150, 75); // (imageData, format, x, y, width, height)
        doc.addImage(img2, 'PNG', 150,140, 50, 20); // (imageData, format, x, y, width, height)

        doc.autoTable({
            html: tableElement3,
            startY: 170, // Y position of the table
            margin: { top: 5 }, // Margin from the top of the page
            theme: 'grid', // Optional table style
            headStyles: { fillColor: [200, 200, 200] }, // Optional table header style
            tableWidth: '50'
        });

        doc.autoTable({
            html: tableElement4,
            startY: 210, // Y position of the table
            margin: { top: 5 }, // Margin from the top of the page
            theme: 'grid', // Optional table style
            headStyles: { fillColor: [200, 200, 200] }, // Optional table header style
            tableWidth: '50'
        });
            // Save the PDF with a specific name
            doc.save('exported_page.pdf');
    });


