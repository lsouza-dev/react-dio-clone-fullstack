namespace UserLoginAPI.Models.DTO
{
    public record UserExibicaoDTO
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
    
        public UserExibicaoDTO(User u)
        {
            this.Id  = u.Id;
            this.Nome = u.Name;
            this.Email = u.Email;

        }
    }
}
