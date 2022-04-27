using System.ComponentModel.DataAnnotations;

namespace ReactAspApp.Models;

public class Todo
{
    public int Id { get; set; }

    [Required]
    [MaxLength(100)]
    public string Name { get; set; }
    public bool IsCompleted { get; set; }

    public DateTime PlanedDate { get; set; }
    public DateTime? CompletedDate { get; set; }
}