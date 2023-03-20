using Microsoft.AspNetCore.Mvc;

namespace Valorant.Controllers;

public class ValorantMapController : Controller
{
    public IActionResult Index()
    {
        return View();
    }
}
