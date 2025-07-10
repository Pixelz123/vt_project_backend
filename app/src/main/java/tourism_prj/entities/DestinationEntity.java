package tourism_prj.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name ="Destination")
public class DestinationEntity {
    @Id
     public int destination_id;
     public String name;
     public String description;
     public String hero_image_src;
     public String hero_image_alt;
     public String hero_image_ai_hint;
}
