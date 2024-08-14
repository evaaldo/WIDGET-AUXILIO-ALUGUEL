<div id="MyWidget_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide" data-params="MyWidget.instance()">
    <script src="/webdesk/vcXMLRPC.js" type="text/javascript"></script>
    <div class="alert alert-info" role="alert"><strong>Informação:</strong> Nessa tela você pode estar filtrando por status de contrato, como pendente e concluído, ou por data, como mês e ano. Além disso, você pode exportar nos formatos CSV, PDF e Excel.</div>
    <div id="datatable-area" class="panel-heading fs-no-padding-left fs-no-padding-right">
        <div class="row fs-no-margin">
            <div id="datatable-area-action" class="fs-no-padding-left col-md-6">
                <button class="button-success" role="button" style="color: #fff;"><i class="flaticon flaticon-file-date icon-xs" aria-hidden="true"></i> Relatório</button>
                <button class="button-action" role="button" style="color: #fff;">CSV</button>
                <button class="button-action" role="button" style="color: #fff;">PDF</button>
                <button class="button-action" role="button" style="color: #fff;">Excel</button>
                <div class="btn-group">
                    <button type="button" class="button-action dropdown-toggle" data-toggle="dropdown" aria-expanded="false" style="color: #fff;">
                        Status <span class="caret" style="color: #fff;"></span>
                    </button>
                    <ul class="dropdown-menu" role="menu">
                        <li><a data-datatable-pendente="" href="#">Pendente</a></li>
                        <li><a data-datatable-concluido="" href="#">Concluído</a></li>
                    </ul>
                </div>
            </div>
            <div id="datatable-area-search" class="fs-no-padding-right col-md-5 col-md-offset-1">
                <div class="form-group pull-right">
                    <div class="input-group">
                        <input class="form-control" id="fluig-data-table-input" type="text" placeholder="Buscar">
                        <div class="input-group-addon" data-btn-search="" id="btnSearch">
                            <span class="fluigicon fluigicon-search"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br>
    <small>Exibindo 30 de 300 resultados</small>
    <tbody>
        <div id="target">
        </div>
    </tbody>
</div>

