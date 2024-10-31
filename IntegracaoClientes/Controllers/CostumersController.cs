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
        private readonly ILogger<CostumersController> _logger;

        public CostumersController(SqlConnection connection, ILogger<CostumersController> logger)
        {
            _connection = connection;
            _logger = logger;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Costumer>>> GetAllCostumers()
        {
            _logger.LogInformation("BUSCADOS TODOS OS CLIENTES");

            var sql = "SELECT * FROM CLIENTES";
            var costumers = await _connection.QueryAsync(sql);

            return Ok(costumers);         
        }
    }
}
