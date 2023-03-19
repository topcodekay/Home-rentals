import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";
import InputWrapper from "./InputWrapper";

export default function Form() {
  return (
    <>
    <Box>
    <Text fontSize={'xl'} className='capitalize font-medium  md:text-[1.5rem] leading-8 text-black text-center'>Your property with us and be confident that your room will be filled out!</Text>
      <Box
        data-aos="fade-up"
        className="py-[52px] rounded-[10px] px-12 sm:px-8 md:px-12 lg:px-[63px]"
      >
        <Box
          paddingTop={"35px"}
          className="shadow-8xl rounded-[10px] px-6 sm:px-8 md:px-12 lg:px-[63px]"
        >
          <Heading
            as={"h2"}
            fontSize={"lg"}
            className="text-[orange] tracking-[0.1px] text-center leading-10 text-2xl md:text-[28px] font-poppin font-bold mb-8 md:mb-[66px]"
          >
            Add New Properties
          </Heading>
          <FormControl isRequired>
            <Box className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              <InputWrapper>
                <FormLabel>Name</FormLabel>
                <Input
                  placeholder="Enter Your Name"
                  className="form-input"
                  type={"text"}
                />
              </InputWrapper>
              <InputWrapper>
                <FormLabel>Address</FormLabel>
                <Input placeholder="Your Address" className="form-input" />
              </InputWrapper>
              <InputWrapper>
                <FormLabel>Unit Number</FormLabel>
                <Input placeholder="Enter Unit" className="form-input" />
              </InputWrapper>
              <InputWrapper>
                <FormLabel>City</FormLabel>
                <Select placeholder="Select City">
                  <option value="select">Select City</option>
                  <option>San Diego</option>
                  <option>New Orleans</option>
                  <option>Denver</option>
                  <option>Nashvi</option>
                  <option>Las Vegas</option>
                  <option>Boston</option>
                  <option>San Francisco</option>
                  <option>San Antonio</option>
                  <option>Colorado Sprin</option>
                  <option>Seattle</option>
                  <option>New York City</option>
                  <option>Tampa</option>
                  <option>Tamp</option>
                  <option>Charlotte</option>
                  <option>Miami</option>
                  <option>Austi</option>
                  <option>Virgi</option>
                  <option>Phoen</option>
                  <option>Atlan</option>
                  <option>Dallas</option>
                  <option>Memphis</option>
                  <option>Long Beach</option>
                  <option>Philadelphia</option>
                  <option>Chicago</option>
                  <option>Portland </option>
                  <option>Tucson</option>
                  <option>Houston</option>
                  <option>Los Angele</option>
                  <option>Jacksonvil</option>
                  <option>Portland</option>
                  <option>Sacramento</option>
                  <option>Fort Worth</option>
                </Select>
              </InputWrapper>
              <InputWrapper>
                <FormLabel>State</FormLabel>
                <Select placeholder="Enter State">
                  <option value="select">Select State</option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">District Of Columbia</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </Select>
              </InputWrapper>
              <InputWrapper>
                <FormLabel>Room Types</FormLabel>
                <Select placeholder="Select preferred room">
                  <option>Standard Suites</option>
                  <option>Junior Suites</option>
                  <option>Presidential Suites</option>
                  <option>Penthouse Suites</option>
                </Select>
              </InputWrapper>
              <InputWrapper>
                <FormLabel>Price</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents={"none"}
                    color={"gray.300"}
                    fontSize={"1.2em"}
                    children={"$"}
                  />
                  <Input
                    placeholder={"Enter Amount"}
                    type="number"
                    className="form-input"
                  />
                </InputGroup>
              </InputWrapper>
              <InputWrapper autoclass="sm:col-span-2 md:col-span-3">
                <FormLabel>Description</FormLabel>
                <Textarea
                  placeholder="Your House Description"
                  className="form-input"
                />
              </InputWrapper>
              <Box className="sm:col-span-2 md:col-span-3">
                <InputWrapper>
                  <FormLabel>Upload Photo</FormLabel>
                  <label
                    htmlFor="file-upload"
                    className="block py-8 border border-dashed border-[orange] rounded-[10px] bg-[rgba(244,81,30,0.01)]"
                  >
                    <p className="font-poppin font-medium text-black text-center">
                      Drag your images here, or{" "}
                      <span className="text-[orange]">browse</span>
                    </p>
                    <span className="block text-center text-black/[0.5] text-xs mt-1.5">
                      Supported: JPG, JPEG, PNG
                    </span>
                  </label>
                  <Input type={"file"} color={"orange.300"} />
                </InputWrapper>
              </Box>
            </Box>
          </FormControl>
          <Box className="text-center">
            <Button
              colorScheme={"orange.300"}
              type={"submit"}
              marginBottom={"35px"}
              variant="solid"
              className="bg-[orange] py-5 text-white rounded-[10px] w-[50%] sm:w-[60%] block mt-12 md:mt-[80px]"
            >
              Add New Property
            </Button>
          </Box>
        </Box>
      </Box>
      </Box>
    </>
  );
}
