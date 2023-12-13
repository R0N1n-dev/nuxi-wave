<template>
  <div>
    <w-flex>
      <p>Hello wave</p>
      <w-form class="mt4">
        <w-input label="name" v-model="name" />
        <w-input label="origin" v-model="origin" />
        <w-input label="description" v-model="description" />
        <w-select v-model="selectedCategory" :items="categories"
          >Categories</w-select
        >
        <div>
          <w-input
            label="ingredient(include measurement)"
            v-model="inMeasure"
          />
          <span><i class="bx bx-plus" @click="addIn" /></span>
        </div>

        <w-input label="Cooking Step" v-model="prepStep" />
        <i class="bx bx-plus" @click="addStep" />
        <br />
        <w-button bg-color="success" @click="open" id="upload_widget"
          >Upload Image</w-button
        >
      </w-form>
    </w-flex>
  </div>
</template>

<script setup>
useHead({
  script: [
    {
      src: "https://widget.cloudinary.com/v2.0/global/all.js",
      type: "text/javascript",
    },
  ],
});
let myWidget;

function open() {
  myWidget.open();
}
onMounted(() => {
  myWidget = cloudinary.createUploadWidget(
    {
      cloudName: "rozes",
      uploadPreset: "xnrhcleq",
      // cropping: true, //add a cropping step
      // showAdvancedOptions: true,  //add advanced options (public_id and tag)
      // sources: [ "local", "url"], // restrict the upload sources to URL and local files
      // multiple: false,  //restrict upload to a single file
      folder: "recipe-images", //upload files to the specified folder
      // tags: ["users", "profile"], //add the given tags to the uploaded files
      // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
      // clientAllowedFormats: ["images"], //restrict uploading to image files only
      // maxImageFileSize: 2000000,  //restrict file size to less than 2MB
      // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
      // theme: "purple", //change to a purple theme
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        console.log("Done! Here is the image info: ", result.info);
        document
          .getElementById("uploadedimage")
          .setAttribute("src", result.info.secure_url);
        console.log(result.info.secure_url);
        image.value = result.info.secure_url;
      }
    }
  );
});
//const cloudName = "rozes"; // replace with your own cloud name
//const uploadPreset = "xnrhcleq"; // replace with your own upload preset

const name = ref("");
const origin = ref("");
const description = ref("");
const categories = ref([
  { label: "Appetizer" /*, value: "appetiser"*/ },
  { label: "Snack" /*, value: "snack"*/ },
  { label: "Sides" /*, value: "side"*/ },
  { label: "Main course" /*, value: "main course"*/ },
  { label: "Dessert" /*, value: "dessert"*/ },
  { label: "Fastfood" /*, value: "fast food" */ },
  { label: "Pastries" /*, value: "pastries"*/ },
]);
const selectedCategory = ref(null);
console.log(selectedCategory.value);
const inMeasure = ref("");
const ingredients = ref([]);
const prepStep = ref("");
const cookingSteps = ref([]);
const image = ref("");
function addIn() {
  if (inMeasure.value !== "") {
    ingredients.value.push(inMeasure.value);
    inMeasure.value = "";
    console.log("Succesfully added ingredient");
    console.log(ingredients.value);
  } else {
    alert("No ingredient, please add");
    return;
  }
}
function removeIngredient() {
  ingredients.value.length > 0 && ingredients.value.pop();
}
function removeCookingStep() {
  cookingSteps.value.length > 0 && cookingSteps.value.pop();
}
function addStep() {
  if (prepStep.value !== "") {
    cookingSteps.value.push(prepStep.value);
    prepStep.value = "";
    console.log("Added cooking step");
  } else {
    alert("Step not added, add first");
    return;
  }
}
</script>

<style scoped>
i.bx:hover {
  cursor: pointer;
  color: red;
}
</style>
