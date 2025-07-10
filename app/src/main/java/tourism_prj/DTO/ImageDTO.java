package tourism_prj.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ImageDTO {
    private String src;
    private String alt;
    private String dataAiHint;

    // Getters and Setters
}