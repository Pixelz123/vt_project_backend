package tourism_prj.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import tourism_prj.entities.DestinationEntity;

@Repository
public interface DestinationRepository extends JpaRepository<DestinationEntity, Integer> {
   @Query(value="SELECT d.destination_id,d.name,d.description,d.hero_image_src,d.hero_image_ai_hint,d.hero_image_alt,h.location,h.name,h.price_per_night,h.rating FROM destination d LEFT JOIN hotel h ON h.destination_id=d.destination_id WHERE d.name = :name",nativeQuery=true)
   public List<Object[]> getDestinationData(String name);
}