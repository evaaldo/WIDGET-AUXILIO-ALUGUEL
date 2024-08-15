var MyWidget = SuperWidget.extend({
    //variáveis da widget
    variavelNumerica: null,
    variavelCaracter: null,

    //método iniciado quando a widget é carregada
    init: function() {
        this.myTable = FLUIGC.datatable('#target', {
            dataRequest: DatasetFactory.getDataset('DSControleAuxilioAluguel', null, null, null).values.map(function (el) {
                return {
                    NUMERO_SOLICITACAO: el.NUMERO_SOLICITACAO,
                    CPF: el.CPF,
                    NOME_COLABORADOR: el.NOME_COLABORADOR,
                    VALORBENEFICIO: el.VALORBENEFICIO,
                    MES_AVISO: el.MES_AVISO,
                    DATA_EMPRESTIMO: el.DATA_EMPRESTIMO
                };
            }),
            renderContent: ['NUMERO_SOLICITACAO', 'CPF', 'NOME_COLABORADOR', 'VALORBENEFICIO', 'MES_AVISO', 'DATA_EMPRESTIMO'],
            header: [
                { 'title': 'NUMERO_SOLICITACAO' },
                { 'title': 'CPF' },
                { 'title': 'NOME_COLABORADOR' },
                { 'title': 'VALORBENEFICIO' },
                { 'title': 'MES_AVISO' },
                { 'title': 'DATA_EMPRESTIMO' }
            ],
            search: {
                enabled: false
            },
            navButtons: {
                enabled: false,
                forwardstyle: 'btn-warning',
                backwardstyle: 'btn-warning'
            },
            scroll: {
                enabled: true,
            },
            tableStyle: 'table-hover table-bordered table-striped',
        
        }, function (err, data) {
            if (data) {
                dataInit = data;
            }
            else if (err) {
                FLUIGC.toast({
                    message: err,
                    type: 'danger'
                });
            }
        });
    },
  
    //BIND de eventos
    bindings: {
        local: {
            'execute': ['click_executeAction']
        },
        global: {}
    },
 
    executeAction: function(htmlElement, event) {
    }

});

