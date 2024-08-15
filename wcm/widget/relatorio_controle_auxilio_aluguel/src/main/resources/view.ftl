<div id="MyWidget_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide controle-auxilio-aluguel" data-params="MyWidget.instance()">    
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
    <div class="card-grouper">
        <div class="ecard col-sm-4">
            <i class="fa-solid fa-file-contract"></i>
            <p>Total de Contratos</p>
            <div>
                <h1>1245</h1>
            </div>
        </div>
        <div class="ecard col-sm-4">
            <i class="fa-solid fa-clock"></i>
            <p>Contratos Pendentes</p>
            <div>
                <h1>125</h1>
            </div>
        </div>
        <div class="ecard col-sm-4">
            <i class="fa-solid fa-circle-plus"></i>
            <p>
                Novos contratos
            </p>
            <div>
                <h1>8</h1>
            </div>
        </div>
    </div>
    <div class="table">
        <div class="table_header">
            <div class="table_header_infos">
                <div>
                    <h3>Tabela de contratos</h3>
                </div>
                <p>Aqui você pode visualizar um relatório geral dos contratos.</p>
            </div>
            <div class="table_header_actions">
                <button class="button-generate">Relatório</button>
            </div>
        </div>
        <div class="table_filter">
            <div>
                <input type="text" placeholder="Busque um colaborador"/>
                <select>
                    <option>Situação</option>
                    <option>Pendentes</option>
                    <option>Aprovados</option>
                </select>
                <select>
                    <option>Mês</option>
                    <option>Janeiro</option>
                    <option>Fevereiro</option>
                    <option>Março</option>
                    <option>Abril</option>
                    <option>Maio</option>
                    <option>Junho</option>
                    <option>Julho</option>
                    <option>Agosto</option>
                    <option>Setembro</option>
                    <option>Outubro</option>
                    <option>Novembro</option>
                    <option>Dezembro</option>
                </select>
            </div>
            <button>Limpar tudo</button>
        </div>
        <div class="table_filter_date">
            <input type="date"/>
            <input type="date"/>
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

