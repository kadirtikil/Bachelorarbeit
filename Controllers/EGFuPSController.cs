using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using System.Reflection.Metadata.Ecma335;
using System.Text;

namespace EGFuPSBackendCS.Controllers
{
    public class EGFuPSController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost("taskScheduler")]
        public async Task<IActionResult> taskScheduler()
        {
            // Read the request body stream
            using (StreamReader reader = new StreamReader(Request.Body, Encoding.UTF8))
            {
                string requestBody = await reader.ReadToEndAsync();

                return Ok(new { message = requestBody });
            }
        }

        public IActionResult functionalTaskScheduler()
        {
            return Ok(new { message = "Hello" });
        }

    }
    public class Task
    {
        public string name { get; set; }
        public string duration { get; set; }
    }
}
