<template>
  <div>
    <div class="modal-progress d-flex align-items-center">
      <img src="../assets/logo.svg" alt />
    </div>
    <div class="progress">
      <div class="progress-bar" role="progressbar" :style="{ width: progressPercentage }"></div>
    </div>
    <div class="modal-form mx-auto" v-if="currentStep === 1">
      <div class="window d-flex flex-column">
        <h2>
          First, let’s get a quick
          price estimate
        </h2>
        <div class="modal-form__select mx-auto">
          <div class="mx-auto d-flex">
            <div class="w-auto eight">
              <label>Gender</label>
              <div>
                <button
                  :class="{ active: formData.gender === 'male' }"
                  @click="setGender('male')"
                >Male</button>
                <button
                  :class="{ active: formData.gender === 'female' }"
                  @click="setGender('female')"
                >Female</button>
              </div>
            </div>
            <div class="w-auto">
              <label>Nicotine user?</label>
              <div>
                <button
                  :class="{ active: formData.nicotine === 'yes' }"
                  @click="setNicotine('yes')"
                >Yes</button>
                <button
                  :class="{ active: formData.nicotine === 'no' }"
                  @click="setNicotine('no')"
                >No</button>
              </div>
            </div>
          </div>
          <div class="modal-form__input d-flex">
            <div class="w-auto d-flex flex-column left">
              <label>Date of Birth:</label>
              <input type="text" placeholder="MM/DD/YYYY" v-model="formData.dateOfBirth" />
            </div>
            <div class="w-auto d-flex flex-column">
              <label>Zip code:</label>
              <input type="text" placeholder="Zip code" v-model="formData.zip" />
            </div>
          </div>
          <div class="modal-form__button w-100 d-flex">
            <button type="button" class="next mx-auto" @click="validateAndNextStep">
              See estimate
              <img src="../assets/ArrowRight.svg" alt />
            </button>
          </div>
        </div>
      </div>
      <div class="grey">
        <h5>Pendella Technologies, Inc (DBA PENDELLA TECHNOLOGIES INSURANCE AGENCY in CA & NY) ("Pendella"), a Delaware corporation with its principal place of business in Fort Myers, Florida, is a licensed independent insurance agency. Any insurance policy premium quotes or ranges displayed are non-binding. The final insurance policy premium for any policy is determined by the underwriting insurance company following application.</h5>
      </div>
    </div>
    <div class="modal-rates mx-auto" v-else>
      <div class="window d-flex flex-column">
        <div>
          <button @click="ForvardStep" class="forvard">
            <img src="../assets/Arrowleft.svg" alt />Edit
          </button>
        </div>
        <h2>
          Here are your estimated
          monthly rates
        </h2>
        <div class="modal-rates__health d-flex flex-row mx-auto">
          <div class="blue">
            <div class="blue-rates text-center">
              <h4 class="mx-auto">
                Excellent health
                <a href class="info-link">
                  <img src="../assets/info.svg" alt />
                </a>
              </h4>
              <div class="d-flex flex-row justify-content-center align-items-end">
                <h2>$96</h2>
                <span>/mo</span>
              </div>
            </div>
          </div>
          <div class="blue">
            <div class="blue-rates text-center">
              <h4 class="mx-auto">
                Good health
                <a href class="info-link">
                  <img src="../assets/info.svg" alt />
                </a>
              </h4>
              <div class="d-flex flex-row justify-content-center align-items-end">
                <h2>$128</h2>
                <span>/mo</span>
              </div>
            </div>
          </div>
          <div class="blue">
            <div class="blue-rates text-center">
              <h4 class="mx-auto">
                Fair health
                <a href class="info-link">
                  <img src="../assets/info.svg" alt />
                </a>
              </h4>
              <div class="d-flex flex-row justify-content-center align-items-end">
                <h2>$198</h2>
                <span>/mo</span>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-rates__track d-flex flex-row mx-auto">
          <div class="modal-rates__track-thumb d-flex flex-column align-items-center">
            <h4 clas="mx-auto d-flex justify-content-center">
              Coverage amount
              <a href class="info-link">
                <img src="../assets/info.svg" alt />
              </a>
            </h4>
            <p clas="mx-auto">$ {{ formData.selectedPrice }}, 000</p>
            <input
              type="range"
              min="50"
              max="900"
              step="10"
              v-model="formData.selectedPrice"
              @input="updatePrice"
            />
          </div>
          <div class="d-flex flex-column align-items-center">
            <h4>
              Years of coverage
              <a href class="info-link">
                <img src="../assets/info.svg" alt />
              </a>
              <div class="info-window">
                Each person’s situation is different -
                so we always recommend talking to an agent.
                <br />Generally,
                our recommendation is to cover yourself up to age 65 (ex.
                If you’re 45, a 20 year term would cover you to 65).
                <br />
                <br />
                <b>Term Lengths:</b>
                <br />

                <br />
                <b>10 year term</b> - Provides the shortest protection, however,
                will come at the lowest cost.
                <br />
                <br />
                <b>20 year term</b>- The most common
                term length purchased, provides adequate protection for most.
                <br />
                <br />
                <b>30 and 40 year terms</b> - Provides the longest protection,
                at a higher cost.
              </div>
            </h4>

            <p>{{ formData.selectedYear }} Years</p>
            <input
              type="range"
              min="1"
              max="30"
              step="1"
              v-model="formData.selectedYear"
              @input="updateYear"
            />
          </div>
        </div>
        <div class="modal-rates__quote d-flex flex-column">
          <div class="mx-auto d-flex flex-row align-items-center">
            <img src="../assets/wallet.svg" alt />
            <a href>How much do I need?</a>
          </div>

          <button class="quote mx-auto" type="button" @click="submitForm">Personalize quote</button>
        </div>
      </div>
      <div class="grey">
        <p
          class="mx-auto text-center"
        >Please note that all prices quoted are subject to change, including due to underwriting.</p>
        <h5>Pendella Technologies, Inc (DBA PENDELLA TECHNOLOGIES INSURANCE AGENCY in CA & NY) ("Pendella"), a Delaware corporation with its principal place of business in Fort Myers, Florida, is a licensed independent insurance agency. Any insurance policy premium quotes or ranges displayed are non-binding. The final insurance policy premium for any policy is determined by the underwriting insurance company following application.</h5>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import "bootstrap-slider";
export default {
  data() {
    return {
      currentStep: 1,
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
      if (this.formData.gender !== "") {
        this.nextStep();
      } else {
        console.log("Step 1 validation failed");
      }
    },
    updateYear(event) {
      this.formData.selectedYear = parseInt(event.target.value);
    },

    updatePrice(event) {
      this.formData.selectedPrice = parseInt(event.target.value);
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
    }
  }
};
</script>



<style lang="scss">
$blue-prog: #44b0ef;
$white: #fff;
$bg-grey: #f8fafc;
$text-color: #121926;
$border: #cdd5df;
$border-gr: #e3e8ef;
h2 {
  font-size: 32px;

  font-weight: 600;
  line-height: 41.6px;
  width: 50%;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 16px;
}
h4 {
  font-size: 16px;
  color: $text-color;
  font-weight: 400;
  line-height: 14px;
}
label {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22.68px;
  margin-bottom: 8px;
  margin-top: 16px;
}
.info-window {
  display: none;
  position: absolute;
  background-color: #ffffff;
  border: 1px solid #ccc;
  padding: 10px;
  z-index: 1;
}

.blue {
  padding: 0 22px 0 22px;
  border-right: 1px solid $border-gr;
  &:last-child {
    border: none;
    padding-right: none;
  }
  &:first-child {
    padding-left: none;
  }
  &-rates {
    width: 156px;
  }
  & h2 {
    color: $blue-prog;
    margin: 0;
    width: fit-content;
  }
  & span {
    font-size: 20px;
    color: $blue-prog;
    margin: 0;
    width: fit-content;
  }
}
.grey {
  margin-top: 28px;
  & p {
    font-size: 14px;
    color: $border;
    font-weight: 400;
    line-height: 18.2px;
    margin-bottom: 12px;
  }
}
.info-link {
  display: inline-block;
  text-decoration: none;
}

.info-window {
  position: absolute;
  display: none;
  background-color: black;
  color: white;
  border-radius: 5px;
  padding: 10px;

  z-index: 1;
  width: 200px;

  font-size: 12px;

  font-weight: 400;
  line-height: 18px;
  width: 320px;
  padding: 12px;
}

.info-window::before {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 10%;
  transform: translateX(-50%) rotate(45deg);
  width: 10px;
  height: 10px;
  background-color: $text-color;
  box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03),
    0px 12px 16px -4px rgba(16, 24, 40, 0.08);
}

.info-link:hover + .info-window {
  display: block;
  top: -3%;
  left: 84%;
  transform: translateX(-50%);
  margin-top: 10px;
}

.forvard {
  background: transparent;
  border: none;
  padding: 0;
  margin-top: 18px;
  margin-left: 12px;
}
.window {
  background-color: $white;
  filter: drop-shadow(0px 2px 4px rgba(16, 24, 40, 0.06))
    drop-shadow(0px 4px 8px rgba(16, 24, 40, 0.1));
}
.modal {
  &-progress {
    height: 85px;

    & img {
      width: 160px;
      margin-left: 41.6px;
    }
  }
  &-rates {
    width: 800px;
    margin-top: 48px;
    &__health {
      width: 600px;
      border-bottom: 1px solid $border-gr;
      padding: 32px 0;
    }
    &__track {
      margin: 32px 0;
      &-thumb {
        &:first-child {
          margin-right: 56px;
        }
      }
      & p {
        margin-top: 16px;
        font-size: 20px;

        font-weight: 600;
        line-height: 14px;
      }
    }
    &__quote {
      & a {
        color: $blue-prog;
        text-decoration: underline;
        font-size: 16px;

        font-weight: 600;
        line-height: 19.2px; /*  */
      }
    }
  }
  &-form {
    margin-top: 48px;
    width: 800px;
    & h2 {
      padding-top: 48px;
    }
    &__select {
      & button {
        padding: 16px 5px;
        width: 100px;
        font-size: 16px;
        font-family: Inter;
        border-radius: 5px;
        font-weight: 400;
        line-height: 19.2px;
        background-color: transparent;
        color: $text-color;
        border: 1px solid $border;
        &:hover {
          border: 1px solid $blue-prog;
          background-color: rgba($blue-prog, 0.2);
          color: $text-color;
        }
        &.active {
          border: 1px solid $blue-prog;
          background-color: rgba($blue-prog, 0.2);
          color: $text-color;
        }
      }
    }
  }
}

.progress {
  height: 5px;
  &-bar {
    transition: width 0.5s;
    background-color: $blue-prog;
    height: 5px;
    border-radius: 0px 5px 5px 0px;
  }
}
.eight {
  margin-right: 8px;
}
button {
  padding: 8px 16px;
  border: 1px solid #ccc;
  background-color: #f8f8f8;
  margin-right: 8px;
  cursor: pointer;
  margin-right: 8px;
}

button.active {
  background-color: $blue-prog;
  color: white;
}
input {
  width: 208px;
  border: 1px solid $border;
  border-radius: 5px;
  height: 48px;

  padding: 17px 16px;
}
.left {
  margin-right: 16px;
}
button.quote {
  background-color: $blue-prog;
  width: 264px;
  height: 50px;
  color: $white;
  font-size: 16px;
  border-radius: 5px;
  font-weight: 600;
  line-height: 16px;
  margin-top: 40px;
  margin-bottom: 58px;
}
button.next {
  width: 225px;
  margin-top: 35px;
  background-color: $border;
  border-radius: 5px;
  color: $white;
  margin-bottom: 77px;
  &:hover {
    background-color: $blue-prog;
    color: $white;
  }
}
h5 {
  color: $border;
  font-size: 10px;
  font-weight: 400;
  line-height: normal;
  width: 800px;
  margin: 0 auto;
}
input[type="range"] {
  font-size: 1.5rem;
  width: 220px;
  border: none;
  padding: 0;
}

input[type="range"] {
  --thumb-height: 30px;
  --track-height: 6px;
  --track-color: rgba(0, 0, 0, 0.2);
  --brightness-hover: 180%;
  --brightness-down: 80%;
  --clip-edges: 0.125em;
  --clip-edges-border-radius: 6px;
  width: 220px;
}

input[type="range"]::-webkit-slider-thumb {
  --thumb-radius: calc((var(--thumb-height) * 0.5) - 1px);
  --thumb-border-width: 6px;
  --thumb-border-color: #44b0ef;
  --clip-top: calc((var(--thumb-height) - var(--track-height)) * 0.5 - 0.5px);
  --clip-bottom: calc(var(--thumb-height) - var(--clip-top));
  --clip-further: calc(100% + 1px);
  --box-fill: calc(-100vmax - var(--thumb-width, var(--thumb-height)) - 0px) 0 0
    100vmax #44b0ef;

  width: var(--thumb-width, var(--thumb-height));
  background: #fff; /* Change the background color to white */
  box-shadow: var(--box-fill);
  border-radius: 50%;
  border: 6px solid #44b0ef;

  filter: brightness(100%);
  clip-path: polygon(
    100% -1px,
    var(--clip-edges) 1px,
    0 var(--clip-top),
    -100vmax var(--clip-top),
    -100vmax var(--clip-bottom),
    0 var(--clip-bottom),
    var(--clip-edges) 100%,
    var(--clip-further) var(--clip-further)
  );

  position: relative;
}

input[type="range"]::-webkit-slider-thumb {
  border: 6px solid #44b0ef;
  cursor: grab;
}
input[type="range"]:hover::-webkit-slider-thumb {
  cursor: grab;
}
input[type="range"]::-webkit-slider-runnable-track {
  background: linear-gradient(var(--track-color) 0 0) scroll no-repeat center /
    100% calc(var(--track-height) + 1px);
  background-color: #fff; /* Change the background color to blue */
  height: var(--track-height);
  border-radius: var(--track-border-radius);
}

input[type="range"]:active::-webkit-slider-thumb {
  filter: brightness(var(--brightness-down));
  cursor: grabbing;
}

/* ... (other styles) */

input[type="range"]::-webkit-slider-runnable-track {
  background: linear-gradient(var(--track-color) 0 0) scroll no-repeat center /
    100% calc(var(--track-height) + 1px);
  background-color: #fff; /* Change the background color to blue */
  height: var(--track-height);
  border-radius: 50%;
}

input[type="range"]:active::-webkit-slider-thumb {
  filter: brightness(var(--brightness-down));

  cursor: grabbing;
}

/* range commons */
input[type="range"] {
  position: relative;
  background: #fff;
  overflow: hidden;
}

input[type="range"]:active {
  cursor: grabbing;
}

input[type="range"]:disabled {
  cursor: not-allowed;
}

/* WebKit specific styles */
input[type="range"],
input[type="range"]::-webkit-slider-runnable-track,
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  transition: all ease 100ms;
  height: var(--thumb-height);
}

input[type="range"]::-webkit-slider-runnable-track,
input[type="range"]::-webkit-slider-thumb {
  position: relative;
}


</style>
