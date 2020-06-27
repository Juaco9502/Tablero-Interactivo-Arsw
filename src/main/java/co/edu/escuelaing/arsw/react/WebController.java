package co.edu.escuelaing.arsw.react;

import com.google.gson.Gson;
import java.util.ArrayList;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WebController {

    public static List<Circle> circles = new ArrayList<>();

    @GetMapping("/circles")
    public String circles() {
        String json = new Gson().toJson(circles); 
        return json;
    }

    @PostMapping("/restart")
    @ResponseBody
    public void restart() {
        circles.clear();
    }
    
    @PostMapping("/addcircles")
    @ResponseBody
    public void addCircles(@RequestParam(value = "posx")String posx, @RequestParam(value = "posy") String posy) {
        circles.add(new Circle(posx,posy));
    }

}
