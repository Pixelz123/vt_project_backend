package tourism_prj.entities;

import java.io.Serializable;

import jakarta.persistence.Embeddable;
import lombok.Data;

@Data
@Embeddable
public class HotelAmenityKey implements Serializable{
    public int hotel_id;
    public int amenity_id;
}
