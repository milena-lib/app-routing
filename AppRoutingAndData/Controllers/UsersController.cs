using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using System.Web.Mvc;
using AppRoutingAndData.EntityModels;
using AppRoutingAndData.Models;

namespace AppRoutingAndData.Controllers
{
  [ApiController]
  [Microsoft.AspNetCore.Mvc.Route("api/[controller]")]
  [EnableCors("AllowAllOrigin")]
  class UsersController: Microsoft.AspNetCore.Mvc.Controller
  {
    ApplicationContext db;
    public UsersController(ApplicationContext context)
    {
      db = context;
    }

    [Microsoft.AspNetCore.Mvc.HttpGet]
    public IEnumerable<User> Get()
    {
      return null; // db.Users.ToList();
    }

    // GET api/users/5
    [Microsoft.AspNetCore.Mvc.HttpGet("{id}")]
    public IActionResult Get(int id)
    {
      User user = db.Users.FirstOrDefault(x => x.Id == id);
      if (user == null)
        return NotFound();
      return new ObjectResult(user);
    }

    // POST api/users
    [Microsoft.AspNetCore.Mvc.HttpPost]
    public IActionResult Post(User user)
    {
      if (user == null)
      {
        return BadRequest();
      }

      db.Users.Add(user);
      db.SaveChanges();
      return Ok(user);
    }

    // PUT api/users/
    [Microsoft.AspNetCore.Mvc.HttpPut]
    public IActionResult Put(User user)
    {
      if (user == null)
      {
        return BadRequest();
      }
      if (!db.Users.Any(x => x.Id == user.Id))
      {
        return NotFound();
      }

      db.Update(user);
      db.SaveChanges();
      return Ok(user);
    }

    // DELETE api/users/5
    [Microsoft.AspNetCore.Mvc.HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
      User user = db.Users.FirstOrDefault(x => x.Id == id);
      if (user == null)
      {
        return NotFound();
      }
      db.Users.Remove(user);
      db.SaveChanges();
      return Ok(user);
    }
  }
  
}
