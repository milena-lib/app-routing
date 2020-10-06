using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AppRoutingAndData.Models
{
  public class RoutingAndDataContext : DbContext
  {
    public RoutingAndDataContext(DbContextOptions<RoutingAndDataContext> options)
            : base(options)
    {
      Database.EnsureCreated();
    }
  }
}
