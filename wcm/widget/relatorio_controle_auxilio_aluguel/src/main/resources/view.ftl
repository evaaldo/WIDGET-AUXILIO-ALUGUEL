<div id="MyWidget_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide controle-auxilio-aluguel" data-params="MyWidget.instance()">    
    <div class="header">
        <h1>Controle - Auxílio Aluguel</h1>
        <div>
            <button class="btn-export" data-csv>
                <i class="fa-solid fa-file-csv"></i>
                CSV
            </button>
            <button class="btn-export" data-excel>
                <i class="fa-regular fa-file-excel"></i>
                Excel
            </button>
        </div>
    </div>
    <div class="card-grouper">
        <div class="ecard col-sm-4">
            <i class="fa-solid fa-file-contract"></i>
            <p>Total de Contratos</p>
            <div>
                <h1 id="quantidadeTotal"></h1>
            </div>
        </div>
        <div class="ecard ecard-pendent col-sm-4">
            <i class="fa-solid fa-clock icon-pendent"></i>
            <p>Contratos Pendentes</p>
            <div>
                <h1 id="quantidadePendente"></h1>
            </div>
        </div>
        <div class="ecard ecard-done col-sm-4">
            <i class="fa-solid fa-circle-check icon-done"></i>
            <p>
                Contratos regulares
            </p>
            <div>
                <h1 id="quantidadeRegular"></h1>
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
                <button class="button-generate" data-toggle="tooltip" data-placement="top" title="Clique aqui para gerar um novo relatório com os filtros selecionados" data-report>Relatório</button>
                <button class="button-clear" data-clear>
                    <i class="fa-solid fa-trash"></i> 
                    Limpar tudo
                </button>
            </div>
        </div>
        <div class="table_filter">
            <div>
                <input type="text" placeholder="Número do Fluig" id="filtrarNumFluig"/>
                <input type="text" placeholder="Busque um colaborador" id="filtrarColaborador"/>
                <select id="filtrarSituacao">
                    <option value="">Situação</option>
                    <option value="Pendente">Pendentes</option>
                    <option value="Regular">Aprovados</option>
                </select>                
            </div>
        </div>
        <div class="table_filter_date">
            <select id="filtrarAno">
                <option value="">Ano</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
            </select>
            <select id="filtrarMes">
                <option value="">Mês</option>
                <option value="01">Janeiro</option>
                <option value="02">Fevereiro</option>
                <option value="03">Março</option>
                <option value="04">Abril</option>
                <option value="05">Maio</option>
                <option value="06">Junho</option>
                <option value="07">Julho</option>
                <option value="08">Agosto</option>
                <option value="09">Setembro</option>
                <option value="10">Outubro</option>
                <option value="11">Novembro</option>
                <option value="12">Dezembro</option>
            </select>
        </div>
        <tbody>
            <div id="target">
            </div>
        </tbody>
    </div>
    <#--  Scripts auxiliares  -->
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="sweetalert2.min.js"></script>
    <script src="SwalAlert.js" type="text/javascript"></script>
    <script src="SweetAlert.js" type="text/javascript"></script>
    <script src="https://kit.fontawesome.com/88cbac72fc.js" crossorigin="anonymous"></script>
    <script src="/webdesk/vcXMLRPC.js" type="text/javascript"></script>
</div>

