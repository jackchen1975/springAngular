package hello;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RestControl {
	@RequestMapping("app/test")
    public String greeting()  {
        return "hello";
    }
}
