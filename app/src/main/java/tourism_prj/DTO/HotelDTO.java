package tourism_prj.DTO;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
@Data
@AllArgsConstructor
public class HotelDTO {
    private String id;
    private String name;
    private double pricePerNight;
    private double rating;
    private List<ImageDTO> images;
    private List<String> amenities;
    private String location;
    private String description;

    // Getters and Setters
}
