using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StringsController : ControllerBase
    {
        [HttpGet]
        public ActionResult<IEnumerable<string>> Getstrings()
        {
            return new string[] {"Atlanta", "New York"};
        }
    }
    
}