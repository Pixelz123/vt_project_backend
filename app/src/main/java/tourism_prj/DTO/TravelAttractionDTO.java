package tourism_prj.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class TravelAttractionDTO {
    private String id;
    private String name;
    private String description;
    private ImageDTO image;
    private String type;
    private String distance;

    // Getters and Setters
}