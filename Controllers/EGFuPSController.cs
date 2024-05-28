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

                return Ok(new { message = JsonConvert.SerializeObject(functionalTaskScheduler(clientsTasks))});
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

                var objects = JArray.Parse(requestBody);

                var listOfMessages = new List<Message>();
                
                foreach(JObject obj in objects)
                {
                    string pid = obj["pid"].ToString();
                    string message = obj["message"].ToString();
                    string requiredfor = obj["requiredfor"].ToString();

                    listOfMessages.Add(new Message(pid: pid, content: message, requiredfor: requiredfor));
                }

                Console.Write(listOfMessages);
                // feed the list to the function such that the function can simulate, how a message passing would look like. 
                // then return result as json and handle format in frontend


            }
        }

        public void sendMessage( string sender, string receiver, string message ) { 
            
        }


        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Everything SVG related is down here
        public string getTestSvg(string svgFileName)
        {
            string path = "C:\\Users\\kadir\\Desktop\\Backend\\Bachelorarbeit\\Controllers\\svgs\\" + svgFileName + ".svg";


            string svgContent = System.IO.File.ReadAllText(path);

            //  HttpContext.Response.ContentType = "image/svg+xml";

            return svgContent;
        }

        [HttpGet("patternmatching")]
        public IActionResult getPmSvg()
        {
            return Ok(new { message = getTestSvg("PatternMatching") });
        }

        [HttpGet("immutable")]
        public IActionResult getImmSvg()
        {
            return Ok(new { message = getTestSvg("Immutability") });
        }

        [HttpGet("higherorderfunction")]
        public IActionResult getHofSvg()
        {
            return Ok(new { message = getTestSvg("PatternMatching") });
        }

        [HttpGet("monads")]
        public IActionResult getMoSvg()
        {
            return Ok(new { message = getTestSvg("Monaden") });
        }

        [HttpGet("purefunction")]
        public IActionResult getPfSvg()
        {
            return Ok(new { message = getTestSvg("Pure Functions") });
        }
        [HttpGet("funccomp")]
        public IActionResult getFuncC()
        {
            return Ok(new { message = getTestSvg("Funktionskomposition") });
        }
        [HttpGet("recursionsvg")]
        public IActionResult getRecSvg()
        {
            return Ok(new { message = getTestSvg("recursionsvg") });
        }
        [HttpGet("lazyevalsvg")]
        public IActionResult getLazySvg()
        {
            return Ok(new {message=getTestSvg("lazyevalsvg")});
        }


        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Everything Markdown related is below. dont want to create a specific controller for this. maybe should but whatever fuck you

        // Function to get the txt file. dont want any choas goin on around here.

        public String getTxtFile(string txtFileName)
        {
            //string path1 = "C:\\Users\\kadir\\source\\repos\\EGFuPSBackendCS\\EGFuPSBackendCS\\Controllers\\text\\" + txtFileName + ".txt";
            string path = "C:\\Users\\kadir\\Desktop\\Backend\\Bachelorarbeit\\Controllers\\text\\" + txtFileName + ".txt";


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
        public IActionResult markdownMP()
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
            return Ok(new { message = JsonConvert.SerializeObject(getTxtFile("Performance")) });
        }
        [HttpGet("strc")]
        public IActionResult markdownSTRUC()
        {
            return Ok(new { message = JsonConvert.SerializeObject(getTxtFile("Struktur")) });
        }
        [HttpGet("ds")]
        public IActionResult markdownDS()
        {
            return Ok(new { message = JsonConvert.SerializeObject(getTxtFile("VerteiltesRechnen")) });
        }
        [HttpGet("fk")]
        public IActionResult markdownFk()
        {
            return Ok(new { message = JsonConvert.SerializeObject(getTxtFile("Funktionskomposition")) });
        }
        [HttpGet("cr")]
        public IActionResult markdownCr()
        {
            return Ok(new { message = JsonConvert.SerializeObject(getTxtFile("Currying")) });
        }
        [HttpGet("ps")]
        public IActionResult markdownPs()
        {
            return Ok(new { message = JsonConvert.SerializeObject(getTxtFile("PersistenteDatenstrukturen")) });
        }
        [HttpGet("rk")]
        public IActionResult markdownRk()
        {
            return Ok(new { message = JsonConvert.SerializeObject(getTxtFile("Rekursion")) });
        }
        [HttpGet("cb")]
        public IActionResult markdownCb()
        {
            return Ok(new { message = JsonConvert.SerializeObject(getTxtFile("Compilerbau")) });
        }


        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // POST reqs for updating entries.

        // Files that are able to be changes
        /*Dictionary TxtFiles = new Dictionary<string, string>
        {
            {"Wartbar-, Erweiterbar- und Testbarkeit", "Wet"},
            {"Performance", "Performance"},
            {"Currying", "Currying"},
            {"Persistente Datenstrukturen", "PersistenteDatenstrukturen"},
            {"Nebenläufigkeit", "Nebenlaufigkeit"},
            {"Higher Order Functions", "Hof"},
            {"Lazy Evaluation", "LazyEval"},
            {"Rekursion", "Rekursion"},
            {"Verteiltes Rechnen", "VerteiltesRechnen" },
            {"Datenintensiv", "Datenintensiv"},
            {"Message Passing", "MessagePassing"},
            {"Pure Functions", "PureFunctions"},
            {"Immutability", "Imm"},
            {"Monads", "Mon"},
            {"Pattern Matching", "PatternMatching"},
            {"Funktionskomposition", "Funktionskomposition"},
        };*/


        [HttpPut("markdownedit/{txtFile}")]
        public IActionResult updateMarkdown([FromRoute] string txtFile)
        {
            Console.Write(txtFile);
            // find the txt to change
            /*if(TxtFiles.TryGetValue(txtFiles, out string value))
            {
                Console.Write(value);
            }
            else
            {
                Console.Write("Couldnt find value");
            }*/

            // update the txt to change

            // return message 
            return Ok(new { message = "Markdown has been Updated in the backend!" });
        }

    }


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
        public string RequiredFor { get; set; }

        public Message(string pid, string content, string requiredfor)
        {
            Pid = pid;
            Content = content;
            RequiredFor = requiredfor;
        }
    }

}
