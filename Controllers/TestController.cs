using Microsoft.AspNetCore.Mvc;

    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {
        // GET: api/<TestController>
        //[Authorize] この属性を付けると認証されたユーザーのみ実行可能とする
        [HttpGet]
        public IActionResult Get()
        {
            return Ok("Hello React!!!!"); //HTTPステータスコード200を返す
        }
    }