package tourism_prj.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import tourism_prj.entities.Transport_options;

@Repository
public interface TransportRepository extends JpaRepository<Transport_options,Integer> {
    @Query(value="SELECT transport_option_id ,mode,company,duration,fare,stops FROM transport_options WHERE destination_id= :destinationId",nativeQuery=true)
    public List<Object[]> getTransportOption(int destinationId);

    @Query(value="SELECT transport_hub_id,type,name,city_code,distance_from_center FROM transport_hub WHERE destination_id = :destinationId",nativeQuery=true)
    public List<Object[]> getTransportHubList(int destinationId);
}
