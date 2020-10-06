using AppRoutingAndData.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace AppRoutingAndData.EntityModels
{
  public class ApplicationContext : DbContext
  {
    public DbSet<User> Users { get; set; }
    public ApplicationContext(DbContextOptions<ApplicationContext> options)
        : base(options)
    {
      Database.EnsureCreated();   // создаем базу данных при первом обращении
    }
  }
}
