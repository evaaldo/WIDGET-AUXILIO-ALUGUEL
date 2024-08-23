var MyWidget = SuperWidget.extend({
    variavelNumerica: null,
    variavelCaracter: null,

    init: async function() {
        await this.loadData();
    },

    bindings: {
        local: {
            'csv': ['click_exportCSV'],
            'excel': ['click_exportExcel'],
            'clear': ['click_clearFilters'],
            'report': ['click_generateReport']
        },
        global: {}
    },

    loadData: async function() {
        const dados = await this.fetchDataset('DSControleAuxilioAluguel', null);
        this.myTable = FLUIGC.datatable('#target', {
            dataRequest: dados.values.map(function (el) {
                return {
                    NUMERO_SOLICITACAO: `<a href="https://fluigqa.santaclara.com.br/portal/p/1/pageworkflowview?app_ecm_workflowview_detailsProcessInstanceID=${el.NUMERO_SOLICITACAO}">${el.NUMERO_SOLICITACAO}</a>`,
                    CPF: el.CPF,
                    NOME_COLABORADOR: el.NOME_COLABORADOR,
                    VALORTABELA: "R$ " + el.VALORTABELA,
                    DATATABELA: el.DATATABELA,
                    STATUS_RECIBO: el.STATUS_RECIBO
                };
            }),
            renderContent: ['NUMERO_SOLICITACAO', 'CPF', 'NOME_COLABORADOR', 'VALORTABELA', 'DATATABELA', 'STATUS_RECIBO'],
            header: [
                { 'title': 'Número da Solicitação' },
                { 'title': 'CPF' },
                { 'title': 'Nome do Colaborador' },
                { 'title': 'Valor' },
                { 'title': 'Data de Pagamento' },
                { 'title': 'Situação' }
            ],
            search: { enabled: false },
            navButtons: { enabled: false },
            scroll: { enabled: true },
        }, this.initDataTableStyles);
        
        const dadosCards = await this.fetchDataset('DSControleAuxilioAluguelCards', null);
        this.updateCardCounts(dadosCards);
    },

    fetchDataset: function(datasetName, constraints) {
        return new Promise((resolve, reject) => {
            const data = DatasetFactory.getDataset(datasetName, null, constraints, null);
            if (data) {
                resolve(data);
            } else {
                reject("Erro ao obter dados do dataset.");
            }
        });
    },

    initDataTableStyles: function(err, data) {
        if (data) {
            dataInit = data;
            var camposSituacao = document.querySelectorAll("td");
            var camposCabecalho = document.querySelectorAll("th");

            camposSituacao.forEach(function(campo) {
                var textoCampo = campo.textContent.trim();
                if (textoCampo == "Pendente") {
                    campo.classList.add("pendente");
                } else if (textoCampo == "Regular") {
                    campo.classList.add("regular");
                }
            });

            camposCabecalho.forEach(function(campo) {
                var textoCampo = campo.textContent.trim();
                if (textoCampo == "Situação") {
                    campo.classList.add("situacao");
                }
            });
        } else if (err) {
            FLUIGC.toast({ message: err, type: 'danger' });
        }
    },

    updateCardCounts: function(dadosCards) {
        document.getElementById("quantidadeTotal").innerHTML = dadosCards.values[0].TOTAL_LINHAS || "0";
        document.getElementById("quantidadeRegular").innerHTML = dadosCards.values[0].TOTAL_REGULAR || "0";
        document.getElementById("quantidadePendente").innerHTML = dadosCards.values[0].TOTAL_PENDENTE || "0";
    },

    generateReport: async function() {
        var mes = document.getElementById("filtrarMes").value;
        var ano = document.getElementById("filtrarAno").value;
        var nomeColaborador = document.getElementById("filtrarColaborador").value;
        var numeroSolicitacao = document.getElementById("filtrarNumFluig").value;
        var situacao = document.getElementById("filtrarSituacao").value;

        var constraintsSQL = [
            DatasetFactory.createConstraint("mes", mes, "", ConstraintType.MUST),
            DatasetFactory.createConstraint("ano", ano, "", ConstraintType.MUST),
            DatasetFactory.createConstraint("nomeColaborador", nomeColaborador, "", ConstraintType.MUST),
            DatasetFactory.createConstraint("numeroSolicitacao", numeroSolicitacao, "", ConstraintType.MUST),
            DatasetFactory.createConstraint("situacao", situacao, "", ConstraintType.MUST)
        ];

        const dados = await this.fetchDataset('DSControleAuxilioAluguel', constraintsSQL);
        this.myTable = FLUIGC.datatable('#target', {
            dataRequest: dados.values.map(function (el) {
                return {
                    NUMERO_SOLICITACAO: `<a href="https://fluigqa.santaclara.com.br/portal/p/1/pageworkflowview?app_ecm_workflowview_detailsProcessInstanceID=${el.NUMERO_SOLICITACAO}">${el.NUMERO_SOLICITACAO}</a>`,
                    CPF: el.CPF,
                    NOME_COLABORADOR: el.NOME_COLABORADOR,
                    VALORTABELA: "R$ " + el.VALORTABELA,
                    DATATABELA: el.DATATABELA,
                    STATUS_RECIBO: el.STATUS_RECIBO
                };
            }),
            renderContent: ['NUMERO_SOLICITACAO', 'CPF', 'NOME_COLABORADOR', 'VALORTABELA', 'DATATABELA', 'STATUS_RECIBO'],
            header: [
                { 'title': 'Número da Solicitação' },
                { 'title': 'CPF' },
                { 'title': 'Nome do Colaborador' },
                { 'title': 'Valor' },
                { 'title': 'Data de Pagamento' },
                { 'title': 'Situação' }
            ],
            search: { enabled: false },
            navButtons: { enabled: false },
            scroll: { enabled: true },
        }, this.initDataTableStyles);

        var dadosCards = await this.fetchDataset('DSControleAuxilioAluguelCards', constraintsSQL);
        this.updateCardCounts(dadosCards);
    },

    exportCSV: function() {
        tableToCSV();
        Swal.fire({
            icon: "success",
            title: "Exportação CSV",
            text: "Exportação CSV realizada com sucesso!",
        });
    },

    exportExcel: function() {
        tableToExcel();
        Swal.fire({
            icon: "success",
            title: "Exportação Excel",
            text: "Exportação excel realizada com sucesso!",
        });
    },

    clearFilters: function() {
        $("#filtrarNumFluig").val("");
        $("#filtrarColaborador").val("");
        $("#filtrarSituacao").val("");
        $("#filtrarMes").val("");
        $("#filtrarAno").val("");
    }
});

// ************ FUNÇÕES AUXILIARES ************

function tableToCSV() {
    var csv_data = [];
    var rows = document.getElementsByTagName('tr');

    for (var i = 0; i < rows.length; i++) {
        var cols = rows[i].querySelectorAll('td,th');
        var csvrow = [];

        for (var j = 0; j < cols.length; j++) {
            if (j === 0) {
                csvrow.push(cols[j].innerText);
            } else {
                csvrow.push(cols[j].innerHTML);
            }
        }
        csv_data.push(csvrow.join(";"));
    }

    csv_data = csv_data.join('\n');
    downloadCSVFile(csv_data);
}

function downloadCSVFile(csv_data) {
    var today = new Date().toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
    var CSVFile = new Blob([csv_data], { type: "text/csv" });
    var temp_link = document.createElement('a');
    temp_link.download = today + "_RELATORIO_CONTRATOS.csv";
    var url = window.URL.createObjectURL(CSVFile);
    temp_link.href = url;
    temp_link.style.display = "none";
    document.body.appendChild(temp_link);
    temp_link.click();
    document.body.removeChild(temp_link);
}

function tableToExcel() {
    var today = new Date().toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    var table = document.querySelector('table');
    var rows = table.getElementsByTagName('tr');
    var excelData = [];

    for (var i = 0; i < rows.length; i++) {
        var cols = rows[i].querySelectorAll('td,th');
        var excelRow = [];

        for (var j = 0; j < cols.length; j++) {
            if (j === 0) {
                excelRow.push(cols[j].innerText);
            } else {
                excelRow.push(cols[j].innerText);
            }
        }
        excelData.push(excelRow.join("\t"));
    }

    var excelContent = excelData.join("\n");

    var blob = new Blob([excelContent], { type: "application/vnd.ms-excel" });
    var link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = today + "_RELATORIO_CONTRATOS.xls";
    link.click();
}
