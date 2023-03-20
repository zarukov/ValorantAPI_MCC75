using Microsoft.AspNetCore.Mvc;

namespace Valorant.Controllers;

public class ValorantAgentController : Controller
{
    public IActionResult Index()
    {
        return View();
    }
}
