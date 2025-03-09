using System.ComponentModel.DataAnnotations;

namespace UserLoginAPI.Models.DTO
{
    public record LoginDTO
    {
        [Required]
        public string Email { get; set; }
        [Required]
        public string Senha{ get; set; }   
    }
}
