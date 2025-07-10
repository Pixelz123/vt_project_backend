package tourism_prj.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name ="HotelImage")
public class HotelImageEntity {
    @Id
    public int hotel_image_id;
    public int hotel_id;
    public String src;
    public String alt;
    public String data_ai_hint;
}
