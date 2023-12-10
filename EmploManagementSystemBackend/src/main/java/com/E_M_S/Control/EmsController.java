package com.E_M_S.Control;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.E_M_S.Model.Employ;
import com.E_M_S.emsReposetry.EmpReposetry;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200")
public class EmsController {

	@Autowired
	EmpReposetry repository;

	@GetMapping("/employ")
	public List<Employ> getAllEmploys() {
		return repository.findAll();
	}

	@PostMapping("/employ")
	public Employ createEmploy(@RequestBody Employ employ) {
		return repository.save(employ);
	}

	@GetMapping("/employ/{id}")
	public ResponseEntity<Employ> getEmployById(@PathVariable int id) {
		Optional<Employ> employ = repository.findById(id);
		if (employ.isPresent()) {
			return ResponseEntity.ok(employ.get());
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	@PutMapping("/employ/{id}")
	public ResponseEntity<Employ> updateEmploy(@PathVariable int id, @RequestBody Employ employData) {
		Optional<Employ> optionalEmploy = repository.findById(id);
		if (optionalEmploy.isPresent()) {
			Employ employ = optionalEmploy.get();
			employ.setName(employData.getName());
			employ.setEmail(employData.getEmail());
			employ.setPhone(employData.getPhone());
			Employ updatedEmploy = repository.save(employ);
			return ResponseEntity.ok(updatedEmploy);
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	@DeleteMapping("/employ/{id}")
	public ResponseEntity<String> deleteEmploy(@PathVariable int id) {
		Optional<Employ> optionalEmploy = repository.findById(id);
		if (optionalEmploy.isPresent()) {
			repository.delete(optionalEmploy.get());
			return ResponseEntity.ok("Employ deleted successfully");
		} else {
			return ResponseEntity.notFound().build();
		}
	}

}
