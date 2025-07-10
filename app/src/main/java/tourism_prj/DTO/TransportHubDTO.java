package tourism_prj.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class TransportHubDTO {
    private String id;
    private String type;
    private String name;
    private String cityCode;
    private String distanceFromCenter;

    // Getters and Setters
}