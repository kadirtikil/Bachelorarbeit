using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Text;

namespace EGFuPSBackendCS.Controllers
{
    public class EGFuPSController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        // Function for the Taskscheduler.
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

                return Ok(new { message = functionalTaskScheduler(clientsTasks)});
            }
        }

        public List<Task> functionalTaskScheduler(List<Task> tasks)
        {
            var sortedTasks = tasks.OrderBy(t => t.Duration);
            return sortedTasks.ToList();
        }


        // Function for message passing to illustrate processes distributed systems
        [HttpPost("distributedSystems")]
        public async void distributedSystems()
        {
            using(StreamReader reader = new StreamReader (Request.Body, Encoding.UTF8)){
                string requestBody = await reader.ReadToEndAsync();

                Console.WriteLine(requestBody);
            }
        }

        public void sendMessage( string sender, string receiver, string message ) { 
            
        }


        [HttpGet("mdtext")]
        public IActionResult markdownText()
        {
            string path = "C:\\Users\\kadir\\source\\repos\\EGFuPSBackendCS\\EGFuPSBackendCS\\Controllers\\text\\PureFunctions.txt";

            try
            {
                using(StreamReader sr = new StreamReader(path)) {
                    string fileContent = sr.ReadToEnd();

                    return Ok( new { message = JsonConvert.SerializeObject(fileContent) });
                }
            } catch(Exception ex) { 
                Console.WriteLine(ex.ToString());
                return Ok(new { message = ex });
            }
        }
    }



    // Classes for the functions

    // Task objects for task scheduling
    public class Task
    {
        public string Name { get; set; }
        public int Duration { get; set; }

        public Task(string name, int duration) {
            Name = name;
            Duration = duration;
        }
    }

    // Message class for message passing. used for distributed systems.
    public class Message
    {
        public string Pid { get; set; }
        public string Content { get; set; }

        public Message(string pid, string content)
        {
            Pid = pid;
            Content = content;
        }
    }

}
