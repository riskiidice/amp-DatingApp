using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(8, MinimumLength= 4 , ErrorMessage = "You must specity password 4 to 8")]
        public string Password { get; set; }
    }
}
