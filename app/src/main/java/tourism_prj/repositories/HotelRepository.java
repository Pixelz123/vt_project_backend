package tourism_prj.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import tourism_prj.entities.HotelEntity;

@Repository
public interface HotelRepository extends JpaRepository<HotelEntity, Integer>{
    @Query(value="SELECT h.hotel_id,h.name,h.price_per_night,h.rating,h.location,h.description FROM hotel h WHERE h.destination_id= :destinationId",nativeQuery=true)
    public List<Object[]> getHotelData(int destinationId);
   
    @Query(value="SELECT hi.src AS src,hi.alt AS alt,hi.data_ai_hint AS dataAiHint  FROM hotel_image hi WHERE hi.hotel_id= :hotelId",nativeQuery=true)
    public List<Object[]> getHotelImage(int hotelId);

    @Query(value="SELECT a.name FROM amenities a JOIN hotel_amenities ha ON a.amenity_id = ha.amenity_id WHERE ha.hotel_id= :hotelId",nativeQuery=true)
    public List<String> getAmenityList(int hotelId);
    
}
