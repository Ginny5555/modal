<template>
  <div class="mx-auto d-flex">
    <div class="w-auto eight">
      <label>Gender</label>
      <div>
        <button :class="{ active: formData.gender === 'male' }" @click="setGender('male')">Male</button>
        <button
          :class="{ active: formData.gender === 'female' }"
          @click="setGender('female')"
        >Female</button>
      </div>
    </div>
    <div class="w-auto">
      <label>Nicotine user?</label>
      <div>
        <button :class="{ active: formData.nicotine === 'yes' }" @click="setNicotine('yes')">Yes</button>
        <button :class="{ active: formData.nicotine === 'no' }" @click="setNicotine('no')">No</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AboutView",

  data() {
    return {
      isInvalidDate: false,
      currentStep: 1,
      isNextButtonActive: false,
      formattedPrice: 96,
      formattedGood: 128,
      formattedFair: 198,
      formData: {
        gender: "",
        input2: "",
        nicotine: "",
        zip: "",
        dateOfBirth: "",
        selectedYear: 10,
        selectedPrice: 300,

        blueBackgroundWidth: 0,
        trackGradientStart: "yellow",
        trackGradientEnd: "yellow"
      }
    };
  },

  computed: {
    progressPercentage() {
      return `${((this.currentStep - 1) / 2) * 100}%`;
    },
    isAllFieldsEmpty() {
      return Object.values(this.formData).every(value => value === "");
    }
  },
  methods: {
    nextStep() {
      if (this.currentStep <= 2) {
        this.currentStep++;
      }
    },
    ForvardStep() {
      if (this.currentStep > 1) {
        this.currentStep--;
      }
    },

    validateAndNextStep() {
      const requiredFields = ["gender", "nicotine", "zip", "dateOfBirth"];
      let validationPassed = true;

      for (const field of requiredFields) {
        if (!this.formData[field]) {
          validationPassed = false;
          break;
        }
      }

      if (validationPassed && !this.isInvalidDate) {
        this.isNextButtonActive = true; // Enable the button
        console.log("Validation passed");
      } else {
        this.isNextButtonActive = false; // Disable the button
        console.log(
          "Validation failed: Some required fields are missing or date is invalid"
        );
      }
    },
    nextButtonClick() {
      if (this.isNextButtonActive) {
        this.nextStep();
      } else {
        console.log("Button is not active");
      }
    },

    updateYear(event) {
      this.formData.selectedYear = parseInt(event.target.value);
      this.formattedPrice = Math.floor(1 + Math.random() * (999 - 96 + 1));
      this.formattedGood = Math.floor(1 + Math.random() * (999 - 128 + 1));
      this.formattedFair = Math.floor(1 + Math.random() * (999 - 198 + 1));
      const targetYear = parseInt(event.target.value);
      this.animateChangeWithDelay(targetYear);
    },
    animateChangeWithDelay(targetYear) {
      const delay = 50; // Задержка между изменениями (в миллисекундах)
      const step = 10; // Шаг изменения

      const animateValue = (currentValue, targetValue, property) => {
        if (currentValue === targetValue) return;

        const newValue =
          currentValue + step * Math.sign(targetValue - currentValue);
        this[property] = newValue;

        if (
          (targetValue - newValue) * Math.sign(targetValue - currentValue) >
          0
        ) {
          setTimeout(() => {
            animateValue(newValue, targetValue, property);
          }, delay);
        } else {
          this[property] = targetValue; // Завершаем анимацию, устанавливая финальное значение
        }
      };
      animateValue(
        this.formattedPrice,
        this.getRandomValue(198, 999),
        "formattedPrice"
      );
      animateValue(
        this.formattedFair,
        this.getRandomValue(198, 999),
        "formattedFair"
      );
      animateValue(
        this.formattedGood,
        this.getRandomValue(128, 999),
        "formattedGood"
      );
      animateValue(
        this.formData.selectedYear,
        targetYear,
        "formData.selectedYear"
      );
    },

    getRandomValue(min, max) {
      return Math.floor(min + Math.random() * (max - min + 1));
    },

    updatePrice() {
      // Update formattedPrice with a random value between 96 and 196
      this.formattedPrice = Math.floor(1 + Math.random() * (999 - 96 + 1));
      this.formattedGood = Math.floor(1 + Math.random() * (999 - 128 + 1));
      this.formattedFair = Math.floor(1 + Math.random() * (999 - 198 + 1));
      const targetPrice = this.formattedPrice; // Use the new formattedPrice value
      this.animateChangeWithDelay(targetPrice);
    },
    submitForm() {
      console.log("Form data submitted:", this.formData);
      this.nextStep();
      this.formData = {
        gender: "",
        input2: "",
        nicotine: "",
        zip: "",
        dateOfBirth: ""
      };
    },
    setGender(gender) {
      this.formData.gender = gender;
    },
    setNicotine(nicotine) {
      this.formData.nicotine = nicotine;
    },

    validateDate() {
      this.isInvalidDate = false;

      if (!this.formData.dateOfBirth) {
        return;
      }

      const currentDate = new Date();
      const inputDate = new Date(this.formData.dateOfBirth);

      const minAllowedDate = new Date();
      minAllowedDate.setFullYear(currentDate.getFullYear() - 100);
      minAllowedDate.setHours(0, 0, 0, 0);

      const maxAllowedDate = new Date();
      maxAllowedDate.setFullYear(currentDate.getFullYear() - 18);
      maxAllowedDate.setHours(23, 59, 59, 999);
      if (
        inputDate >= minAllowedDate &&
        inputDate <= maxAllowedDate &&
        inputDate.getDate() >= 1 &&
        inputDate.getDate() <=
          new Date(
            inputDate.getFullYear(),
            inputDate.getMonth() + 1,
            0
          ).getDate() &&
        inputDate.getMonth() >= 0 &&
        inputDate.getMonth() <= 11
      ) {
        this.isInvalidDate = false; // Сбрасываем ошибку
      } else {
        this.isInvalidDate = true;
      }
    },
    sanitizeZipCode() {
      // Remove non-numeric characters from zip code
      this.formData.zip = this.formData.zip.replace(/\D/g, "");

      // If you want to limit the zip code to a maximum length of 4 characters
      if (this.formData.zip.length > 4) {
        this.formData.zip = this.formData.zip.slice(0, 4);
      }
    }
  },
  mounted() {
    const inputFields = document.querySelectorAll(".modal-form__input input");
    inputFields.forEach(input => {
      input.addEventListener("input", this.validateAndNextStep);
    });
  }
};
</script>


