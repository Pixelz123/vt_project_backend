package tourism_prj.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class TransportOptionDTO {
    private String id;
    private String mode;
    private String company;
    private String departureTime;
    private String arrivalTime;
    private String duration;
    private String fare;
    private int stops;

    // Getters and Setters
}
