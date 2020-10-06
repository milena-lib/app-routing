using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.Extensions.Configuration;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using AppRoutingAndData.Models;
using AppRoutingAndData.Services;
using AppRoutingAndData.EntityModels;

namespace AppRoutingAndData
{
  public class Startup
  {
    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;
    }
    public IConfiguration Configuration { get; }

    public void ConfigureServices(IServiceCollection services)
    {
      string connection = Configuration.GetConnectionString("DefaultConnection");
      //string connection = "Server=(localdb)\mssqllocaldb;Database=angulargridtestsdb;Trusted_Connection=True;";
      services.AddDbContext<ApplicationContext>(options => options.UseSqlServer(connection));
      services.AddControllers();
      services.AddCors(options =>
      {
        options.AddPolicy("AllowAllOrigin", builder => {
          builder.AllowAnyOrigin();
          builder.WithMethods("GET", "PUT", "POST", "DELETE");
          builder.AllowAnyHeader();
        });
      });
    }

    public void Configure(IApplicationBuilder app)
    {
      app.UseDeveloperExceptionPage();

      app.UseRouting();

      app.UseCors();

      app.UseEndpoints(endpoints =>
      {
        endpoints.MapControllers();
      });
    }
  }
}
