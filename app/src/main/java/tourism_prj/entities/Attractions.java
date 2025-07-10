package tourism_prj.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;

@Entity
@Data
@AllArgsConstructor
@Table(name = "attractions")
public class Attractions {
    @Id
    public String name;
    public int destination_id;
    public String decription;
    public String image_src;
    public String image_alt;
    public String image_ai_hint;
    public String type;
    public String distance;

}
