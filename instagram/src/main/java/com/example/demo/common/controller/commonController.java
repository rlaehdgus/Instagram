package com.example.demo.common.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import lombok.AllArgsConstructor;

@Controller
@AllArgsConstructor
public class commonController {
	
	@GetMapping(value = {"/", "/index.do"})
	public String main() {
		return "vue/index";
	}

	@GetMapping("/{menu1}.do")
	public String commonPage1(@PathVariable("menu1") String menu1) {
		
		return "vue/"+menu1;
	}
	
	@GetMapping("/{menu1}/{menu2}.do")
	public String commonPage2(@PathVariable("menu1") String menu1, @PathVariable("menu2") String menu2) {
		
		return "vue/" + menu1 + "/" + menu2;
	}
	
	@GetMapping("/{menu1}/{menu2}/{menu3}.do")
	public String commonPage3(@PathVariable("menu1") String menu1, @PathVariable("menu2") String menu2, @PathVariable("menu3") String menu3) {
		
		return "vue/" + menu1 + "/" + menu2 + "/" + menu3;
	}
	
	@GetMapping("/{menu1}/{menu2}/{menu3}/{menu4}.do")
	public String commonPage4(@PathVariable("menu1") String menu1, @PathVariable("menu2") String menu2, @PathVariable("menu3") String menu3, @PathVariable("menu4") String menu4) {
		
		return "vue/" + menu1 + "/" + menu2 + "/" + menu3 + "/" + menu4;
	}
}
