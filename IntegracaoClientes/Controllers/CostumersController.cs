using Dapper;
using IntegracaoClientes.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;

namespace IntegracaoClientes.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CostumersController : ControllerBase
    {
        private readonly SqlConnection _connection;

        public CostumersController(SqlConnection connection)
        {
            _connection = connection;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Costumer>>> GetAllCostumers()
        {
            var sql = "SELECT * FROM CLIENTES";
            var costumers = await _connection.QueryAsync(sql);

            return Ok(costumers);         
        }
    }
}
