package tourism_prj.entities;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "HotelAmenities")
public class HotelAmenities {
    @EmbeddedId
    public HotelAmenityKey hotel_amenity_key;
}
