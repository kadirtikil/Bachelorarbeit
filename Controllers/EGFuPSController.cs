using Microsoft.AspNetCore.Mvc;

namespace EGFuPSBackendCS.Controllers
{
    public class EGFuPSController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("taskScheduler")]
        public IActionResult taskScheduler()
        {
            return Ok(new { message = "Connection successful" });
        }


    }
}
