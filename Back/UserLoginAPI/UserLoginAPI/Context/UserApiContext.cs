using Microsoft.EntityFrameworkCore;
using UserLoginAPI.Models;

namespace UserLoginAPI.Context
{
    public class UserApiContext : DbContext
    {
        public UserApiContext(DbContextOptions options) : base(options) { }

        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                .HasKey(u => u.Id);

            base.OnModelCreating(modelBuilder);
        }

    }
}
