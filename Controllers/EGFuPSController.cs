using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Text;
using System.Text.Json;

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
            using (StreamReader reader = new StreamReader(Request.Body, Encoding.UTF8))
            {
                string requestBody = await reader.ReadToEndAsync();

                var objects = JArray.Parse(requestBody);

                var clientsTasks = new List<Task>();

                foreach (JObject obj in objects)
                {
                    string name = obj["name"].ToString();
                    int duration = obj["duration"]?.ToObject<int>() ?? 1; // Default to 1 if duration is missing or invalid

                    clientsTasks.Add(new Task(name: name, duration: duration));
                }

                // Now you can work with the tasks in the clientsTasks list as needed

                return Ok(new { message = functionalTaskScheduler(clientsTasks)});
            }
        }

        public List<Task> functionalTaskScheduler(List<Task> tasks)
        {
            var sortedTasks = tasks.OrderBy(t => t.Duration);
            return sortedTasks.ToList();
        }

    }

    // Erstellung eine Task Objekts. Die Objekte werden dann gescheduled.
    public class Task
    {
        public string Name { get; set; }
        public int Duration { get; set; }

        public Task(string name, int duration) {
            Name = name;
            Duration = duration;
        }
    }
}
