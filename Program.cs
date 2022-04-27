using Microsoft.EntityFrameworkCore;
using ReactAspApp.Data;

var builder = WebApplication.CreateBuilder(args);
var  MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
builder.Logging.ClearProviders();
builder.Logging.AddConsole();


// sqlサーバー接続
builder.Services.AddDbContext<TodoContext>(options =>
        options.UseSqlServer(builder.Configuration.GetConnectionString("MyDbConnection")));

// if (builder.Environment.IsDevelopment())
// {
//     builder.Services.AddSqlite<TodoContext>("Data Source=Todoitem.db");
// }
// else
// {
//     builder.Services.AddDbContext<TodoContext>(options =>
//         options.UseSqlServer(builder.Configuration.GetConnectionString("MyDbConnection")));
// }



builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
        policy  =>
        {
            policy.WithOrigins("https://localhost:44483","")
            .AllowAnyHeader()
            .WithMethods("POST","PUT", "DELETE", "GET");
        });
});

// Add services to the container.

builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.UseCors(MyAllowSpecificOrigins);

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");;

app.Run();
