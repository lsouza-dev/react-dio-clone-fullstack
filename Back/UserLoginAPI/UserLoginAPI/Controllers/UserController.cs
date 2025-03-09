using System.Runtime.InteropServices;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UserLoginAPI.Context;
using UserLoginAPI.Models;
using UserLoginAPI.Models.DTO;

namespace UserLoginAPI.Controllers
{
    public class UserController : ControllerBase
    {
        private UserApiContext _context;
        private ILogger<UserController> _logger;

        public UserController(UserApiContext context,ILogger<UserController> logger)
        {
            _context = context;
            _logger = logger;
        }

        [HttpPost($"api/v1/users/create")]
        public async Task<ActionResult> CreateUser(UserCriacaoDTO dto)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                bool registredEmail = await _context.Users.AnyAsync(u => u.Email == dto.Email);

                if (registredEmail)
                {
                    return BadRequest(new { mensagem = "O email inserido já foi cadastrado no sistema." });
                }

                var user = new User(dto);

                _context.Users.Add(user);
                _context.SaveChanges();

                return Ok(new { mensagem = "Usuário criado!" });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("api/v1/users/all")]
        public async Task<ActionResult> GetAllUsers()
        {
            try
            {
                var users = await _context.Users.ToArrayAsync();

                _logger.LogDebug("Lista de Uusários: {users}",users);
                
                var dtos = users.Select(u => new UserExibicaoDTO(u));
                return Ok(dtos);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("api/v1/users/login")]
        public async Task<ActionResult> Login (LoginDTO dto)
        {
            var usuarioEncontrado = await _context.Users.FirstOrDefaultAsync(u => u.Email == dto.Email && u.Password == dto.Senha);
            if (usuarioEncontrado == null) return NotFound(new {mensagem = "Usuário ou senha incorretos!"});

            return Ok(new
            {
                mensagem = "Login realizado com sucesso!",
                usuario = new UserExibicaoDTO(usuarioEncontrado)
            });
        }
    }   
}
