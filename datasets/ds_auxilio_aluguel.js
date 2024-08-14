function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
   
    //Instancio Dataset
    var newDataset = DatasetBuilder.newDataset();

    //Crio variaveis
    newDataset.addColumn("LOGIN");
    newDataset.addColumn("FULL_NAME");
    newDataset.addColumn("EMAIL");
    newDataset.addColumn("LAST_UPDATE_DATE");

    //Variaveis de configuracao
    var dataSource = "/jdbc/FluigDS";
    var ic = new javax.naming.InitialContext();
    var ds = ic.lookup(dataSource);
    var created = false;
    //------------------------------------------------------
                     
    myQuery = "select LOGIN, FULL_NAME, EMAIL, LAST_UPDATE_DATE from FDN_USERTENANT AA " +
            "inner join fdn_user XI on " + 
            "AA.user_id = XI.user_id " + 
            "WHERE USER_STATE = '1'"
        
    try {
            
        //Execucao da Operacao
        var conn = ds.getConnection();
        var stmt = conn.createStatement();
        var rs = stmt.executeQuery(myQuery);
        //Quantidades de Colunas
        var columnCount = rs.getMetaData().getColumnCount();
            
        //Enquanto ainda existir Registros
        while (rs.next()) {
                

            //Digo que as Variveis recebem o retorno de cada Coluna
            var login = rs.getString("LOGIN");
            var full_name = rs.getString("FULL_NAME");
            var email = rs.getString("EMAIL");
            var last_update_date = rs.getString("LAST_UPDATE_DATE");
      
            //A cada vez que linha que existe, uma linha eh criada no Dataset
            //newDataset.addRow(new Array(matriculas));
            newDataset.addRow(
                new Array(
                    login,
                    full_name,
                    email,
                    last_update_date
                ));
        }
            
    //Tratamento de erros e Fechamento de Conexao
    } catch (e) {
    
        log.error("ERRO==============> " + e.message);
                
    } finally {
        if (stmt !== null) {
            stmt.close();
        }
        if (conn !== null) {
            conn.close();
        }
    }
            
    return newDataset;
}

function onMobileSync(user) {

}