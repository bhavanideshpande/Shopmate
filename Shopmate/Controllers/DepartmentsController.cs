using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Shopmate.Controllers
{
    public class DepartmentsController : Controller
    {
        // GET: Departments
        
        public ActionResult Index()
        {
            return View();
        }
        [Route("Departments/{DepartmentId}")]
        public ActionResult department_detail(String DepartmentId)
        {
            return View();
        }
    }
}