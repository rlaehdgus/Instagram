package com.example.demo;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
public class TestController {
	
	@GetMapping("/helloworld")
	public Map<String, Object> main() {
		Map<String, Object> result = new HashMap<String, Object>();
		
		result.put("result", "success");
		
		return result;
	}
}
