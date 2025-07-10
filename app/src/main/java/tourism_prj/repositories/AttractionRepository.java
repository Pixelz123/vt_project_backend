package tourism_prj.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import tourism_prj.entities.Attractions;

@Repository
public interface  AttractionRepository extends JpaRepository<Attractions, Object> {
    @Query(value="SELECT name,decription,image_src,image_alt,image_ai_hint,type,distance FROM attractions WHERE destination_id= :destinationId",nativeQuery=true)
    public List<Object[]> getAttractions(int destinationId);
}
