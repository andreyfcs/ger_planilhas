 const xl = require("excel4node");
 const wb = new xl.Workbook();
 const ws = wb.addWorksheet("nome da planilha");

 const data = [
    {
        "name": "test",
        "email": "teste@gmail.com",
        "cellphone": "12456789"
    },
    {
        "name": "Pessoa",
        "email": "pessoa@gmail.com",
        "cellphone": "1235456789"
    }    
    ];

    const titulos = [
        "Nome",
        "E-mail",
        "Celular"
    ];

    let = titulosindex = 1;
    titulos.forEach(heading => {
        ws.cell(1, titulosindex++).string(heading);
    });

    let rowIndex = 2;
    data.forEach(record => {
        let columnIndex = 1;
        Object.keys(record).forEach(columnName =>
        {
            ws.cell(rowIndex, columnIndex++).string(record[columnName])
        });
        rowIndex++;
    });

    wb.write("arquivo.xlsx");