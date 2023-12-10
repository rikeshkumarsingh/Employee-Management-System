package com.E_M_S.emsReposetry;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.E_M_S.Model.Employ;

@Repository
public interface EmpReposetry extends JpaRepository<Employ, Integer> {

}
