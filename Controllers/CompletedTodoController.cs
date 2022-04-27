using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReactAspApp.Data;
using ReactAspApp.Models;

namespace ReactAspApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompletedTodoController : ControllerBase
    {
        private readonly TodoContext _context;

        public CompletedTodoController(TodoContext context)
        {
            _context = context;
        }
        // GET: api/<TestController>
        //[Authorize] この属性を付けると認証されたユーザーのみ実行可能とする
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Todo>>> GetCompletedTodos()
        {
            return await _context.Todos
            .Where(v => v.IsCompleted == true)
            .ToListAsync();
        }
    }
}