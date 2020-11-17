using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MatthewAllenServices.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class ColorChangerController : ControllerBase
    {
        private readonly ILogger<ColorChangerController> _logger;
        /// <summary>
        /// Logger for ColorChanger Controller
        /// </summary>
        /// <param name="logger"></param>
        public ColorChangerController(ILogger<ColorChangerController> logger)
        {
            _logger = logger;
        }

        /// <summary>
        /// Gets an array of three random number between 0 and 255 for color.
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            var rng = new Random();
            return new string[] { rng.Next(0,255).ToString(), rng.Next(0, 255).ToString(), rng.Next(0, 255).ToString()};
        }
    }
}
