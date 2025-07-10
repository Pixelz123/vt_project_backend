package tourism_prj.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;

import tourism_prj.DTO.DestinationDTO;
import tourism_prj.services.DBservices;


@RestController
@RequestMapping("/api/")
public class ApiController {
    public final DBservices db_services;
    public final ObjectMapper object_mapper;
    @Autowired 
    public ApiController(DBservices db_services,ObjectMapper object_mapper){
        this.db_services=db_services;
        this.object_mapper=object_mapper;
    }
    @GetMapping("/getDestinationData/{city}")
    public ResponseEntity<?> handleTest(@PathVariable("city") String city) throws Exception{
      
        DestinationDTO res=db_services.getDestinationDetails(city);
        String resJSON=object_mapper.writeValueAsString(res);
        System.out.println(resJSON+"\n");
        return ResponseEntity.ok(res);
    }
}
