using Microsoft.EntityFrameworkCore;
using ReactAspApp.Models;

namespace ReactAspApp.Data;

public class TodoContext : DbContext
{
    public TodoContext (DbContextOptions<TodoContext> options)
        : base(options)
    {
    }

    public DbSet<Todo> Todos => Set<Todo>();
}