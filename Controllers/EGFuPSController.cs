﻿using Microsoft.AspNetCore.Mvc;
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



        // Everything Markdown related is below. dont want to create a specific controller for this. maybe should but whatever fuck you

        // Function to get the txt file. dont want any choas goin on around here.

        public String getTxtFile(string txtFileName)
        {
            string path = "C:\\Users\\kadir\\source\\repos\\EGFuPSBackendCS\\EGFuPSBackendCS\\Controllers\\text\\" + txtFileName + ".txt";

            try
            {
                using( StreamReader sr = new StreamReader(path))
                {
                    string content = sr.ReadToEnd();

                    return content;
                }
            } catch(Exception ex)
            {
                Console.Write(ex.ToString());   
                return ex.ToString();
            }
        }

        [HttpGet("pf")]
        public IActionResult markdownPF()
        {
            return Ok(new { message = JsonConvert.SerializeObject(getTxtFile("PureFunctions")) });
        }

        [HttpGet("hof")]
        public IActionResult markdownHOF() {
            // NEeds changing did it for testing purposes.
            return Ok(new { message = JsonConvert.SerializeObject(getTxtFile("Hof")) });
        }

        [HttpGet("imm")]
        public IActionResult markdownIMM ()
        {
            return Ok(new { message = JsonConvert.SerializeObject(getTxtFile("Imm"))});
        }

        [HttpGet("mon")]
        public IActionResult markdownMON()
        {
            return Ok(new { message = JsonConvert.SerializeObject(getTxtFile("Mon")) });
        }

        [HttpGet("pm")]
        public IActionResult markdownPM() {
            return Ok(new { message = JsonConvert.SerializeObject(getTxtFile("PatternMatching")) });
        }

        [HttpGet("le")]
        public IActionResult markdownLE() {
            return Ok(new { message = JsonConvert.SerializeObject(getTxtFile("LazyEval")) });
        }

        [HttpGet("sec")]
        public IActionResult markdownSEC() {
            return Ok(new { message = JsonConvert.SerializeObject(getTxtFile("Sicherheit")) });
        }

        [HttpGet("wet")]
        public IActionResult markdownWET()
        {
            return Ok(new { message = JsonConvert.SerializeObject(getTxtFile("Wet")) });
        }

        [HttpGet("mp")]
        public IActionResult markdownDS()
        {
            return Ok(new { message = JsonConvert.SerializeObject(getTxtFile("MessagePassing")) });
        }

        [HttpGet("conc")]
        public IActionResult markdownCONC()
        {
            return Ok(new { message = JsonConvert.SerializeObject(getTxtFile("Nebenlaeufigkeit")) });
        }

        [HttpGet("di")]
        public IActionResult markdownDI()
        {
            return Ok(new { message = JsonConvert.SerializeObject(getTxtFile("Datenintensiv")) });
        }
        [HttpGet("ft")]
        public IActionResult markdownFT()
        {
            return Ok(new { message = JsonConvert.SerializeObject(getTxtFile("Fehlertoleranz")) });
        }
        [HttpGet("perf")]
        public IActionResult markdownPERF()
        {
            return Ok(new {message = JsonConvert.SerializeObject(getTxtFile("Performance"))})
        }
        [HttpGet("strc")]
        public IActionResult markdownSTRUC()
        {
            return Ok(new { message = JsonConvert.SerializeObject(getTxtFile("Struktur")) });
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
