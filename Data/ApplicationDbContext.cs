using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using jokesandjokes.Models;

namespace jokesandjokes.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        public DbSet<jokesandjokes.Models.Joke> Joke { get; set; } = default!;
        public DbSet<jokesandjokes.Models.Monster> Monster { get; set; } = default!;
    }
}
