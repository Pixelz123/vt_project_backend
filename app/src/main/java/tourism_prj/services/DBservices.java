package tourism_prj.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tourism_prj.DTO.DestinationDTO;
import tourism_prj.DTO.HeroImageDTO;
import tourism_prj.DTO.HotelDTO;
import tourism_prj.DTO.ImageDTO;
import tourism_prj.DTO.TransportHubDTO;
import tourism_prj.DTO.TransportOptionDTO;
import tourism_prj.DTO.TravelAttractionDTO;
import tourism_prj.repositories.AttractionRepository;
import tourism_prj.repositories.DestinationRepository;
import tourism_prj.repositories.HotelRepository;
import tourism_prj.repositories.TransportRepository;

@Service
public class DBservices {
    @Autowired
    public HotelRepository hotel_repo;
    @Autowired
    public DestinationRepository destination_repo;
    @Autowired
    public TransportRepository transport_repository;
    @Autowired
    public AttractionRepository attractionRepository;

    public List<Object[]> getTestData() {
        List<Object[]> queryOutput = transport_repository.getTransportOption(2);
        return queryOutput;
    }

    public DestinationDTO getDestinationDetails(String name) {
        Object[] query_output = destination_repo.getDestinationData(name).get(0);
        int destinationId = (int) query_output[0];

        DestinationDTO destination_data = new DestinationDTO();
        List<HotelDTO> hotel_list = getHotelData(destinationId);
        List<TransportOptionDTO> transportOptionList = getTransportOptionDTO(destinationId);
        List<TransportHubDTO> transportHubList = getTransportHubData(destinationId);
        List<TravelAttractionDTO> attractionList = getAttractions(destinationId);
        destination_data.setId(String.valueOf(destinationId));
        destination_data.setName((String) query_output[1]);

        destination_data.setDescription((String) query_output[2]);

        destination_data.setHeroImage(
                new HeroImageDTO((String) query_output[3], (String) query_output[5], (String) query_output[4]));

        destination_data.setHotels(hotel_list);
        destination_data.setTransportOptions(transportOptionList);
        destination_data.setTransportHubs(transportHubList);
        destination_data.setAttractions(attractionList);

        return destination_data;
    }


    public List<TravelAttractionDTO> getAttractions(int destinationId) {
        List<TravelAttractionDTO> attraction_list = new ArrayList<>();
        List<Object[]> query_output = attractionRepository.getAttractions(destinationId);
        for (Object[] row : query_output) {
            String name = (String) row[0];
            String description = (String) row[1];
            ImageDTO image = new ImageDTO((String) row[2], (String) row[3], (String) row[4]);
            String type = (String) row[5];
            String distance = (String) row[6];
            attraction_list.add(new TravelAttractionDTO("id", name, description, image, type, distance));
        }
        return attraction_list;
    }

    public List<TransportHubDTO> getTransportHubData(int destinationId) {
        List<TransportHubDTO> transportHubList = new ArrayList<>();
        List<Object[]> query_output = transport_repository.getTransportHubList(destinationId);
        for (Object[] row : query_output) {
            String id = String.valueOf(row[0]);
            String type = (String) row[1];
            String name = (String) row[2];
            String cityCode = (String) row[3];
            String distanceFromCenter = (String) row[4];
            transportHubList.add(new TransportHubDTO(id, type, name, cityCode, distanceFromCenter));

        }
        return transportHubList;
    }

    public List<TransportOptionDTO> getTransportOptionDTO(int destinationId) {
        List<TransportOptionDTO> transportOptionList = new ArrayList<>();
        List<Object[]> query_output = transport_repository.getTransportOption(destinationId);
        for (Object[] row : query_output) {
            String id = String.valueOf(row[0]);
            String mode = (String) row[1];
            String company = (String) row[2];
            String duration = (String) row[3];
            String fare = (String) row[4];
            int stops = (int) row[5];
            transportOptionList.add(new TransportOptionDTO(id, mode, company, "", "", duration, fare, stops));
        }
        return transportOptionList;
    }

    public List<HotelDTO> getHotelData(int destinationId) {
        List<Object[]> query_result = hotel_repo.getHotelData(destinationId);
        List<HotelDTO> hotel_list = new ArrayList<>();
        for (Object[] row : query_result) {
            int hotelId = (int) row[0];
            String hotelName = (String) row[1];
            double price_per_night = (double) row[2];
            double rating = (double) row[3];
            String location = (String) row[4];
            String description = (String) row[5];
            List<ImageDTO> images = getHotelImage(hotelId);
            List<String> amenities = getHotelAmenities(hotelId);
            hotel_list.add(new HotelDTO(String.valueOf(hotelId), hotelName, price_per_night, rating, images, amenities,
                    location, description));
        }
        return hotel_list;
    }

    public List<ImageDTO> getHotelImage(int hotelId) {
        List<Object[]> query_result = hotel_repo.getHotelImage(hotelId);
        List<ImageDTO> hotel_image_list = new ArrayList<>();
        for (Object[] row : query_result) {
            String src = (String) row[0];
            String alt = (String) row[1];
            String dataAiHint = (String) row[2];
            hotel_image_list.add(new ImageDTO(src, alt, dataAiHint));
        }
        return hotel_image_list;
    }

    public List<String> getHotelAmenities(int hotelId) {
        List<String> hotel_amenity_list = hotel_repo.getAmenityList(hotelId);
        return hotel_amenity_list;
    }

}
