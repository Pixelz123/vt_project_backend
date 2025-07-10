package tourism_prj.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "transport_hub")
public class TransportHub{
   @Id
    public int transport_hub_id;
    public int destination_id;
    public String type;
    public String name;
    public String city_code;
    public String distance_from_center; 
}
