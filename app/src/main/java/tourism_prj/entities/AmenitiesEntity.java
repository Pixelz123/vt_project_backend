package tourism_prj.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name ="Amenities")
public class AmenitiesEntity {
    @Id
    public int amenity_id;
    public String name;
    public String icon_name;
}
