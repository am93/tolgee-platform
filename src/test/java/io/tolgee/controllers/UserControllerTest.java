package io.tolgee.controllers;

import io.tolgee.ITest;
import io.tolgee.assertions.StandardValidationMessageAssert;
import io.tolgee.dtos.request.UserUpdateRequestDTO;
import io.tolgee.model.UserAccount;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.test.web.servlet.MvcResult;
import org.testng.annotations.Test;

import java.util.Optional;

import static io.tolgee.assertions.Assertions.assertThat;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class UserControllerTest extends SignedInControllerTest implements ITest {

    @Test
    void updateUser() throws Exception {
        UserUpdateRequestDTO requestDTO = UserUpdateRequestDTO.builder().email("ben@ben.aa").password("super new password").name("Ben's new name").build();

        MvcResult mvcResult = performAuthPost("/api/user", requestDTO).andExpect(status().isOk()).andReturn();

        Optional<UserAccount> fromDb = userAccountService.getByUserName(requestDTO.getEmail());
        assertThat(fromDb).isNotEmpty();

        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
        assertThat(bCryptPasswordEncoder.matches(requestDTO.getPassword(), fromDb.get().getPassword())).describedAs("Password is changed").isTrue();

        assertThat(fromDb.get().getName()).isEqualTo(requestDTO.getName());
    }

    @Test
    void updateUserValidation() throws Exception {
        UserUpdateRequestDTO requestDTO = UserUpdateRequestDTO.builder().email("ben@ben.aa").password("").name("").build();

        MvcResult mvcResult = performAuthPost("/api/user", requestDTO).andExpect(status().isBadRequest()).andReturn();

        StandardValidationMessageAssert standardValidation = assertThat(mvcResult).error().isStandardValidation();
        standardValidation.onField("password");
        standardValidation.onField("name");

        requestDTO = UserUpdateRequestDTO.builder().email("ben@ben.aa").password("aksjhd  dasdsa").name("a").build();
        dbPopulator.createUserIfNotExists(requestDTO.getEmail());
        mvcResult = performAuthPost("/api/user", requestDTO).andExpect(status().isBadRequest()).andReturn();
        assertThat(mvcResult).error().isCustomValidation().hasMessage("username_already_exists");
    }

}
