package tourism_prj.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name ="transport_options")
public class Transport_options {
    @Id 
    public int transport_option_id;
    public int destination_id;
    public String mode;
    public String company;
    public String duration;
    public String fare;
    public int stops;
}
