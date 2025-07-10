package tourism_prj.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name ="Hotel")
public class HotelEntity {
    @Id
     public int hotel_id;
    public int destination_id;
    public String name;
    public double price_per_night;
    public double rating;
    public String location;
    public String description;
}
