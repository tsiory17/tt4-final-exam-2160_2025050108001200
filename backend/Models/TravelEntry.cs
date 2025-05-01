using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    

public class TravelEntry
    {
        
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(500)]
        public string Location { get; set; }

        [StringLength(500)]
        public string Description { get; set; }

        
        public DateTime Date { get; set; }

        public string Photos { get; set; }
      
    }
}