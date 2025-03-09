using System.ComponentModel.DataAnnotations;

namespace UserLoginAPI.Models.DTO
{
    public record UserCriacaoDTO
    {
        [Required(ErrorMessage = "Nome não pode estar vazio")]
        [MinLength(5,ErrorMessage = "O nome deve ter no mínimo 5 caracteres")]
        public string Nome { get; set; }

        [Required(ErrorMessage = "O e-mail é obrigatório.")]
        [EmailAddress(ErrorMessage = "Email inválido")]
        public string Email { get; set; }

        [Required(ErrorMessage = "A senha é obrigatória.")]
        [MinLength(5, ErrorMessage = "A senha deve ter no mínimo 5 caracteres.")]
        public string Password { get; set; }
    }
}
