exportTable = {

    tableToCSV: function() {
    
        // Variável para armazenar os dados csv finais
        var csv_data = [];
       
        // Obtém os dados de cada linha
        var rows = document.getElementsByTagName('tr');
        for (var i = 0; i < rows.length; i++) {
       
            // Obtém os dados de cada coluna
            var cols = rows[i].querySelectorAll('td,th');
       
            // Armazena cada dado de linha csv
            var csvrow = [];
            for (var j = 0; j < cols.length; j++) {
       
                // Obtém os dados de texto de cada célula
                // de uma linha e envia para csvrow
                csvrow.push(cols[j].innerHTML);
            }
       
            // Combina cada valor de coluna com vírgula
            csv_data.push(csvrow.join(";"));
        }
       
        // Combina os dados de cada linha com o novo caractere de linha
        csv_data = csv_data.join('\n');
       
        // Chama esta função para baixar o arquivo csv
        downloadCSVFile(csv_data);
       
    },
       
    downloadCSVFile: function(csv_data) {
       
        // Cria objeto de arquivo CSV e feed
        // nosso csv_data nele
        CSVFile = new Blob([csv_data], {
            type: "text/csv"
        });
       
        // Cria um link temporário para iniciar
        // processo de download
        var temp_link = document.createElement('a');
       
        //Baixa o arquivo csv
        temp_link.download = "produtos.csv";
        var url = window.URL.createObjectURL(CSVFile);
        temp_link.href = url;
       
        // Este link não deve ser exibido
        temp_link.style.display = "none";
        document.body.appendChild(temp_link);
       
        //Clique automaticamente no link para
        // aciona o download
        temp_link.click();
        document.body.removeChild(temp_link);
        
    }

}
