using System.ComponentModel.DataAnnotations;
using UserLoginAPI.Models.DTO;
namespace UserLoginAPI.Models
{

    public class User
    {
        
        [Key] public int Id { get; set; }
        [Required]
        [MinLength(5)]
        public string Name { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        [MinLength(5)]
        public string Password { get; set; }


        public User() { }

        public User(UserCriacaoDTO dto)
        {
            this.Name = dto.Nome;
            this.Email= dto.Email;
            this.Password = dto.Password;
        }
    }
}
