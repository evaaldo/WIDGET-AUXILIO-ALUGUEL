<div id="MyWidget_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide" data-params="MyWidget.instance()">    
    <div class="header">
        <h1>Controle - Auxílio Aluguel</h1>
        <div>
            <button class="btn-export">Excel</button>
            <button class="btn-export">CSV</button>
            <button class="btn-export pdf">
                <i class="fa-solid fa-file-pdf"></i>
                Exportar PDF
            </button>
        </div>
    </div>
    <hr>
    <div class="card-grouper">
        <div class="ecard col-sm-4">
            <i class="fa-solid fa-file-contract"></i>
            <p>Total de Contratos</p>
            <div>
                <h1>1245</h1>
                <span class="label label-success">Fluig</span>
            </div>
        </div>
        <div class="ecard col-sm-4">
            <i class="fa-solid fa-clock"></i>
            <p>Contratos Pendentes</p>
            <div>
                <h1>125</h1>
                <span class="label label-success label-ecard">Fluig</span>
            </div>
        </div>
        <div class="ecard col-sm-4">
            <i class="fa-solid fa-circle-plus"></i>
            <p>
                Novos contratos 
                <span class="label label-info">
                    Agosto
                </span>
            </p>
            <div>
                <h1>8</h1>
                <span class="label label-success">Fluig</span>
            </div>
        </div>
    </div>
    <div class="table">
        <div class="table_header">
            <div class="table_header_infos">
                <div>
                    <h3>Tabela de contratos</h3>
                    <span class="label label-info">1245</span>
                </div>
                <p>Aqui você pode visualizar um relatório geral dos contratos.</p>
            </div>
            <div class="table_header_actions">
                <button>Relatório</button>
            </div>
        </div>
        <div class="table-filter">
            <div>
                <input type="text"/>
                <select></select>
                <select></select>
            </div>
            <button>Limpar tudo</button>
        </div>
        <tbody>
            <div id="target">
            </div>
        </tbody>
    </div>
    <#--  Scripts auxiliares  -->
    <script src="https://kit.fontawesome.com/88cbac72fc.js" crossorigin="anonymous"></script>
    <script src="/webdesk/vcXMLRPC.js" type="text/javascript"></script>
</div>

