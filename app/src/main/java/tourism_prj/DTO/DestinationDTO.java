package tourism_prj.DTO;

import java.util.List;

import lombok.Data;

@Data
public class DestinationDTO {
    private String id;
    private String name;
    private String description;
    private HeroImageDTO heroImage;
    private List<HotelDTO> hotels;
    private List<TransportOptionDTO> transportOptions;
    private List<TransportHubDTO> transportHubs;
    private List<TravelAttractionDTO> attractions;

}